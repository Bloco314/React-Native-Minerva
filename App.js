import { useState } from 'react';
import {View } from 'react-native';
import { Button, TextInput } from 'react-native-web';
import QRcodeCanvas from './QRcodeCanvas';

const App= () => {  
  const [txt,setTxt]=useState('type here:')
  
  return(
    <View style={{backgroundColor:'blue',alignItems:'center', marginTop:200}}>
      <TextInput style={{backgroundColor: 'black',color:'white'}}
        defaultValue={txt}
        onChangeText={newText => setTxt(newText)} >        
      </TextInput>
        <QRcodeCanvas text={txt}></QRcodeCanvas>
    </View>
  );
};

export default App;