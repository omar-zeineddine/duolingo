import React, { useState, useEffect } from "react";
import { Text, View, Alert, StyleSheet } from "react-native";
import ImageOption from "./src/components/ImageOption/";
import Button from "./src/components/Button";

import ImageMultipleChoiceQuestion from "./src/components/ImageMultipleChoiceQuestion";
import OpenEndedQuestion from "./src/components/OpenEndedQuestion";

// import questions from "./data/imageMultipleChoiceQuestions";
// import questions from "./data/openEndedQuestions";
import questions from "./data/allQuestions";

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
      {currentQuestion.type === "imageMultipleChoice" ? (
        <ImageMultipleChoiceQuestion
          question={currentQuestion}
          onCorrect={onCorrectChoice}
          onWrong={onWrongChoice}
        />
      ) : null}
      {currentQuestion.type === "openEnded" ? (
        <OpenEndedQuestion
          question={currentQuestion}
          onCorrect={onCorrectChoice}
          onWrong={onWrongChoice}
        />
      ) : null}
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
