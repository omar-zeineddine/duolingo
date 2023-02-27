import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const App = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Which of these is the "glass"?</Text>
      <View style={styles.optionsContainer}>
        <View style={styles.optionContainer}>
          <Image
            source={{
              uri: "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
            }}
            style={styles.optionImage}
          />
          <Text style={styles.optionText}>Glass</Text>
        </View>
        <View style={styles.optionContainer}>
          <Image
            source={{
              uri: "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
            }}
            style={styles.optionImage}
          />
          <Text style={styles.optionText}>Glass</Text>
        </View>
        <View style={styles.optionContainer}>
          <Image
            source={{
              uri: "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
            }}
            style={styles.optionImage}
          />
          <Text style={styles.optionText}>Glass</Text>
        </View>
        <View style={styles.optionContainer}>
          <Image
            source={{
              uri: "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
            }}
            style={styles.optionImage}
          />
          <Text style={styles.optionText}>Glass</Text>
        </View>
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
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "stretch",
  },
  optionsContainer: {
    backgroundColor: "#f5f5f5",
    width: "100%",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignContent: "space-between", // space between rows, use with flexWrap
  },
  optionContainer: {
    borderWidth: 4,
    borderBottomWidth: 8,
    borderColor: "lightgrey",
    borderRadius: 10,

    // size: container: should take 1/2 width & height of screen
    width: "48%",
    height: "48%",
  },
  optionImage: {
    width: 100,
    height: 100,
  },
});

// https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png
// |Glass    | https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png |
// |Milk     | https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/milk.png |
// |Coffee   | https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/coffee.png
