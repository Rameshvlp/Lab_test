import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { firebase } from './config';

const MyForm = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [college, setCollege] = useState('');
  const [department, setDepartment] = useState('');

  const handleSubmit = async () => {
    if (validateFields()) {
      try {
        const docRef = await firebase.firestore().collection('new-data').add({
          name,
          college,
          department,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });

        console.log('Document written with ID:', docRef.id);

        // Move Alert.alert outside the try block
        Alert.alert('Submitted Successfully', 'Your form has been submitted!', [
          {
            text: 'OK',
            onPress: () => {
              navigation.navigate('Welcome', { name, college, department });
            },
          },
        ]);
      } catch (error) {
        console.error('Error adding document:', error);
      }
    }
  };

  const validateFields = () => {
    if (!name || !college || !department) {
      Alert.alert('Error', 'Please fill in all fields.');
      return false;
    }
    return true;
  };

  return (
    <View style={styles.container}>
      <View style={styles.fieldRow}>
        <Text style={styles.label}>Name:</Text>
        <TextInput
          value={name}
          onChangeText={text => setName(text)}
          placeholder="Enter your name"
          style={styles.input}
        />
      </View>

      <View style={styles.fieldRow}>
        <Text style={styles.label}>College:</Text>
        <TextInput
          value={college}
          onChangeText={text => setCollege(text)}
          placeholder="Enter your college"
          style={styles.input}
        />
      </View>

      <View style={styles.fieldRow}>
        <Text style={styles.label}>Department:</Text>
        <TextInput
          value={department}
          onChangeText={text => setDepartment(text)}
          placeholder="Enter your department"
          style={styles.input}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  fieldRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    width: 80,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 5,
  },
  button: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  }
});

export default MyForm;
