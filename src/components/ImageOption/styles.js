import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  optionContainer: {
    borderWidth: 2,
    borderBottomWidth: 4,
    borderColor: "lightgrey",
    borderRadius: 10,

    // size: container: should take 1/2 width & height of screen
    width: "48%",
    height: "48%",
    alignItems: "center",
  },
  selectedContainer: {
    backgroundColor: "#ddf4fe",
    borderColor: "#81d5fe",
  },
  optionText: {
    fontWeight: "bold",
    color: "black",
  },
  selectedText: {
    fontWeight: "bold",
    color: "#40bef7",
  },
  optionImage: {
    // backgroundColor: "lightgrey",
    width: "100%",
    flex: 1, // take all the space before the text
  },
});

export default styles;
