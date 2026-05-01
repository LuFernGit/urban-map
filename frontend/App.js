import { GestureHandlerRootView } from "react-native-gesture-handler";
import "react-native-reanimated";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { CurtidosProvider } from "./src/context/CurtidosContext";
import { SalvosProvider } from "./src/context/SalvosContext";
import { ThemeProvider, ThemeContext } from "./src/context/ThemeContext";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

import { useContext } from "react";

// screens
//mobile user
import TelaCadastro from "./src/screens/mobileUser/TelaCadastro";
import TelaCadastroSucesso from "./src/screens/mobileUser/TelaCadastroSucesso";
import TelaConfigAcessibilidade from "./src/screens/mobileUser/TelaConfigAcessibilidade";
import TelaDetalhesLocal from "./src/screens/mobileUser/TelaDetalhesLocal";
import TelaEditarUsuario from "./src/screens/mobileUser/TelaEditarUsuario";
import TelaFiltro from "./src/screens/mobileUser/TelaFiltro";
import TelaInicial from "./src/screens/mobileUser/TelaInicial";
import TelaLocaisCurtidos from "./src/screens/mobileUser/TelaLocaisCurtidos";
import TelaLocaisSalvos from "./src/screens/mobileUser/TelaLocaisSalvos";
import TelaLogin from "./src/screens/mobileUser/TelaLogin";
import TelaPerfilUsuario from "./src/screens/mobileUser/TelaPerfilUsuario";
import TelaPrincipal from "./src/screens/mobileUser/TelaPrincipal";

//mobile Adm
import TelaGerenciarLocais from "./src/screens/mobileAdmin/TelaGerenciarLocais";
import TelaPainelAdmin from "./src/screens/mobileAdmin/TelaPainelAdmin";
import TelaPerfilAdmin from "./src/screens/mobileAdmin/TelaPerfilAdmin";

//web Adm
import TelaCadastroAdminWeb from "./src/screens/webAdm/TelaCadastroAdminWeb";
import TelaDashboardAdmWeb from "@/screens/webAdm/TelaDashboardWeb";
import TelaLoginAdminWeb from "@/screens/webAdm/TelaLoginAdminWeb";
import TelaPerfilAdminWeb from "@/screens/webAdm/TelaPerfilAdminWeb";
import TelaGerenciarLocaisWeb from "@/screens/webAdm/TelaGerenciarLocaisWeb";

const Stack = createNativeStackNavigator();

function AppContent() {
  const theme = useContext(ThemeContext);

  if (!theme) {
    return null;
  }

  const { colors, modoEscuro } = theme;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <StatusBar style={modoEscuro ? "light" : "dark"} />

      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Principal"
          screenOptions={{
            headerShown: false,
            animation: "none",
          }}
        >
          {/*mobile user*/}

          <Stack.Screen name="Cadastro" component={TelaCadastro} />
          <Stack.Screen
            name="CadastroSucesso"
            component={TelaCadastroSucesso}
          />
          <Stack.Screen
            name="ConfigAcessibilidade"
            component={TelaConfigAcessibilidade}
          />
          <Stack.Screen name="DetalhesLocal" component={TelaDetalhesLocal} />
          <Stack.Screen name="EditarUsuario" component={TelaEditarUsuario} />
          <Stack.Screen name="Filtro" component={TelaFiltro} />
          <Stack.Screen name="Inicial" component={TelaInicial} />
          <Stack.Screen name="LocaisCurtidos" component={TelaLocaisCurtidos} />
          <Stack.Screen name="LocaisSalvos" component={TelaLocaisSalvos} />
          <Stack.Screen name="Login" component={TelaLogin} />
          <Stack.Screen name="PerfilUsuario" component={TelaPerfilUsuario} />
          <Stack.Screen name="Principal" component={TelaPrincipal} />
          {/*web Adm */}
          <Stack.Screen
            name="CadastroAdmWeb"
            component={TelaCadastroAdminWeb}
          />
          <Stack.Screen
            name="DashboardAdmWeb"
            component={TelaDashboardAdmWeb}
          />
          <Stack.Screen
            name="GerenciarLocaisWeb"
            component={TelaGerenciarLocaisWeb}
          />
          <Stack.Screen name="LoginAdminWeb" component={TelaLoginAdminWeb} />
          <Stack.Screen name="PerfilAdmWeb" component={TelaPerfilAdminWeb} />
          {/*mobile Adm */}
          <Stack.Screen
            name="GerenciarLocais"
            component={TelaGerenciarLocais}
          />
          <Stack.Screen name="PainelAdmin" component={TelaPainelAdmin} />
          <Stack.Screen name="PerfilAdmin" component={TelaPerfilAdmin} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <CurtidosProvider>
        <SalvosProvider>
          <SafeAreaProvider>
            <GestureHandlerRootView style={{ flex: 1 }}>
              <BottomSheetModalProvider>
                <AppContent />
              </BottomSheetModalProvider>
            </GestureHandlerRootView>
          </SafeAreaProvider>
        </SalvosProvider>
      </CurtidosProvider>
    </ThemeProvider>
  );
}
