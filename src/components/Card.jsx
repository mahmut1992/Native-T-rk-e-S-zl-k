import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import {colors, radius} from '../utils/theme';
import {useNavigation} from '@react-navigation/native';

export const Card = ({title, summary, homeData}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Detail', {title: homeData?.kelime[0]?.madde})
      }>
      <View
        style={{
          padding: 20,
          backgroundColor: 'white',
          borderRadius: radius.normal,
        }}>
        {homeData ? (
          <View style={{borderLeftWidth: 3, borderLeftColor: colors.light}}>
            <Text style={{fontSize: 18, fontWeight: 'bold', paddingLeft: 12}}>
              {homeData?.kelime[0]?.madde}
            </Text>
            <Text
              style={{
                fontSize: 14,
                paddingLeft: 12,
                marginTop: 9,
                color: colors.textMedium,
              }}>
              {homeData?.kelime[0]?.anlam}
            </Text>
          </View>
        ) : (
          <ActivityIndicator size="large" color="red" />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Card;
