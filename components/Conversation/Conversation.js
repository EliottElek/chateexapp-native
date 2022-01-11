import React from "react";
import { SafeAreaView, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "react-native-vector-icons";
import { Context } from "../Context/Context";
import { useContext } from "react";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  containerView: {
    position: "absolute",
    left: 20,
    top: 40,
  },
});
const Conversation = ({ navigation }) => {
  const { channel } = useContext(Context);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.containerView}
        onPress={() => navigation.navigate("Channels")}
      >
        <MaterialIcons name="arrow-back-ios" size={22} color="blue" />
      </TouchableOpacity>
      <Text>{channel.name}</Text>
    </SafeAreaView>
  );
};

export default Conversation;
