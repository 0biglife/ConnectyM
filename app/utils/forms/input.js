import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

const input = props => {
  let template = null;
  switch (props.type) {
    case 'textinput':
      template = <TextInput {...props} style={styles.input} />;
      break;
  }
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    fontSize: 17,
    padding: 5,
    marginTop: 30,
  },
});

export default input;
