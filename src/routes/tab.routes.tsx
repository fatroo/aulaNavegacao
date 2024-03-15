import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; 
import Home from '../screens/Home';
import Login from '../screens/Login';

const {Screen,Navigator} = createBottomTabNavigator();

export default function TabRoutes(){
    return(
        <Navigator screenOptions={{
            headerStyle:{backgroundColor: 'green'},
            tabBarStyle:{backgroundColor: 'red'},
        }}>
            <Screen
                name = 'Home'
                component = {Home} 
                options={{
                    //headerShown : false
                    title: 'Tela de inicial',
                    headerTitleAlign: 'center',
                    headerStyle:{backgroundColor: 'red'},
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