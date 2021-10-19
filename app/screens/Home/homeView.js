import React, {Component} from 'react';

import {StyleSheet, Text, View} from 'react-native';

class HomeView extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignCItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>HomeView</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default HomeView;
