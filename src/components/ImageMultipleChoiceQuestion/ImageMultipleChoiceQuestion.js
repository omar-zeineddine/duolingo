import React, { useState } from "react";
import { View, Text } from "react-native";
import ImageOption from "../ImageOption";
import Button from "../Button";
import styles from "./styles";
import PropTypes from "prop-types";

const ImageMultipleChoiceQuestion = ({ question }) => {
  const [selected, setSelected] = useState(null);

  const onButtonPress = () => {
    if (selected.correct) {
      // Alert.alert("Correct");
      // move to next question
      //   setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelected(null);
    } else {
      Alert.alert("Incorrect");
    }
  };
  return (
    <>
      <Text style={styles.title}>{question?.question}</Text>
      <View style={styles.optionsContainer}>
        {question?.options?.map((option) => (
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
    </>
  );
};

// prop types:
// question: contains question itself as a string and an array of options
ImageMultipleChoiceQuestion.propTypes = {
  question: PropTypes.shape({
    question: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        text: PropTypes.string,
        image: PropTypes.string,
        correct: PropTypes.bool,
      })
    ).isRequired,
  }),
};

export default ImageMultipleChoiceQuestion;
