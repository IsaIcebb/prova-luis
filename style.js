import{StyleSheet} from 'react-native';

export default StyleSheet.create({
  
 containerTitulos: {
   alignItems: 'Center',
  padding: 20,
  
 },
  
 containerLogin: {
    padding: 50 ,
  },

safeAreaViewContainer: { flex: 1, backgroundColor: '#FFEFD6'},
    textoTitulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, alignSelf: 'center'},
    camposCadastroContainer: { marginBottom: 20 },
    campoTexto: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
        marginBottom: 10
    },

safeAreaViewContainer2:{
       flex: 1,
      backgroundColor: '#FFEFD6',
       borderWidth: 10,
      borderColor: '#FFEFD6',
},
    imagem: {
      width: '100%',
      aspectRatio: 1,
      borderRadius: 8,
    },
    filtro: {
      height: 40,
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 8,
      margin: 10,
      paddingHorizontal: 10,
      backgroundColor: '#fff',
    },
 
  containerImagemGaleria:{
    width: 150,
  },
 
  raioBorda:{
    borderRadius: 8,
 
  },
  imagemGaleria:{
    width: '100%',
    height: 200
  },
 
  bt:{
    color: 'yellow',
    padding: 10,
    margin:15,
  },
 card: {
  width: '48%',
  marginBottom: 15,
  backgroundColor: '#fff',
  borderRadius: 12,
  overflow: 'hidden',
  elevation: 3,
  shadowColor: '#000',
  shadowOpacity: 0.2,
  shadowRadius: 3,
  alignItems: 'center',
},

 card2: {
  width: '48%',
  marginBottom: 15,
  backgroundColor: '#FFB84D',
  borderRadius: 12,
  overflow: 'hidden',
  elevation: 3,
  shadowColor: '#000',
  shadowOpacity: 0.2,
  shadowRadius: 3,
  alignItems: 'center',
},


  imagem: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginBottom: 10,
  },
  
  info: {
    alignItems: 'center',
    marginBottom: 10,
  },
  
  nome: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5
  },
  
  preco: {
    fontSize: 16,
    color: '#E53935',
    fontWeight: '600',
  },
  
  botao: {
    backgroundColor: '#FFB300',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  
  textoBotao: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
  },
  containerGaleria: {
    flexDirection: 'row',
    flexWrap: 'wrap',    
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  info: {
    padding: 10,
    alignItems: 'center',
  },
  containerInicio: {
    flex: 1,
    backgroundColor: '#FFEFD6'
  },
  subtitulo: {
    fontSize: 25,
    fontWeight: 'bold',
    marginVertical: 10,
    marginLeft: 10,
    color:'#4A2F0B'
  },
 
  scrollConteudoInicio: {
    padding: 20,
  },
 
  tituloInicio: {
    fontSize: 22,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'Georgia',
    fontWeight:'500',
    color: '#4A2F0B'
  },

  tituloPesquisa: {
    fontSize: 22,
    marginBottom: 20,
    textAlign: 'left',
    fontWeight: 'Georgia',
  },

  scrollViewContainerP:{
    backgroundColor:'#FFEFD6'
  },
  linhaHorizontal: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    marginBottom: 20, 
  },
  
  item: {
    width: '48%',
    alignItems: 'center',
  },
 
  linhaInicio: {
    alignItems: 'center',
    marginBottom: 20,
    gap: 10,
  },
 
  imgInicio: {
    width: 120,
    height: 120,
    borderRadius: 10,
    flexDirection: 'row'
  },
 
  txtInicio: {
    fontSize: 18,
    fontWeight: 500,
    color: '#4A2F0B'
  },

 campoLabel: {
    fontSize: 15,
    fontWeight: "500",
    marginBottom: 4,
    color: "#444",
    letterSpacing: 0.2,
    marginLeft: 5,
    marginTop: 3
  },
});
 

export const drawerStyles ={
 headerStyle: {
   backgroundColor: '#FF8A00',
 },

headerTintColor: 'white',
 headerTitleStyle: {
   fontWeight: 'bold',
 },


 drawerStyle: {
   backgroundColor: '#FFEFD6',
   width: 240
   
 },
 drawerActiveTintColor: '#D96C00',


 drawerLabelStyle: {
   fontSize: 16,
   fontWeight: 'bold'
 },
};
