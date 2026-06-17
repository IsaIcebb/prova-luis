import { useState } from 'react';
import { View, Text, TextInput, Alert, TouchableOpacity } from 'react-native';
import Estilos from '../styles/estilos';
import { cadastrarUsuario } from '../database';

export default function Cadastro({ navigation }) {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  async function handleCadastro() {
    if (!nome.trim() || !sobrenome.trim() || !email.trim() || !senha.trim()) {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    }

    try {
      await cadastrarUsuario(nome, sobrenome, email, senha);

      Alert.alert('Sucesso', 'Conta criada com sucesso!', [
        {
          text: 'OK',
        
          onPress: () => navigation.goBack() 
        }
      ]);

    } catch (error) {
      Alert.alert('Erro', 'Este email já está cadastrado ou ocorreu um problema.');
    }
  }

  return (
    <View style={Estilos.containerLogin}>
      <Text style={Estilos.textoTitulo}>Criar Conta</Text>

      <TextInput
        placeholder="Nome"
        placeholderTextColor="#888" 
        style={Estilos.campoTexto}
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        placeholder="Sobrenome"
        placeholderTextColor="#888"
        style={Estilos.campoTexto}
        value={sobrenome}
        onChangeText={setSobrenome}
      />

      <TextInput
        placeholder="Email"
        placeholderTextColor="#888"
        style={Estilos.campoTexto}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        placeholder="Senha"
        placeholderTextColor="#888"
        secureTextEntry
        style={Estilos.campoTexto}
        value={senha}
        onChangeText={setSenha}
      />

      {/* Botão Cadastrar */}
      <TouchableOpacity
        style={[
          Estilos.b,
          {
            backgroundColor: '#400662',
            marginBottom: 15,
          },
        ]}
        onPress={handleCadastro}
      >
        <Text style={{ color: 'white', textAlign: 'center', padding: 10, fontWeight: 'bold' }}>
          Cadastrar
        </Text>
      </TouchableOpacity>

      
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={{ color: '#888', textAlign: 'center', marginTop: 10 }}>
          Já tem uma conta? Faça login
        </Text>
      </TouchableOpacity>
    </View>
  );
}