import React, { useState, useEffect } from "react";
import { Text, View, Alert, StyleSheet } from "react-native";
import ImageOption from "./src/components/ImageOption/";
import Button from "./src/components/Button";

import questions from "./data/imageMultipleChoiceQuestions";
import ImageMultipleChoiceQuestion from "./src/components/ImageMultipleChoiceQuestion";

const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(
    questions[currentQuestionIndex]
  );

  useEffect(() => {
    if (currentQuestionIndex >= questions.length) {
      Alert.alert("Quiz Completed");
      setCurrentQuestionIndex(0);
    } else {
      setCurrentQuestion(questions[currentQuestionIndex]);
    }
  }, [currentQuestionIndex]);

  const onCorrectChoice = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const onWrongChoice = () => {
    Alert.alert("Incorrect");
  };

  return (
    <View style={styles.root}>
      <ImageMultipleChoiceQuestion
        question={currentQuestion}
        onCorrect={onCorrectChoice}
        onWrong={onWrongChoice}
      />
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
});
