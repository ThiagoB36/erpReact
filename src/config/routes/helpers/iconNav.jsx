import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";

export function iconNav(route, color, size) {
  let result;

  switch (route.name) {
    case "Produtos":
      result = <AntDesign name={"shoppingcart"} size={size} color={color} />;
      break;
    case "Clientes":
      result = <Ionicons name={"person-add"} size={size} color={color} />;
      break;
    case "Estoque":
      result = <MaterialIcons name={"store"} size={size} color={color} />;
      break;
    case "Menu":
      result = <MaterialIcons name={"menu"} size={size} color={color} />;
      break;
    case "Vendas":
      result = (
        <MaterialCommunityIcons name={"sale"} size={size} color={color} />
      );
      break;
    case "Financeiro":
      result = (
        <MaterialIcons name={"monetization-on"} size={size} color={color} />
      );
      break;
    case "Admin":
      result = <Ionicons name={"menu"} size={size} color={color} />;
      break;
  }
  return result;
}
