import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Icon
          style={styles.iconStyle}
          name="wifi-tethering"
          size={70}
          color={"red"}
        />
        <Text style={styles.team}>Karachi vs Lahore</Text>
        <Text style={styles.batting}>Lahore is batting</Text>
        <Text style={styles.score}>250/10</Text>
        <Text style={styles.over}>Over: 18</Text>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  iconStyle: {
    left: 86,
    bottom: 20,
  },
  innerContainer: {
    borderRadius: 0,
    padding: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 10,
  },
  team: {
    fontSize: 30,
    fontWeight: "bold",
  },
  batting: {
    fontSize: 15,
    fontWeight: "bold",
  },
  score: {
    fontSize: 30,
    fontWeight: "bold",
  },
  over: {
    fontSize: 15,
    fontWeight: "bold",
  },
});
