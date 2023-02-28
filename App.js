import React from "react";
import { Text, View, StyleSheet } from "react-native";
import ImageOption from "./src/components/ImageOption/";

const App = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Which of these is the "glass"?</Text>
      <View style={styles.optionsContainer}>
        <ImageOption
          image="https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png"
          text="cup"
        />
        <ImageOption
          image="https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png"
          text="glass"
        />
        {/* <ImageOption
          image="https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png"
          text="coffee"
        />
        <ImageOption
          image="https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png"
          text="milk"
        /> */}
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    paddingTop: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "stretch",
  },
  optionsContainer: {
    // backgroundColor: "#f5f5f5",
    width: "100%",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignContent: "space-between", // space between rows, use with flexWrap
  },
});
