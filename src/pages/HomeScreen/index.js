import { SafeAreaView, } from "react-native-safe-area-context";
import { Text, TouchableOpacity } from "react-native";
import { Styles } from './style'

function mostrarMensagem() {
    alert('Receita Cadastrada')
}

export default function HomePageScreen() {

    return (

        <SafeAreaView style={Styles.Container}>
            <Text style={Styles.Tittle}>Tela Inicial</Text>
            <Text>Adicionar uma Receita</Text>

            
            <TouchableOpacity style={Styles.Button} onPress={mostrarMensagem}>

                <Text style={Styles.ButtonText}>Toque aqui</Text>

            </TouchableOpacity>

        </SafeAreaView>
    )
}