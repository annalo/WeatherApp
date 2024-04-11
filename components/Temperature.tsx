import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Sizes = "sm" | "md" | "lg"
type TemperatureProps = {
  size: Sizes,
  temperature: String,
};

const Temperature = (props: TemperatureProps) => {
  const fontSizes = {
    sm: 20,
    md: 28,
    lg: 50,
  };
  const textStyle = {
    fontSize: fontSizes[props.size],
  }

  return (
    <View style={styles.container}>
      <Text style={textStyle}>
        {props.temperature.toString()}&deg;
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Temperature;
