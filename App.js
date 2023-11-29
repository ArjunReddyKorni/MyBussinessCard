import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './components/Home';
import QrCode from './components/QrCode';
import Login from './components/Login';
import axios from 'axios';
import {Dashboard} from './components/Dashboard';

const Stack = createStackNavigator();

const App = () => {
  const [data, setData] = useState([]);

  const fetchDataFromServer = async () => {
    const apiUrl = 'http://10.55.4.152:8080/email';
    const email = 'uwt{c0rtcmcuj3Bvcvceqpuwogt0eqo';

    try {
      const response = await axios.post(apiUrl, {email});
      console.log('Data received from server:', response.data);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchDataFromServer();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Use options={{headerShown: false}} to hide the header */}
        <Stack.Screen
          options={{headerShown: false}}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Dashboard"
          component={Dashboard}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={HomeScreen}
        />

        {data.length > 0 && (
          <Stack.Screen
            name="QrCode"
            component={QrCode}
            initialParams={{
              name: data[0].full_name,
              number: data[0].phone_number,
              email: data[0].email,
              location: data[0].location,
            }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
