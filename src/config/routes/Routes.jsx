import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Financeiro from "../../screens/financeiro/Financeiro";
import { SafeAreaView, StyleSheet } from "react-native";
import Produtos from "../../screens/produtos/Produtos";
import Clientes from "../../screens/clientes/Clientes";
import Estoque from "../../screens/estoque/Estoque";
import { color } from "../default/colorsDefault";
import Vendas from "../../screens/vendas/Vendas";
import Login from "../../screens/login/Login";
import { iconNav } from "./helpers/iconNav";
import Menu from "../../screens/menu/Menu";

export default function Routes() {
  const Tab = createBottomTabNavigator();

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
              return iconNavBar;
            },
          })}
        >
          <Tab.Screen name="Produtos" component={Produtos} />
          <Tab.Screen name="Clientes" component={Clientes} />
          <Tab.Screen name="Vendas" component={Vendas} />
          <Tab.Screen name="Financeiro" component={Financeiro} />
          <Tab.Screen name="Estoque" component={Estoque} />
          <Tab.Screen name="Menu" component={Menu} />
          <Tab.Screen
            name="Login"
            component={Login}
            options={{ tabBarButton: () => null }}
          />
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
