import React, {Component} from 'react';

import {StyleSheet, Text, View} from 'react-native';

class PracticeView extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignCItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Practice View</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default PracticeView;
