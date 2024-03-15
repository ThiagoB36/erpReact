import { View, Text, useWindowDimensions } from "react-native";

export default function Vendas() {
  const window = useWindowDimensions();
  console.log({ window });
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "white", fontSize: 30, fontWeight: "bold" }}>
        Vendas
      </Text>
    </View>
  );
}
