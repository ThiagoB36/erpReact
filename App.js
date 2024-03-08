import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet, SafeAreaView, Text } from "react-native";
import Login from "./src/screens/login/Login";
import Produtos from "./src/screens/produtos/Produtos";
import Menu from "./src/screens/menu/Menu";
import Vendas from "./src/screens/vendas/Vendas";
import Clientes from "./src/screens/clientes/Clientes";
import Estoque from "./src/screens/estoque/Estoque";
import Financeiro from "./src/screens/financeiro/Financeiro";

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Login"
          screenOptions={{ headerShown: false }}
        >
          <Tab.Screen name="Login" component={Login} />
          <Tab.Screen name="Clientes" component={Clientes} />
          <Tab.Screen name="Estoque" component={Estoque} />
          <Tab.Screen name="Financeiro" component={Financeiro} />
          <Tab.Screen name="Menu" component={Menu} />
          <Tab.Screen name="Produtos" component={Produtos} />
          <Tab.Screen name="Vendas" component={Vendas} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
