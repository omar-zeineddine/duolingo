import React, { useState } from "react";
import { Text, View, Alert, StyleSheet } from "react-native";
import ImageOption from "./src/components/ImageOption/";
import Button from "./src/components/Button";

import questions from "./data/imageMultipleChoiceQuestions";

const App = () => {
  const [selected, setSelected] = useState(null);
  const [selectedQuestion, setSelectedQuestion] = useState(questions[0]);

  const onButtonPress = () => {
    if (selected.correct) {
      Alert.alert("Correct");
    } else {
      Alert.alert("Incorrect");
    }
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>{selectedQuestion?.question}</Text>
      <View style={styles.optionsContainer}>
        {selectedQuestion?.options.map((option) => (
          <ImageOption
            key={option?.id}
            image={option?.image}
            text={option?.text}
            isSelected={selected?.id === option?.id}
            onPress={() => setSelected(option)}
          />
        ))}
      </View>
      <Button text="Check" onPress={onButtonPress} disabled={!selected} />
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
