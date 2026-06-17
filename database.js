import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseSync('usuarios.db');

export async function initDB() {
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS usuarios (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT NOT NULL,
      sobrenome TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE,
      senha TEXT NOT NULL
    );
  `);
}

export async function cadastrarUsuario(nome, sobrenome, email, senha) {
  await db.runAsync(
    'INSERT INTO usuarios (nome, sobrenome, email, senha) VALUES (?, ?, ?, ?);',
    [nome, sobrenome, email, senha]
  );
}

export async function loginUsuario(email, senha) {
  const result = await db.getAllAsync(
    "SELECT * FROM usuarios WHERE email = ? AND senha = ?",
    [email, senha]
  );
  return result.length > 0 ? result[0] : null;
}
