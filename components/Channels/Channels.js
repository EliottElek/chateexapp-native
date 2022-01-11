import React from "react";
import { SafeAreaView, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Context } from "../Context/Context";
import { useContext } from "react";
const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
    alignItems: "center",
  },
  channelItem: {
    height: 60,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    width: "90%",
    borderRadius: 8,
    backgroundColor: "pink",
    margin: 4,
  },
});
const Channels = ({ navigation }) => {
  const { channels, setChannel } = useContext(Context);
  return (
    <SafeAreaView style={styles.container}>
      {channels.map((channel) => (
        <TouchableOpacity
          style={styles.channelItem}
          onPress={() => {
            setChannel(channel);
            navigation.navigate("Conversation");
          }}
        >
          <Text>{channel.name}</Text>
        </TouchableOpacity>
      ))}
    </SafeAreaView>
  );
};

export default Channels;
