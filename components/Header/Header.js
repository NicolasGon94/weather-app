import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native';
import { Text, Searchbar } from 'react-native-paper';
import { View } from 'react-native-web';

const Header = ({ setQuery }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [data, setData] = useState([])

  const onChangeSearch = query => setSearchQuery(query)

  const handleSearch = async() => {
    const queryLength = searchQuery.length

    if (queryLength > 3) {
      const result = await fetch(`http://api.weatherapi.com/v1/search.json?key=6be8c28794924ed8a2a184922222905&q=${searchQuery}`)
      const resp = await result.json()
  
      setData(resp)
    }
  }

  const handleOnPress = (name) => {
    setQuery(name)
    setSearchQuery('')
  }

  useEffect(() => {
    handleSearch()
  }, [searchQuery])
  
  return (
    <>
      <Text style={styles.textDay}>Today, 3 may</Text>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      {
        searchQuery.length > 3 && data?.map(info => (
            <View style={styles.containerData} key={info.id}>
              <Text onPress={() => handleOnPress(info.name)}>{info.name}</Text>
            </View>
          )
        )
      }
    </>
  )
}

const styles = StyleSheet.create({
  containerData: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#fff'
  },
  textDay: {
    fontFamily: 'sans-serif',
    marginBottom: 10
  }
})

export default Header
