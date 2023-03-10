import React from "react";
import { View, StyleSheet } from "react-native";

const ProgressBar = ({ progress }) => {
  return (
    <View style={styles.bg}>
      <View style={[styles.fg, { width: `${progress * 100}%` }]}>
        <View style={styles.hl} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bg: {
    backgroundColor: "lightgrey",
    height: 20,
    borderRadius: 15,
    flex: 1,
  },
  fg: {
    flex: 1,
    borderRadius: 15,
    backgroundColor: "#FAC800",
    width: "50%",
  },
  hl: {
    backgroundColor: "#FAD131",
    width: "90%",
    height: 5,
    borderRadius: 10,
    marginTop: 5,
    alignSelf: "center",
  },
});

export default ProgressBar;
