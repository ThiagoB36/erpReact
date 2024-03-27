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
import { color } from "./src/config/default/colorsDefault";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function App() {
  const Tab = createBottomTabNavigator();

  function iconNav(route, color, size) {
    console.log({ route });
    let iconName;
    let result;

    switch (route.name) {
      case "Produtos":
        iconName = "shoppingcart";
        result = <AntDesign name={iconName} size={35} color={"red"} />;
        break;
    }
    console.log({ result });
    return result;
  }

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Login"
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarStyle: {
              backgroundColor: color,
              position: "absolute",
              top: -2,
            },
            tabBarIcon: ({ color, size }) => {
              const iconNavBar = iconNav(route, color, size);
              console.log({ iconNavBar });
              return iconNavBar;
            },
          })}
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
