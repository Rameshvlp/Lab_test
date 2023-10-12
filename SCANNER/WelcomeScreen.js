import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WelcomeScreen = ({ route }) => {
  const { name } = route.params;
  const { college } = route.params;

  return (
    <View style={styles.container}>
      <Text>Welcome {name}</Text>
      <Text>college name {college}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
  },
});

export default WelcomeScreen;
