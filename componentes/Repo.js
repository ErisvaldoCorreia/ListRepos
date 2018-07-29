import React, { Component } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

export default class Repo extends Component {
    render() {
        return (
            <View style={styles.repo}>

                <Image
                    style={styles.image}
                    source={{ uri: this.props.data.thumbnail }}
                />

                <View style={styles.repoInfo}>
                    <Text style={styles.repoTitle}>
                        {this.props.data.title}
                    </Text>
                    <Text style={styles.repoAuthor}>
                        {this.props.data.author}
                    </Text>
                </View>

            </View>
        );
    }
}

/* Documentação de Estilos do Componente */
const styles = StyleSheet.create({
    repo: {
      padding: 30,
      backgroundColor: '#fff',
      marginBottom: 20,
      borderRadius: 10,
      flexDirection: 'row',
      alignItems: 'center',
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    repoInfo: {
        marginLeft: 10,
    },
    repoTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        marginLeft: 10,
    },
    repoAuthor: {
        fontSize: 13,
        color: '#777',
        marginLeft: 10,
    }
});
  