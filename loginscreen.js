import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export default function LoginScreen ({navigation}) {
    return(
        <View style={{justifyContent: 'center'}}>
            <Text>hello react</Text>
            <TextInput
         style={{height: 40,
         margin: 12,
         borderWidth: 1,
         padding: 10,
         }}/>
      <TextInput
        style={{ height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,}}
      />
            <Button title="Submit" onPress={() => navigation.navigate('Dashboard')}/>
        </View>
    );
}