import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Search, RotateCcw, Bookmark} from '../components/icons';

function TabBar({state, descriptors, navigation}) {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        return label === 'SearchTab' ? (
          <View key={route.key} style={styles.middleWrapper}>
            <TouchableOpacity style={styles.floatingTab} onPress={onPress}>
              <Search style={{color: 'white'}} />
              {isFocused && (
                <View style={[styles.indicator, {backgroundColor: 'white'}]} />
              )}
            </TouchableOpacity>
          </View>
        ) : label === 'History' ? (
          <TouchableOpacity
            key={route.key}
            style={styles.tab}
            onPress={onPress}>
            <RotateCcw style={{color: '#758291'}} />
            {isFocused && <View style={styles.indicator} />}
          </TouchableOpacity>
        ) : (
          label === 'Favorite' && (
            <TouchableOpacity
              key={route.key}
              style={styles.tab}
              onPress={onPress}>
              <Bookmark style={{color: '#758291'}} />
              {isFocused && <View style={styles.indicator} />}
            </TouchableOpacity>
          )
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    flexDirection: 'row',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 24,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -15,
  },
  label: {
    color: '#222',
    fontSize: 14,
  },
  focusedLabel: {
    color: '#673ab7',
    fontWeight: 'bold',
  },
  indicator: {
    marginTop: 4,
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#E11E3C',
  },
  middleWrapper: {
    flex: 1,
    alignItems: 'center',
    top: -30,
    zIndex: 10,
  },

  floatingTab: {
    height: 64,
    width: 64,
    borderRadius: 32,
    backgroundColor: '#E11E3C',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
    borderWidth: 4,
    borderColor: 'white', // bu beyaz kenar efekti verecek
  },
});

export default TabBar;
