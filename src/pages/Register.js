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
import DataManager from "../../database/DataManager";

export default function Register({ navigation }) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const saveAndNavigate = async () => {
        //verificamos se o email e senha estão preenchidos
        const nameLength = name.length;
        const emailLength = email.length;
        const passwordLength = password.length;

        if (nameLength > 0 && emailLength > 0 && passwordLength > 0) {
            const user = {
                name,
                email,
                password
            }

            await DataManager.createUser(user);

            changePage();
            return navigation.navigate("login");
        } else {
            //Caso não, exibimos uma mensagem de erro
            alert("Preencha todos os campos");
            console.log('Preencha todos os campos');
        }
    }

    const changePage = () => {
        setName("");
        setEmail("");
        setPassword("");

        return navigation.navigate("login");
    }

    return (
        <View style={styles.container}>
            <View style={styles.image}>
                <Image source={logoRentHouse} style={styles.logo}></Image>
            </View>
            {/* Inputs para receber os dados do usuário */}
            <TextInput value={name} onChangeText={(e) => setName(e)} placeholder="Insira seu Nome" style={styles.input}></TextInput>
            <TextInput value={email} onChangeText={(e) => setEmail(e)} placeholder="Insira seu Email" style={styles.input}></TextInput>
            <TextInput value={password} onChangeText={(e) => setPassword(e)} secureTextEntry={true} placeholder="Insira sua Senha" style={styles.input}></TextInput>
            <TouchableOpacity
                style={styles.loginButton}
                onPress={saveAndNavigate}
            >
                <Text style={styles.textButton}>CADASTRAR</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.haveAccount}
                onPress={changePage}
            >
                <Text>Já tenho uma conta</Text>
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
    },
    haveAccount: {
        paddingTop: 10
    }
});