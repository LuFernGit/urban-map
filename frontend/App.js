import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import TelaCadastro from './src/screens/mobileUser/TelaCadastro'
import TelaCadastroSucesso from './src/screens/mobileUser/TelaCadastroSucesso';
import TelaInicial from './src/screens/mobileUser/TelaInicial';
import TelaLogin from './src/screens/mobileUser/TelaLogin';

import TelaPerfilAdmin from './src/screens/mobileAdm/TelaPerfilAdmin'
import TelaPerfilAdminWeb from './src/screens/webAdm/TelaPerfilAdminWeb'

import TelaPesquisa from './src/screens/mobileUser/TelaPesquisa';
import TelaPrincipal from './src/screens/mobileUser/TelaPrincipal';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator 
        initialRouteName="Principal"
        screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Inicial" component={TelaInicial} />
          <Stack.Screen name="Login" component={TelaLogin} />
          <Stack.Screen name="Cadastro" component={TelaCadastro} />
          <Stack.Screen
            name="CadastroSucesso"
            component={TelaCadastroSucesso}
          />

        {/*telas futuras */}
          <Stack.Screen name="PerfilAdmin" component={TelaPerfilAdmin} />
          <Stack.Screen
            name="PerfilAdminWeb"
            component={TelaPerfilAdminWeb}
          />
          <Stack.Screen name="Principal" component={TelaPrincipal} />
          <Stack.Screen name="Pesquisa" component={TelaPesquisa} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
