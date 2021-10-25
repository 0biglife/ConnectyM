import React, {Component} from 'react';

import {StyleSheet, Text, View} from 'react-native';

class MatchView extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignCItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Match View</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default MatchView;
