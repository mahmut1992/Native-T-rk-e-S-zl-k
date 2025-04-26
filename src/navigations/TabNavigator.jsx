import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SearchView from '../views/SearchView';
import FavoriteView from '../views/FavoriteView';
import HistoryView from '../views/HistoryView';
import {SafeAreaView, StyleSheet} from 'react-native';
import TabBar from '../components/TabBar';

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={'SearchTab'}
      tabBar={props => <TabBar {...props} />}>
      <Tab.Screen name="History" component={HistoryView} />
      <Tab.Screen
        options={() => {
          return {
            header: () => {},
          };
        }}
        name="SearchTab"
        component={SearchView}
      />
      <Tab.Screen name="Favorite" component={FavoriteView} />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({});
