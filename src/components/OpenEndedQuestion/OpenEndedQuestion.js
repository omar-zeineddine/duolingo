import React, { useState } from "react";
import { View, Text, TextInput, Image } from "react-native";
import Button from "../Button";
import styles from "./styles";
import mascot from "../../../assets/images/mascot.png";

const OpenEndedQuestion = ({ question, onCorrect, onWrong }) => {
  const [input, setInput] = useState("");
  const onButtonPress = () => {
    // console.warn(input);
    if (question.answer.toLowerCase().trim() === input.toLowerCase().trim()) {
      onCorrect();
    } else {
      onWrong();
    }
    setInput("");
  };
  return (
    <>
      <Text style={styles.title}>Translate this sentence</Text>
      <View style={styles.row}>
        <Image style={styles.mascot} source={mascot} resizeMode="contain" />
        <View style={styles.sentenceContainer}>
          <Text style={styles.sentence}>{question.text}</Text>
        </View>

        {/* Sentence Container */}
      </View>
      <TextInput
        value={input}
        onChangeText={setInput}
        placeholder="type in english"
        style={styles.textInput}
        textAlignVertical="top"
        multiline
      />
      <Button text="Check" onPress={onButtonPress} disabled={false} />
    </>
  );
};

export default OpenEndedQuestion;
