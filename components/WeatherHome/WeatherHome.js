import React from 'react'
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

const WeatherHome = ({ weather, navigation, location }) => {
  return (
    <View>
      {
        weather
          ? (
            <>
              <View style={styles.tempTitle}>
                <Text style={styles.title}>{weather?.temp_c}ºC</Text>
              </View>
              <Text style={styles.containerTemp}>
                <img src={`https:${weather?.condition.icon}`} alt="info" width={150}/>
                <View style={styles.alignOption}>
                  <View style={styles.containerOption}>
                    <Text style={styles.label}>Wind:</Text>
                    <Text style={styles.value}>{weather?.wind_degree}</Text>
                  </View>
                  <View style={styles.containerOption}>
                    <Text style={styles.label}>Humidt:</Text>
                    <Text style={styles.value}>{weather?.humidity}%</Text>
                  </View>
                  <Text style={styles.label} onPress={() => navigation.navigate('Detail', {
                    query: location.name,
                  })}>
                    Detailed
                  </Text>
                </View>
              </Text>
            </>
          )
          : (
            <View style={styles.searchText}>
              <Text style={styles.value}>Search your city please...</Text>
            </View>
          )
      }
    </View>
  )
}

const styles = StyleSheet.create({
  searchText: {
    marginTop: 20,
    fontSize: 16
  },
  tempTitle: {
    marginTop: 40
  },
  title: {
    fontFamily: 'sans-serif',
    fontSize: 70,
    fontWeight: '600'
  },
  containerTemp: {
    display: 'flex',
    marginTop: 10
  },
  containerOption: {
    marginBottom: 10
  },
  label: {
    display: 'block',
    fontSize: 13,
    fontWeight: 600
  },
  value: {
    display: 'block',
    fontSize: 20,
    marginTop: 3
  },
  alignOption: {
    alignSelf: 'center', 
    marginLeft: 50
  }
});

export default WeatherHome