import React from "react";
import { Text, View, Image, Pressable } from "react-native";
import styles from "./styles";
import PropTypes from "prop-types";

const ImageOption = ({ image, text, isSelected, onPress }) => {
  return (
    <Pressable
      // onPress={() => console.warn(text)}
      onPress={onPress}
      style={[
        styles.optionContainer,
        isSelected ? styles.selectedContainer : {},
      ]}
    >
      <Image
        source={{
          uri: image,
        }}
        style={styles.optionImage}
        resizeMode="contain"
      />
      <Text style={isSelected ? styles.selectedText : styles.optionText}>
        {text}
      </Text>
    </Pressable>
  );
};

// properties type checking
ImageOption.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
  onPress: PropTypes.func,
};

// define default properties
ImageOption.defaultProps = {
  image: "https://picsum.photos/id/870/200/300?grayscale&blur=2",
  text: "Default",
  isSelected: false,
  onPress: () => {}, // empty function when null
};

export default ImageOption;
