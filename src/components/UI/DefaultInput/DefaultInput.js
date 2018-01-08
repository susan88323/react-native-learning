import React from 'react';
import { TextInput, StyleSheet} from 'react-native';

const defaultInput = props => (
  <TextInput
    underlineColorAndroid="transparent"
    {...props}
    style={[styles.input, props.style]} // The style order is important, the former one will be override
  />
);

const styles = StyleSheet.create({
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#eee",
    padding: 5,
    marginTop: 8,
    marginBottom: 8
  }
});

export default defaultInput;
