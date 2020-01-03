import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, Linking } from 'react-native';

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
                    <Text style={styles.repoUrl}
                          onPress={() => Linking.openURL(this.props.data.url)}>
                        Acessar no Github
                    </Text>
                </View>

            </View>
        );
    }
}

/* Documentação de Estilos do Componente */
const styles = StyleSheet.create({
    repo: {
      padding: 20,
      backgroundColor: '#fff',
      marginBottom: 10,
      borderRadius: 10,
      flexDirection: 'row',
      alignItems: 'center',
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    repoInfo: {
        marginLeft: 10,
    },
    repoTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#000',
        marginLeft: 10,
        marginBottom: 5,
    },
    repoAuthor: {
        fontSize: 13,
        color: '#777',
        marginLeft: 10,
    },
    repoUrl: {
      fontSize: 14,
      color: 'blue',
      marginLeft: 10,
    }
});