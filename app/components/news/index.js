import React, {Component} from 'react';

import {StyleSheet, Text, View} from 'react-native';

class NewsComponent extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignCItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>NewsComponent</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default NewsComponent;
