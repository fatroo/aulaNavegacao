import { Button, Text, View } from "react-native";


export default({navigation})=>{

    function irLogin(){
        navigation.navigate('Login')
    }

    return(
        <View>
            <Text>Tela Home</Text>
            <Button title="Ir para Login" onPress={irLogin}/>
        </View>
    )
}