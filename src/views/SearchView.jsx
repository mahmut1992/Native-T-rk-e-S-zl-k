import {
  Animated,
  Button,
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Bookmark, Search, RotateCcw, Logo} from '../components/icons/';
import {colors} from '../utils/theme';
import SearchInput from '../components/SearchInput';
import bg from '../assests/images/bg.jpg';
import {useEffect, useState} from 'react';
import {Card} from '../components/Card';
import Card2 from '../components/Card2';
import {useNavigation} from '@react-navigation/native';
import SimpleCard from '../components/SimpleCard';

const SearchView = () => {
  const [homeData, setHomaData] = useState(null);
  const [isSearchFocus, setIsSearchFocus] = useState(false);
  // const [heroHeight] = ;
  // useEffect(() => {
  //   if (isSearchFocus) {
  //     Animated.timing(heroHeight, {
  //       toValue: 0,
  //       duration: 500,
  //     }).start();
  //   } else {
  //     Animated
  //       .timing(heroHeight, {
  //         toValue: 285,
  //         duration: 500,
  //       })
  //       .start();
  //   }
  // }, [isSearchFocus]);

  const getHomeData = async () => {
    const response = await fetch('https://sozluk.gov.tr/icerik');
    const data = await response.json();
    setHomaData(data);
  };
  useEffect(() => {
    getHomeData();
  }, []);

  const data = [
    {
      id: 'kljfwhjfewkwşfwafşş-54545',
      title: 'Milliyet',
      summary: 'Açıklama 1',
    },
    {
      id: 'jqwjfpoqwrfjoj-54545',
      title: 'Ekalliyet',
      summary: 'Açıklama 2',
    },
    {
      id: 'sdfsdf-54545',
      title: 'Elzem',
      summary: 'Açıklama 3',
    },
    {
      id: 'ccsacas-54545',
      title: 'Dubur',
      summary: 'Açıklama 3',
    },
    {
      id: 'plkskflkfkccccwq-54545',
      title: 'Ahkam',
      summary: 'Açıklama 3',
    },
    {
      id: 'asqwr-54545',
      title: 'Mülk',
      summary: 'Açıklama 3',
    },
    {
      id: 'plkskflkffwekwq-54545',
      title: 'İstihdam',
      summary: 'Açıklama 3',
    },
    {
      id: 'fffdsffsf-54545',
      title: 'Kelam',
      summary: 'Açıklama 3',
    },
    {
      id: '7856786yıtıy-54545',
      title: 'Elzem',
      summary: 'Açıklama 3',
    },
  ];

  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={bg}
        style={{
          paddingVertical: 20,
          width: '100%',
          height: isSearchFocus ? 0 : 285,
          position: 'relative',
        }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: isSearchFocus && -20,
          }}>
          <Logo width={120} height={40} color="white" />
        </View>

        <View
          style={{
            width: '100%',
            position: 'absolute',
            bottom: isSearchFocus ? -120 : -50,
            padding: 16,
            zIndex: 3,
            backgroundColor: isSearchFocus && colors.light,
          }}>
          <SearchInput onChangeFocus={status => setIsSearchFocus(status)} />
        </View>
      </ImageBackground>
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          paddingTop: isSearchFocus ? 0 : 26,
        }}>
        {isSearchFocus ? (
          <View
            style={{
              flex: 1,
              marginTop: 120,
            }}>
            <FlatList
              style={{padding: 16}}
              data={data}
              renderItem={({item}) => (
                <View style={{margin: 10}}>
                  <SimpleCard title={item.title} />
                </View>
              )}
              ListHeaderComponent={
                <>
                  <Text
                    style={{
                      color: colors.textLight,
                      marginLeft: 10,
                      marginBottom: 10,
                    }}>
                    Son Arananlar
                  </Text>
                </>
              }
            />
          </View>
        ) : (
          <View
            style={{
              flex: 1,
              paddingHorizontal: 28,
              paddingVertical: 40,
              backgroundColor: colors.softRed,
            }}>
            <Text style={{marginBottom: 15, color: colors.textLight}}>
              Bir Kelime
            </Text>
            <Card homeData={homeData} />
            <Text style={{marginTop: 40, color: colors.textLight}}>
              Bir deyim - Atasözü
            </Text>
            <Card2 homeData={homeData} />
          </View>
        )}
      </View>
    </View>
  );
};

export default SearchView;

const styles = StyleSheet.create({});
