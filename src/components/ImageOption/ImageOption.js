import React from "react";
import { Text, View, Image } from "react-native";
import styles from "./styles";
import PropTypes from "prop-types";

const ImageOption = ({ image, text }) => {
  return (
    <View style={styles.optionContainer}>
      <Image
        source={{
          uri: image,
        }}
        style={styles.optionImage}
        resizeMode="contain"
      />
      <Text style={styles.optionText}>{text}</Text>
    </View>
  );
};

// properties type checking
ImageOption.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

// define default properties
ImageOption.defaultProps = {
  image: "https://picsum.photos/id/870/200/300?grayscale&blur=2",
  text: "Default",
};

export default ImageOption;
