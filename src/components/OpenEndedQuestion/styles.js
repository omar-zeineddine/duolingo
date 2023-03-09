import { StyleSheet } from "react-native";

export default StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    // backgroundColor: "red",
    alignSelf: "flex-start",
  },
  row: {
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    margin: 10,
  },
  mascot: {
    // backgroundColor: "blue",
    width: "30%",
    aspectRatio: 3 / 4,
    marginRight: 10,
    marginBottom: 0,
  },
  sentenceContainer: {
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 5,
    padding: 10,
  },
  sentence: {
    fontSize: 16,
  },
  textInput: {
    alignSelf: "stretch",
    flex: 1,
    backgroundColor: "#ebebeb",
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
  },
});
