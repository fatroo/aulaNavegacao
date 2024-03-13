import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home';
import Login from '../screens/Login';

const {Screen,Navigator} = createNativeStackNavigator();

export default function StackRoutes(){
    return(
        <Navigator screenOptions={{
            headerStyle:{backgroundColor: 'green'}
        }}>
            <Screen
                name = 'Home'
                component = {Home} 
                options={{
                    //headerShown : false
                    title: 'Tela de inicial',
                    headerTitleAlign: 'center'
                }}
            />
                
            <Screen
                name = 'Login'
                component = {Login}
                options={{}}
            />
        </Navigator>
    )
}