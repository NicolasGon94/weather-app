import React from 'react'
import { Text, StyleSheet, View } from "react-native"
import { CardFav } from '../Card';

const FavCities = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Other Cities</Text>
      <CardFav />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: 'sans-serif'
  }
});

export default FavCities