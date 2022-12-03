import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Button,
} from "react-native";
import React, { useState } from "react";
import Icon1 from "react-native-vector-icons/Entypo";
import Icon2 from "react-native-vector-icons/AntDesign";

const New = (props) => {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={{ marginLeft: 10 }}>
        <Text style={styles.h1}> {props.route.params.name}</Text>
        <View style={{ display: "flex", flexDirection: "row", marginTop: 20 }}>
          <Image style={styles.image} source={props.route.params.image} />
          <Text style={{ marginLeft: 10 }}>Posted by</Text>

          <Text style={{ fontSize: 20, marginTop: 20, right: 50 }}>
            {props.route.params.Postedby}
          </Text>
          <Text style={{ marginLeft: 40, marginTop: 20 }}> 3 Hours ago</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: 40,
          }}
        >
          <View>
            <Icon1 name="location-pin" size={50} color="red" />
          </View>
          <Text style={{ marginLeft: 30 }}>Location</Text>
          <Text style={styles.location}> {props.route.params.messae}</Text>
          <Text style={{ marginTop: 20, color: "green" }}> View on map</Text>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: 40,
          }}
        >
          <View>
            <Icon2 name="calendar" size={50} color="red" />
          </View>
          <Text style={{ marginLeft: 30 }}>Due Date</Text>
          <Text style={styles.location}> {props.route.params.Date}</Text>
        </View>

        <View
          style={{
            height: 200,
            width: 340,
            borderWidth: 1,
            marginTop: 29,
            marginLeft: 19,
            backgroundColor: "lightgrey",
          }}
        >
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 20, color: "red", fontWeight: "bold" }}>
              Text Budget
            </Text>
            <Text
              style={{
                marginTop: 30,
                paddingRight: 20,
                fontWeight: "bold",
                color: "green",
                fontSize: 20,
              }}
            >
              {props.route.params.time}
            </Text>
          </View>
          <View style={{ paddingLeft: 70, marginTop: 60 }}>
            <TouchableOpacity style={styles.button}>
              <Text>Make an Offer</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 25 }}>Task Details</Text>
          <Text style={{ fontSize: 17, paddingLeft: 29 }}>
            {" "}
            {props.route.params.name}
          </Text>
        </View>
        <View
          style={{
            height: 200,
            width: 340,
            borderWidth: 1,
            marginTop: 12,
            marginLeft: 19,
            backgroundColor: "lightgrey",
          }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 20, color: "red", fontWeight: "bold" }}>
              Offer
            </Text>
            <Text
              style={{
                marginTop: 30,
                paddingRight: 20,
                fontWeight: "bold",
                color: "green",
                fontSize: 20,
              }}
            >
              Looking for Offer?
            </Text>
          </View>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <TouchableOpacity
            style={{
              marginTop: 30,
              alignItems: "center",
              backgroundColor: "green",
              padding: 10,
              width: 150,
              height: 50,
            }}
          >
            <Text>Press Here</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* <Button
        title="Open"
        // onPress={() => props.navigation.navigate("New")}
      /> */}
    </ScrollView>
  );
};

export default New;

const styles = StyleSheet.create({
  h1: {
    fontSize: 30,
    fontWeight: "bold",
    marginLeft: 10,
    color: "black",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  location: {
    marginTop: 30,
    fontSize: 14,
    right: 60,
    color: "green",
  },
  button: {
    alignItems: "center",
    backgroundColor: "green",
    padding: 10,
    width: 200,
    paddingLeft: 20,
  },
  scrollView: {},
});
