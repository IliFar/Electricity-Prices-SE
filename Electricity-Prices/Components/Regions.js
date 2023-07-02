import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import Button from "./Button";
import Table from "./Table";
import axios from "axios";
import PriceNow from "./PriceNow";
import Chart from "./Chart";
import ProgressBar from "react-native-progress/Bar";

const Regions = () => {
  const zones = [
    { id: 0, name: "SE1" },
    { id: 1, name: "SE2" },
    { id: 2, name: "SE3" },
    { id: 3, name: "SE4" },
  ];

  const [data, setData] = useState([]);
  const [active, setActive] = useState(zones[0].name);
  const [priceNow, setPriceNow] = useState(null);
  const [progress, setProgress] = useState(null);

  const handlePress = (index) => {
    var zone = zones.find((x) => x.id == index).name;
    setActive(zone);
    console.log("PRESSED" + index);
  };

  const currentDate = new Date();
  const options = { weekday: "long", month: "long", day: "numeric" };
  const localDateString = currentDate.toLocaleDateString("sv-SE", options);
  const year = currentDate.getFullYear().toString();
  const month = currentDate.toISOString().slice(5, 7);
  const day = currentDate.toISOString().slice(8, 10);
  const hour = currentDate.getHours().toString();
  const minutes = currentDate.getMinutes().toString().padStart(2, "0");
  const time = `${hour}:${minutes}`;

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://www.elprisetjustnu.se/api/v1/prices/${year}/${month}-${day}_${active}.json`
      );
      setData(response.data);
      // console.log(res.data);
      getPrice(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getPrice = async (data) => {
    const foundPrice = await data?.find(
      (x) => x.time_start.slice(11, 13) === hour
    )?.SEK_per_kWh;
    console.log(foundPrice);
    setPriceNow(foundPrice);
  };

  useEffect(() => {
    getData();
    console.log(currentDate);
    console.log(time);
  }, [active, priceNow]);

  const calculateProgress = (value) => {
    const minValue = Math.min(...data.map((item) => item?.SEK_per_kWh));
    // const maxValue = Math.max(...data.map((item) => item?.SEK_per_kWh));
    const values = [4];
    const maxValue = Math.max(...values);
    const progress = (value - minValue) / (maxValue - minValue);
    return isNaN(progress) ? 0 : progress;
    console.log("min " + minValue);
    console.log("max " + maxValue);
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonZones}>
        {zones.map((zone, index) => (
          <Button
            key={zone.id}
            zone={zone.name}
            id={zone.id}
            active={active}
            handlePress={() => handlePress(zone.id)}
          />
        ))}
      </View>
      <ScrollView>
        <PriceNow priceNow={priceNow} />
        <View style={styles.chartView}>
          <View style={{ flexDirection: "row", marginBottom: 5 }}>
            <Text
              style={{ color: "white", flex: 1, fontFamily: "Roboto-Bold" }}
            >
              Time
            </Text>
            <Text
              style={{ color: "white", flex: 2.8, fontFamily: "Roboto-Bold" }}
            >
              Price
            </Text>
          </View>
          {data?.map((obj, index) => (
            <Chart
              progress={calculateProgress(obj?.SEK_per_kWh)}
              key={index}
              hour={obj.time_start.slice(11, 16)}
              price={(obj.SEK_per_kWh * 100).toFixed(2)}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: "Roboto-Regular",
    // gap: 20,
  },
  buttonZones: {
    flexDirection: "row",
    justifyContent: "center",
  },
  padding: {
    padding: 5,
  },
  gap: {
    gap: 10,
  },
  chartView: {
    backgroundColor: "#333138",
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 10,
    gap: 2,
    marginHorizontal: 10,
  },
});

export default Regions;
