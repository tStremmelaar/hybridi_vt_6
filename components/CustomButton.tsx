import { useState } from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { buttonProps } from "../types";

export default function CustomButton(props: buttonProps) {
  const [buttonIn, setButtonIn] = useState(false)

  return (
    <Pressable
      onPressIn={() => setButtonIn(true)}
      onPressOut={() => setButtonIn(false)}
      onPress={props.handlePress}
    >
      <Text style={[styles.button,
        {backgroundColor: buttonIn ? '#002D4D' : '#004A80'}
      ]}>
        {props.text}
      </Text>
    </Pressable>
  )
  
}

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    marginTop: 10,
    padding: 8,
    borderRadius: 15,
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
})