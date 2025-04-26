import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import DetailView from '../views/DetailView';
import {colors} from '../utils/theme';
import {Button, TouchableOpacity} from 'react-native';
import {Left, More} from '../components/icons';

const Stack = createNativeStackNavigator();
const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Search"
        component={TabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailView}
        options={({route, navigation}) => {
          return {
            title: (route.params && route.params.title) || 'Boş',
            headerBackVisible: false,
            headerStyle: {
              backgroundColor: colors.softRed,
            },
            headerRight: () => {
              return (
                <TouchableOpacity style={{size: 10}}>
                  <More color={colors.textDark} />
                </TouchableOpacity>
              );
            },
            headerLeft: () => {
              return (
                <TouchableOpacity
                  onPress={() => navigation.navigate('Search')}
                  style={{size: 10}}>
                  <Left color={colors.textDark} />
                </TouchableOpacity>
              );
            },
          };
        }}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
