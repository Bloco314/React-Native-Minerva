import {View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import telaInicial from './telaInicial';
import telaQrCode from './telaQrCode';
import telaBarCode from './telaBarCode';
import telaText from './telaText';

const Stack = createNativeStackNavigator();

export default function TelaAdm (){  
  return(
    <View style={{marginTop:200,marginHorizontal:600}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Inicio' component={telaInicial}options={{headerStyle:{backgroundColor:'darkgrey',height:50}}}/>
          <Stack.Screen name='QRcode' component={telaQrCode}options={{headerStyle:{backgroundColor:'darkgrey',height:50}}}/>
          <Stack.Screen name='BarCode' component={telaBarCode}options={{headerStyle:{backgroundColor:'darkgrey',height:50}}}/>
          <Stack.Screen name='Text' component={telaText}options={{headerStyle:{backgroundColor:'darkgrey',height:50}}}/> 
        </Stack.Navigator>  
      </NavigationContainer>
    </View>
  );
} 