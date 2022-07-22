import React from 'react'
import { StyleSheet } from "react-native"
import { Card, Title, Paragraph } from 'react-native-paper';

const CardFav = () => {
  return (
    <Card style={styles.container}>
      <Card.Content>
        <Title>Card title</Title>
        <Paragraph>Card content</Paragraph>
      </Card.Content>
    </Card>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    backgroundColor: 'transparent'
  }
});

export default CardFav