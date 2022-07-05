import colors from "@/colors";
import React from "react";
import { StatusBar, StyleSheet } from "react-native";
import { View, Text, TouchableOpacity } from "react-native";

export default (props) => {
  const { leftIconPress, title, backgroundColor = colors.primary } = props;

  const LEFT_COMPONENT = () => {
    if (!leftIconPress) {
      return <View style={styles.icon} />;
    }
    return (
      <View style={styles.icon}>
        <TouchableOpacity onPress={leftIconPress}>
          <Text>{"< Go Back"}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const CENTER_COMPONENT = (
    <View style={[styles.icon, { flex: 3 }]}>
      <Text style={styles.title} show={title}>
        {title}
      </Text>
    </View>
  );

  return (
    <View style={[styles.cont, { backgroundColor }]}>
      <StatusBar backgroundColor={colors.primary} barStyle='light-content' />
      {LEFT_COMPONENT()}
      {CENTER_COMPONENT}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "87%",
    alignSelf: "center",
  },
  title: {
    fontSize: 16,
    color: colors.white,
  },
  icon: {
    flex: 1,
    alignItems: "center",
  },
  cont: {
    paddingTop: (StatusBar.currentHeight / 100) * 7 + 40,
    width: "100%",
    paddingBottom: "2.5%",
    backgroundColor: colors.primary,
    flexDirection: "row",
    justifyContent: "center",
  },
});
