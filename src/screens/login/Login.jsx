import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function Login() {
  function btnG() {
    console.log("clicado");
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touch} onPress={btnG}>
        <View>
          <AntDesign name="google" size={30} color={"black"} />
        </View>
        <View>
          <Text style={styles.txtGoogle}>Continuar com Google</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  txt: { fontSize: 35, color: "white", fontWeight: "bold" },
  touch: {
    flexDirection: "row",
    width: 300,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green",
  },
  txtGoogle: {
    marginStart: 10,
    alignSelf: "center",
    fontSize: 20,
    fontFamily: "monospace",
    fontWeight: "bold",
    color: "black",
  },
});
