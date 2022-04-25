import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import New from '../components/New';
import House from '../components/House';
import Recommended from '../components/Recommended';

export default function Home() {
    const navigation = useNavigation();

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ backgroundColor: "#FFF" }}
        >
            <View style={styles.header}>
                <View style={styles.inputArea}>
                    <Feather
                        name="search"
                        size={24}
                        color="black"
                    />
                    <TextInput
                        placeholder="O que está procurando?"
                        style={styles.input}
                    />
                </View>
            </View>

            <View style={styles.contentNew}>
                <Text style={styles.title}>Novidades</Text>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingHorizontal: 15 }}>
                <New
                    cover={require('../assets/house1.jpg')}
                    name="Casa de Praia"
                    description="Casa nova a uma quadra do mar, lugar seguro e monitorado 24 horas."
                    price="R$ 1.204,90"
                    onPress={() => navigation.navigate('detail')}
                />
                <New
                    cover={require('../assets/house2.jpg')}
                    name="Casa Floripa"
                    description="Casa em Floripa, bem conservada e pronta pra uso."
                    price="R$ 1.790,99"
                    onPress={() => navigation.navigate('detail')}
                />
                <New
                    cover={require('../assets/house3.jpg')}
                    name="Rancho SP"
                    description="Rancho SP, o lugar ideal pra você passar o fim de semana com sua familia."
                    price="R$ 2.213,66"
                    onPress={() => navigation.navigate('detail')}
                />
                <New
                    cover={require('../assets/house4.jpg')}
                    name="Casa Alphaville"
                    description="Casa Alphaville, venha morar na cidade alpha com segurança, paz e bem estar."
                    price="R$ 2.781,92"
                    onPress={() => navigation.navigate('detail')}
                />
            </ScrollView>

            <View style={{ flexDirection: 'row', marginBottom: 10, alignItems: 'center' }}>
                <Text style={[styles.title, { marginTop: 20 }]}>Próximo de você</Text>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingHorizontal: 15 }}>
                <House
                    cover={require('../assets/house4.jpg')}
                    description={"Linda casa, muito boa para morar."}
                    price={"R$ 954,60"}
                />
                <House
                    cover={require('../assets/house5.jpg')}
                    description={"Casa grande e aconchegante. 5 quartos e garagem para até 4 carros."}
                    price={"R$ 1.276,99"}
                />
                <House
                    cover={require('../assets/house6.jpg')}
                    description={"Ótima casa com vista para a praia. Bem ventilada e segura."}
                    price={"R$ 1.500,00"}
                />
            </ScrollView>

            <Text style={[styles.title, { marginTop: 20 }]}>
                Dica do dia
            </Text>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingHorizontal: 15 }}>
                <Recommended
                    cover={require('../assets/house1.jpg')}
                    house="Casa Floripa"
                    offer="25%"
                />
                <Recommended
                    cover={require('../assets/house4.jpg')}
                    house="Rancho SP"
                    offer="15%"
                />
                <Recommended
                    cover={require('../assets/house6.jpg')}
                    house="Casa de Praia"
                    offer="10%"
                />
            </ScrollView>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginVertical: 20,
    },
    inputArea: {
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        width: '98%',
        backgroundColor: '#FFF',
        elevation: 2,
        paddingHorizontal: 10,
        height: 37,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#dcdcdc"
    },
    input: {
        fontFamily: 'Montserrat_500Medium',
        paddingHorizontal: 10,
        fontSize: 13,
        width: '90%'
    },
    contentNew: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center'
    },
    title: {
        paddingHorizontal: 15,
        fontFamily: 'Montserrat_700Bold',
        fontSize: 18,
        color: '#4f4a4a'
    }
});