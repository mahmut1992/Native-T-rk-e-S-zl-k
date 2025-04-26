import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import {radius, colors} from '../utils/theme';
import {useNavigation} from '@react-navigation/native';

const Card2 = ({summary, title, homeData}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Detail', {title: homeData?.atasoz[0]?.madde})
      }>
      <View
        style={{
          padding: 20,
          backgroundColor: 'white',
          borderRadius: radius.normal,
          marginTop: 20,
        }}>
        {homeData ? (
          <View style={{borderLeftWidth: 3, borderLeftColor: colors.light}}>
            <Text style={{fontSize: 18, fontWeight: 'bold', paddingLeft: 12}}>
              {homeData?.atasoz[0]?.madde}
            </Text>
            <Text
              style={{
                fontSize: 14,
                paddingLeft: 12,
                marginTop: 9,
                color: colors.textMedium,
              }}>
              {homeData?.atasoz[0]?.anlam}
            </Text>
          </View>
        ) : (
          <ActivityIndicator size="large" color="red" />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Card2;
