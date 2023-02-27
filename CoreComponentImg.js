import React from "react";
import { StyleSheet, View, Image, TextInput } from "react-native";
import icon from "./assets/icon.png";

const CoreComponentImg = () => {
  return (
    <View>
      {/* image is a self closing tag, can't have children, source is required*/}
      <Image
        style={{
          width: 50,
          height: 100,
          backgroundColor: "lightgrey",
        }}
        // source={icon}
        // displaying network images
        source={{
          uri: "https://picsum.photos/400/300",
        }}
        // resize modes, cover will stretch the image to fit the container
        // contain will keep the aspect ratio
        resizeMode="contain"
      />
      {/* self closing tag, textInputs */}
      <TextInput placeholder="what's your name?" />
    </View>
  );
};

export default CoreComponentImg;

const styles = StyleSheet.create({});
