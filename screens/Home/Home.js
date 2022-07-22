import React, { useEffect, useState } from 'react'
import { StatusBar, StyleSheet, View } from 'react-native'

import { FavCities } from '../../components/FavCities'
import { Header } from '../../components/Header'
import { WeatherHome } from '../../components/WeatherHome'

const Home = ({ navigation }) => {
  const [data, setData] = useState({})
  const [query, setQuery] = useState('')

  const getWeather = async() => {
    const result = await fetch(`http://api.weatherapi.com/v1/current.json?key=6be8c28794924ed8a2a184922222905&q=${query}`)
    const resp = await result.json()

    setData(resp)
  }

  useEffect(() => {
    getWeather()
  }, [query])

  console.log(data)
  return (
    <View style={styles.container} >
      <Header setQuery={setQuery} />
      <WeatherHome weather={data.current} location={data.location} navigation={navigation} />
      <FavCities />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    flex: 1,
    backgroundImage: 'linear-gradient( 135deg, #F761A1 10%, #8C1BAB 100%);;'
  },
});

export default Home