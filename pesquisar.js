import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  Image,
  StyleSheet
} from 'react-native';

class Pesquisar extends React.Component {
  state = {
    filtro: '',
    filmes: []
  };

  buscarFilmes = async (texto) => {
    this.setState({ filtro: texto });

    if (texto.length < 2) {
      this.setState({ filmes: [] });
      return;
    }

    try {
      const resposta = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=2e75d40bcf7f70415c78cb9c4127f5f8&query=${texto}`
      );

      const dados = await resposta.json();

      this.setState({
        filmes: dados.results || []
      });

    } catch (erro) {
      console.log(erro);
    }
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.titulo}>
            🔎 <Text style={styles.tituloVermelho}>Filmes em cartaz </Text>
          </Text>

          <Text style={styles.subtitulo}>
            Encontre qualquer filme
          </Text>
        </View>

        <TextInput
          style={styles.input}
          placeholder="Pesquisar filme..."
          placeholderTextColor="#888"
          value={this.state.filtro}
          onChangeText={(text) => this.buscarFilmes(text)}
        />

        <View style={styles.galeria}>
          {this.state.filmes.map((item) => (
            <View key={item.id} style={styles.card}>
              {item.poster_path && (
                <Image
                  source={{
                    uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                  }}
                  style={styles.poster}
                />
              )}

              <Text style={styles.nomeFilme}>
                {item.title}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f0f',
  },

  header: {
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 25,
  },

  titulo: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#fff',
  },

  tituloVermelho: {
    color: '#E50914',
  },

  subtitulo: {
    color: '#bdbdbd',
    marginTop: 8,
    fontSize: 14,
  },

  input: {
    backgroundColor: '#1a1a1a',
    color: '#fff',
    marginHorizontal: 20,
    padding: 15,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#E50914',
    fontSize: 16,
    marginBottom: 25,
  },

  galeria: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingBottom: 30,
  },

  card: {
    width: 160,
    backgroundColor: '#1a1a1a',
    borderRadius: 15,
    margin: 10,
    overflow: 'hidden',
    elevation: 8,
  },

  poster: {
    width: '100%',
    height: 230,
  },

  nomeFilme: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    fontSize: 14,
  },
});

export default Pesquisar;