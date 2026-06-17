import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  ActivityIndicator,
} from 'react-native';

export default function Inicio({ route }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const usuario = route?.params?.usuario;

  useEffect(() => {
    buscarFilmes();
  }, []);

  async function buscarFilmes() {
    try {
      const response = await fetch(
        'https://api.themoviedb.org/3/discover/movie?api_key=2e75d40bcf7f70415c78cb9c4127f5f8&sort_by=popularity.desc'
      );

      const json = await response.json();

      if (!response.ok) {
        throw new Error(json.status_message || 'Erro ao buscar filmes');
      }

      setMovies(json.results);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#E50914" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={{ color: 'red' }}>{error}</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.containerTitulos}>
        {usuario && (
          <Text style={{ color: '#fff', marginBottom: 10 }}>
            Olá, {usuario.nome}! 👋
          </Text>
        )}
        
        <Text style={styles.textoTitulo}>
          🎬 <Text style={styles.textoCor}>Filmes em Cartaz no Cineflix</Text>
        </Text>
      </View>

      {movies.map((movie) => (
        <View key={movie.id} style={styles.card}>
          {movie.poster_path && (
            <Image
              source={{
                uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
              }}
              style={styles.poster}
            />
          )}

          <Text style={styles.movieTitle}>{movie.title}</Text>
          <Text style={styles.movieDate}>
            📅 {movie.release_date}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    backgroundColor: '#0f0f0f',
    paddingBottom: 40,
    alignItems: 'center',
  },
  containerTitulos: {
    width: '100%',
    alignItems: 'center',
    paddingTop: 25,
    paddingBottom: 30,
  },
  textoTitulo: {
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: 1,
    color: '#fff',
    textAlign: 'center',
  },
  textoCor: {
    color: '#E50914',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0f0f0f',
  },
  card: {
    width: 260,
    marginBottom: 30,
    backgroundColor: '#1a1a1a',
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 10,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 5,
    },
  },
  poster: {
    width: '100%',
    height: 390,
  },
  movieTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    paddingHorizontal: 12,
    marginTop: 15,
  },
  movieDate: {
    color: '#bdbdbd',
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 15,
    fontSize: 14,
  },
});