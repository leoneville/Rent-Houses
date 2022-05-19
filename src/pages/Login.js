import {
    View,
    StyleSheet,
    Image,
    TextInput,
    Text,
    TouchableOpacity
} from "react-native";
//Importamos o useState para poder usar o estado
import React, { useState } from "react";
//Importamos o AsyncStorage para armazenar os dados do usuário
import AsyncStorage from "@react-native-async-storage/async-storage";
import logoRentHouse from "../assets/rent-house-logo.png";

export default function Login({ navigation }) {
    //Criamos um estado para armazenar o email e senha
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //Função para logar o usuário (dummy)  
    const saveAndNavigate = async () => {
        //verificamos se o email e senha estão preenchidos
        const emailLength = email.length;
        const passwordLength = password.length;
        if (emailLength > 0 && passwordLength > 0) {
            //Armazenamos os dados do usuário no AsyncStorage
            const user = {
                email: email,
                password: password
            }
            await asyncStorageSave(user);
            //Redirecionamos para a tela Home
            return navigation.navigate("home");
        } else {
            //Caso não, exibimos uma mensagem de erro
            alert("Preencha todos os campos");
            console.log('Preencha todos os campos');
        }
    }

    //Função para armazenar os dados do usuário no AsyncStorage
    const asyncStorageSave = async (user) => {
        try {
            //Armazenamos os dados do usuário no AsyncStorage
            await AsyncStorage.setItem('user', JSON.stringify(user));
            console.log('salvou no asyncstorage');
        } catch (error) {
            //Caso não, exibimos uma mensagem de erro
            console.log('erro ao salvar no asyncstorage');
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.image}>
                <Image source={logoRentHouse} style={styles.logo}></Image>
            </View>
            {/* Inputs para receber os dados do usuário */}
            <TextInput value={email} onChangeText={(e) => setEmail(e)} placeholder="User email" style={styles.input}></TextInput>
            <TextInput value={password} onChangeText={(e) => setPassword(e)} secureTextEntry={true} placeholder="User password" style={styles.input}></TextInput>
            <TouchableOpacity 
                style={styles.loginButton} 
                onPress={saveAndNavigate}
            >
                <Text style={styles.textButton}>LOGAR</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#FFF"
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    logo: {
        width: 300,
        height: 150
    },
    input: {
        width: 300,
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        marginTop: 20,
        padding: 10,
        borderRadius: 10
    },
    loginButton: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        width: 300,
        height: 50,
        backgroundColor: "#fc727d",
        borderRadius: 10
    },
    textButton: {
        color: "#FFF",
        fontSize: 20,
        fontFamily: 'Montserrat_700Bold',
    }
});