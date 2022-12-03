import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Message = (props) => {
  return (
    <View>
      {/* <Text style={styles.h1}> {props.route.params.messae}</Text>
      <View>
        <Text style={styles.h1}> {props.route.params.name}</Text>
      </View> */}
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  h1: {
    fontSize: 30,
    fontWeight: "bold",
    marginLeft: 20,
    color: "black",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
});
