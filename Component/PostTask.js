import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import React from "react";

const PostTask = (props) => {
  return (
    <View>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>PostTask</Text>
      <Button
        title="Post a Task"
        color="green"
        marginTop="10"
        onPress={() => props.navigation.navigate("Work")}
      />
    </View>
  );
};

export default PostTask;

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "green",
    padding: 10,
  },
});
