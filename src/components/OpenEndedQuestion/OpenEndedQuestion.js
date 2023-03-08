import React from "react";
import { View, Text, TextInput, Image } from "react-native";
import styles from "./styles";
import mascot from "../../../assets/images/mascot.png";

const OpenEndedQuestion = () => {
  return (
    <>
      <Text style={styles.title}>Translate this sentence</Text>
      <View style={styles.row}>
        <Image style={styles.mascot} source={mascot} resizeMode="contain" />
        <View style={styles.sentenceContainer}>
          <Text style={styles.sentence}>Sentence</Text>
        </View>

        {/* Sentence Container */}
      </View>
      <TextInput placeholder="type in english" style={styles.textInput} />
    </>
  );
};

export default OpenEndedQuestion;
