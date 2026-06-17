import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import Estilos from '../styles/estilos';
import { loginUsuario } from '../database';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  async function handleLogin() {
    const usuario = await loginUsuario(email, senha);

    if (!usuario) {
      Alert.alert("Erro", "Email ou senha incorretos.");
      return;
    }

    // Agora que mudamos o nome no App.js para "Inicio", isso vai funcionar perfeitamente!
    navigation.replace("Inicio", { usuario });
  }

  return (
    <View style={Estilos.containerLogin}>
      <Text style={Estilos.textoTitulo}>Login</Text>

      <TextInput
        placeholder="Email"
        placeholderTextColor="#888" // Garante que o texto de dica fique visível
        style={Estilos.campoTexto}
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none" // Evita que o teclado mude a primeira letra do e-mail para maiúscula
        keyboardType="email-address"
      />

      <TextInput
        placeholder="Senha"
        placeholderTextColor="#888" // Garante que o texto de dica fique visível
        secureTextEntry
        style={Estilos.campoTexto}
        value={senha}
        onChangeText={setSenha}
      />

      {/* Botão Entrar */}
      <TouchableOpacity
        style={[Estilos.b, { backgroundColor: '#400662', marginBottom: 15 }]}
        onPress={handleLogin}
      >
        <Text style={{ color: 'white', textAlign: 'center', padding: 10, fontWeight: 'bold' }}>
          Entrar
        </Text>
      </TouchableOpacity>

      {/* Botão Criar Conta (Ajustado os fundos duplicados) */}
      <TouchableOpacity
        style={{ backgroundColor: '#400662', borderRadius: 4 }} // Cor roxa aplicada no botão inteiro
        onPress={() => navigation.navigate("Cadastro")}
      >
        <Text style={{ color: 'white', textAlign: 'center', padding: 10, fontWeight: 'bold' }}>
          Criar Conta
        </Text>
      </TouchableOpacity>
    </View>
  );
}