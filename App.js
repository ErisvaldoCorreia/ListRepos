/* Projeto do Mini Curso RocketSeat */

import React, { Component } from 'react';
import {
  Platform,  StyleSheet,  Text,  View, ScrollView, TouchableOpacity, AsyncStorage  } from 'react-native';

/* Importando componentes criado para uso no render */
import Repo from './componentes/Repo';
import NewRepoModal from './componentes/NewRepoModal';

export default class App extends Component {
  
  state = {
    /* Estados de informação para compor os repositórios */
    modalVisible: false,
    repos: [],
  };

  // leitura do localstorage do aparelho para preenchimento dos dados no app
  async componentDidMount() {
    const repos = JSON.parse( await AsyncStorage.getItem('@Minicurso:repositories')) || [];

    this.setState({ repos });
  }
  
  // função que chama a api do github para incluir os repositorios na listagem!
  _addRepository = async (newRepoText) => {
    const repoCall = await fetch('https://api.github.com/repos/'+newRepoText);
    const response = await repoCall.json();

    const repository = {
      id: response.id,
      thumbnail: response.owner.avatar_url,
      title: response.name,
      author: response.owner.login,
      url: response.html_url,
    };

    this.setState({
      modalVisible: false,
      repos: [
        ...this.state.repos,
        repository
      ],
    });

    // molde para salvar as informaçoes no localstorage do aparelho celular!
    await AsyncStorage.setItem('@Minicurso:repositories', JSON.stringify(this.state.repos));
  };
  
  render() {
    return (
      <View style={styles.container}>
        
        {/* Cabecalho do App */}
        <View style={styles.header}>
          <Text style={styles.headerText}>GitHub Repositorios</Text>

          {/* Botão para adicionar novos itens na lista de repositórios */}
          <TouchableOpacity onPress={() => this.setState({modalVisible: true})} >
            <Text style={styles.headerButton}> + </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.msg}>
          <Text style={styles.msgTxt}>Adicione seus Repositorios Favoritos</Text>
        </View>

        {/* Conteudo dos repositorios github */}
        <ScrollView contentContainerStyle={styles.repoList}>
          
          {/* Mapeamento do estado repos para criação das views */}
          { this.state.repos.map( repo => 
            <Repo key={repo.id} data={repo} /> ) }

        </ScrollView>

        <NewRepoModal 
          onCancel={()=> this.setState({modalVisible: false})} 
          onAdd={this._addRepository}
          visible={this.state.modalVisible}
        />

        <View style={styles.footer}><Text>Erisvaldo Correia MobileDev - 2019</Text></View>

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
    height: (Platform.OS === 'ios') ? 100 : 110,
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
  },
  msg: {
    backgroundColor: '#edebeb',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  msgTxt: {
    fontSize: 15,
    color: '#525050',
  },
  footer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    left: 0, 
    right: 0, 
    bottom: 0
    }
});