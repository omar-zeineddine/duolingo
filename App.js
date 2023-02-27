import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CoreComponentImg from "./CoreComponentImg";
import CoreComponents from "./CoreComponents";

const App = () => {
  const name = "John";
  const getName = () => {
    return name;
  };

  const time = 9;

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: "#0f0f0f",
      }}
    >
      <Text
        style={{
          color: "lightskyblue",
          fontWeight: "bold",
          fontSize: 15,
        }}
      >
        {time < 12 ? "Good morning" : "Good day"}, my name is {getName()} {"\n"}
        coming through from React Native at {time}
      </Text>
      {/* <CoreComponents /> */}
      <CoreComponentImg />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
