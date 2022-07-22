import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native';
import { DetailHeader } from '../../components/DetailHeader';

const Detail = ({ route }) => {
  const { query } = route.params

  const [data, setData] = useState({})

  const getWeather = async() => {
    const result = await fetch(`http://api.weatherapi.com/v1/current.json?key=6be8c28794924ed8a2a184922222905&q=${query}`)
    const resp = await result.json()

    setData(resp)
  }

  useEffect(() => {
    getWeather()
  }, [])

  console.log(data)
  return (
    <View style={styles.container}>
      <DetailHeader data={data} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundImage: 'linear-gradient( 135deg, #F761A1 10%, #8C1BAB 100%);'
  },
});

export default Detail