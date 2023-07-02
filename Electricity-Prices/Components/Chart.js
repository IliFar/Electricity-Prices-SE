import { View, Text, Dimensions, StyleSheet } from "react-native";
import React from "react";
import ProgressBar from "react-native-progress/Bar";
import colors from "../assets/Styles/colors";
// import { LineChart } from "react-native-chart-kit";
// import { SkCanvas } from "@shopify/react-native-skia";

const Chart = ({ progress, hour, price }) => {
  return (
    <View style={styles.container}>
      <Text style={{ color: "white", flex: 1, fontFamily: "Roboto-Bold" }}>
        {hour}
      </Text>
      <View style={styles.prices}>
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontFamily: "Roboto-Bold",
            flex: 1,
          }}
        >
          {price}
        </Text>
        <ProgressBar
          progress={progress}
          width={200} // Takes 100% of available width
          height={10}
          color={"#90ee90"}
          borderColor={"black"}
          borderRadius={6}
          unfilledColor={"black"}
          style={styles.progressBar}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  prices: {
    flex: 4,
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: "black"
  },
  progressBar: {
    maxWidth: 200,
    height: 10,
    display: "flex",
    // alignSelf: "center",
  },
});

export default Chart;
