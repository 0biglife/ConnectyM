import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Item = ({item}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{num}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    height: 100,
  },
  text: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 40,
  },
});

export default Item;
