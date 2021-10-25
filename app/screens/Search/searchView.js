import React, {Component} from 'react';

import {StyleSheet, Text, View} from 'react-native';

class SearchView extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignCItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>SearchComponent</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default SearchView;
