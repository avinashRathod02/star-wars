import colors from "@/colors";
import { SCREEN_WIDTH } from "@/utils";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default (props) => {
  const { id, director, episodeID, releaseDate, title, onPress } = props;
  return (
    <TouchableOpacity style={styles.cont} onPress={() => onPress(id)} key={id}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.detail}>{`Director : ${director}`}</Text>
      <Text style={styles.detail}>{`Episode ID : ${episodeID}`}</Text>
      <Text style={styles.detail}>{`Release Date : ${releaseDate}`}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  title: { fontWeight: "600", fontSize: 12, color: colors.black },
  detail: {
    fontStyle: "italic",
    fontSize: 10,
    color: colors.gray2,
    marginTop: 5,
  },
  cont: {
    justifyContent: "center",
    marginVertical: 12,
    backgroundColor: colors.gray1,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 20,
    width: SCREEN_WIDTH * 0.38,
    height: SCREEN_WIDTH * 0.36,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 11,
    },
    shadowOpacity: 0.37,
    shadowRadius: 13,

    elevation: 20,
  },
});
