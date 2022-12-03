import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
  ToastAndroid,
} from "react-native";

// import * as ImagePicker from "react-native-image-picker";
// import * as ImagePicker from "react-native-image-picker";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";

import Icon1 from "react-native-vector-icons/Entypo";
import Icon from "react-native-vector-icons/AntDesign";

const Work = (props) => {
  const [active, SetActive] = useState("firstCard");
  const [pic, SetPic] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [disable, setDisable] = useState(true);

  useEffect(() => {
    amount && description && active ? setDisable(false) : setDisable(true);
  }, [amount, description]);

  const setToastMsg = (msg) => {
    ToastAndroid.showWithGravity(msg, ToastAndroid.SHORT, ToastAndroid.CENTER);
  };

  // const uploadImage = () => {
  //   var options = {
  //     title: "Select Image",
  //     customButtons: [
  //       {
  //         name: "customOptionKey",
  //         title: "Choose Photo from Custom Option",
  //       },
  //     ],
  //     storageOptions: {
  //       skipBackup: true,
  //       path: "images",
  //     },
  //   };
  //   launchImageLibrary(options, (response) => {
  //     console.log("Response = ", response);
  //     if (response.didCancel) {
  //       console.log("User cancelled image picker");
  //     } else if (response.error) {
  //       console.log("ImagePicker Error: ", response.error);
  //     } else if (response.customButton) {
  //       console.log("User tapped custom button: ", response.customButton);
  //       alert(response.customButton);
  //     } else {
  //       setFilePath(response);
  //     }
  //   });
  // };
  return (
    <View>
      <Text
        style={{ fontSize: 20, marginTop: 20, paddingLeft: 20, color: "green" }}
      >
        Task Title
      </Text>
      <View
        style={{
          borderWidth: 2,
          height: 40,
          width: 350,
          marginLeft: 10,
          marginTop: 10,
        }}
      >
        <TextInput
          value={description}
          placeholder="Enter a description"
          onChangeText={(text) => setDescription(text)}
          multiline={true}
        />
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 39,
        }}
      >
        <TouchableOpacity
          style={styles.button}
          onPress={() => SetActive("firstCard")}
        >
          <Text style={{ color: "green" }}>Press Here</Text>
          <View style={{ flex: 1, paddingLeft: 5 }}>
            <Icon name="message1" size={20} color="green" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => SetActive("secondCard")}
        >
          {/* onClick={() => SetActive("secondCard")} */}
          <Text style={{ color: "green" }}> Press Here</Text>
          <View style={{ flex: 1, paddingLeft: 5 }}>
            <Icon1 name="mic" size={20} color="green" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => SetActive("thirdCard")}
        >
          <Text style={{ color: "green" }}>Press Here</Text>
          <View style={{ flex: 1, paddingLeft: 5 }}>
            <Icon1 name="video-camera" size={20} color="green" />
          </View>
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: 29 }}>
        {active === "firstCard" && (
          <View
            style={{ width: 350, height: 200, borderWidth: 1, marginLeft: 20 }}
          >
            <TextInput
              value={amount}
              placeholder="Explain your Detail"
              onChangeText={(text) => setAmount(text)}
              maxLength={300}
              multiline={true}
            />
          </View>
        )}
        {active === "secondCard" && (
          <View
            style={{
              width: 350,
              height: 200,
              borderWidth: 1,
              marginLeft: 20,
            }}
          >
            <TouchableOpacity
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View style={{ borderWidth: 1, borderRadius: 50 }}>
                <Icon1 name="mic" size={100} color="black" />
              </View>
            </TouchableOpacity>
            <Text style={{ marginTop: 20, paddingLeft: 90 }}>
              Press or Hold tO record Audio
            </Text>
          </View>
        )}
        {active === "thirdCard" && (
          <View
            style={{ width: 350, height: 200, borderWidth: 1, marginLeft: 20 }}
          >
            <TouchableOpacity
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
              // onPress={() => uploadImage()}
            >
              <View
                style={{
                  borderWidth: 1,
                  borderRadius: 40,
                  marginTop: 2,
                  paddingLeft: 20,
                  paddingRight: 30,
                }}
              >
                <Icon1 name="video-camera" size={90} color="black" />
              </View>
            </TouchableOpacity>
            <Text style={{ marginTop: 20, paddingLeft: 90 }}>
              Press or Hold tO record/Attach Video
            </Text>
          </View>
        )}
      </View>
      <View
        style={{
          marginTop: 12,
          // width: 120,

          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* <TouchableOpacity
          style={{
            paddingLeft: 12,
            marginTop: 12,

            width: 120,
            height: 34,
            justifyContent: "center",
            alignItems: "center",
          }}
          disabled={disable}
          onPress={() => {
            props.navigation.navigate("Pg2");
          }}
        >
          <Text>Next</Text>
        </TouchableOpacity> */}
        <Button
          title="Next"
          disabled={disable}
          onPress={() => props.navigation.navigate("Pg2")}
        />
      </View>
    </View>
  );
};

export default Work;

const styles = StyleSheet.create({
  input: {
    paddingLeft: 20,
  },
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    flex: 1,
    height: 60,
    with: 90,
  },
  button: {
    backgroundColor: "#DDDDDD",
    padding: 10,
    height: 40,
    width: 130,
    flexDirection: "row",
    display: "flex",
  },
});
