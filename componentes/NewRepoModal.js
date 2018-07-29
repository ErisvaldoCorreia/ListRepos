import React, { Component } from 'react';
import {
    Text, View, Modal, StyleSheet, TouchableOpacity, TextInput
} from 'react-native';

export default class NewRepoModal extends Component {

    state = {
        newRepoText: '',
    };

    render() {
        return (
            <Modal animationType='fade' transparent={true} visible={this.props.visible} onRequestClose={() => {}} >
                <View style={styles.modalContainer}>
                    <View style={styles.boxContainer}>
                        
                        <Text style={styles.boxTitle}>
                            Adicionar Repositorio
                        </Text>
                        
                        <TextInput
                            autoFocus
                            autoCapitalize='none'
                            style={styles.boxInput}
                            underlineColorAndroid='rgba(0,0,0,0)'
                            placeholder='organizacao/repositorio'
                            value={this.state.newRepoText}
                            onChangeText={newRepoText => this.setState({ newRepoText })}
                        />
                        

                        <View style={styles.buttonContainer}>
                            <TouchableOpacity
                                style={[styles.buttonCancel, styles.button]}
                                onPress={this.props.onCancel}>
                                <Text style={styles.buttonText}>Cancelar</Text>
                            </TouchableOpacity>
                            
                            <TouchableOpacity
                                style={[styles.buttonSubmit, styles.button]}
                                onPress={() => this.props.onAdd(this.state.newRepoText) }>
                                <Text style={styles.buttonText}>Adicionar</Text>
                            </TouchableOpacity>  
                        </View>

                    </View>
                </View>
            </Modal>
        );
    }
}

/* Documentação de Estilos do Componente */
const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    boxContainer: {
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center',
        width: 280,
    },
    boxTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    boxInput: {
        alignSelf: 'stretch',
        paddingVertical: 0,
        paddingHorizontal: 20,
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 3,
        height: 40,
    },
    buttonContainer: {
        marginTop: 10,
        height: 40,
        flexDirection: 'row',
    },
    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
    },
    buttonCancel: {
        backgroundColor: '#e25f5f',
        marginRight: 5,
    },
    buttonSubmit: {
        backgroundColor: '#70bd85',
        marginLeft: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 13,
        fontWeight: 'bold',
    }
});