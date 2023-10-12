import React from "react";
import { View, Text, Button, Alert, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
const map=useNavigation();
const New = ({ }) =>{


const app =() =>{
   Alert.alert("Hello Guys");
   map.navigate('DisplayScreen');
   
}
return(
    <View>
        <Text>Welcome!</Text>
        <Button style={Styles.button} title={'Submit'} onPress={() => app()} />
        </View>
)
};
 const Styles=StyleSheet.create({
    button:{
        color:'tomoto',
    }


 });
export default New;
