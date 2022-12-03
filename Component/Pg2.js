import React, { useEffect, useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

const Pg2 = () => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [disable, setDisable] = useState(true);

  useEffect(() => {
    amount && description ? setDisable(false) : setDisable(true);
  }, [amount, description]);

  return (
    <View>
      <TextInput
        value={description}
        placeholder="Enter a description"
        onChangeText={(text) => setDescription(text)}
      />
      <TextInput
        value={amount}
        placeholder="Enter the amount in $"
        keyboardType="numeric"
        onChangeText={(text) => setAmount(text)}
      />
      <Button disabled={disable} title="Add" />
    </View>
  );
};

export default Pg2;
