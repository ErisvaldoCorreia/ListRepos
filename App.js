/* Projeto do Mini Curso RocketSeat */

import React, { Component } from 'react';
import {
  Platform,  StyleSheet,  Text,  View, ScrollView, TouchableOpacity  } from 'react-native';

/* Importando componente criado para uso no render */
import Repo from './componentes/Repo';

export default class App extends Component<{}> {
  
  state = {
    /* Estados de informação para compor os repositórios */
    repos: [
      {
        id: 1,
        thumbnail: 'https://facebook.github.io/react-native/docs/assets/favicon.png',
        title: 'handzon.github.io',
        author: 'HandzOn',
      },
      {
        id: 2,
        thumbnail: 'https://facebook.github.io/react-native/docs/assets/favicon.png',
        title: 'erisvaldocorreia.github.io',
        author: 'erisvaldocorreia',
      },
      {
        id: 3,
        thumbnail: 'https://facebook.github.io/react-native/docs/assets/favicon.png',
        title: 'handzon.github.io',
        author: 'HandzOn',
      },
    ],
  }  
  
  render() {
    return (
      <View style={styles.container}>
        
        {/* Cabecalho do App */}
        <View style={styles.header}>
          <Text style={styles.headerText}>GitHub Repositorios</Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.headerButton}> + </Text>
          </TouchableOpacity>
        </View>

        {/* Conteudo dos repositorios github */}
        <ScrollView contentContainerStyle={styles.repoList}>
          
          {/* Mapeamento do estado repos para criação das views */}
          { this.state.repos.map( repo => 
            <Repo key={repo.id} data={repo} /> ) }

        </ScrollView>

      </View>
    );
  }
}

/* Documentação de Estilos do Componente */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },
  header: {
    height: (Platform.OS === 'ios') ? 100 : 80,
    paddingTop: (Platform.OS === 'ios') ? 0 : 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 25,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111',
  },
  repoList: {
    padding: 30,
  },
  headerButton: {
    fontSize: 35,
    fontWeight: 'bold',
  }
});
