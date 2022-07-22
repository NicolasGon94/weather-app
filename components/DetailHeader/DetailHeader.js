import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const DetailHeader = ({ data }) => {
  console.log(data)
  return (
    <View style={styles.container}>
      <Text style={styles.displayData}>
        <Text style={{ width: '50%' }}>{data?.location?.name}, {data?.location?.region}, {data?.location?.country}</Text>
        <img src={`https:${data?.current?.condition.icon}`} alt="info" width={150}/>
      </Text>
      <Text style={styles.displayData}>
        <Text style={{ width: '50%' }}>{data?.location?.name}, {data?.location?.region}, {data?.location?.country}</Text>
        <Text style={{ width: '50%' }}>{data?.location?.name}, {data?.location?.region}, {data?.location?.country}</Text>
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  displayData: {
    display: 'flex',
    justifyContent: 'space-around'
  },
  container: {
    paddingTop: 50,
    backgroundColor: '#8C1BAB'
  },
});

export default DetailHeader