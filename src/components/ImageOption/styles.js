import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  optionContainer: {
    borderWidth: 4,
    borderBottomWidth: 8,
    borderColor: "lightgrey",
    borderRadius: 10,

    // size: container: should take 1/2 width & height of screen
    width: "48%",
    height: "48%",
    alignItems: "center",
  },
  optionImage: {
    backgroundColor: "lightgrey",
    width: "100%",
    flex: 1, // take all the space before the text
  },
});

export default styles;
