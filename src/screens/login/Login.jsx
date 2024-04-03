import { View, Text, StyleSheet } from "react-native";

export default function Login() {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>LOGIN</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  txt: { fontSize: 35, color: "white", fontWeight: "bold" },
});
