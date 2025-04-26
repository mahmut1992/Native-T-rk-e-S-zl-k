import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors, radius} from '../utils/theme';

import {More, Favorite, Hand, Sound} from '../components/icons';
import DetailSummaryItem from '../components/DetailSummaryItem';

const DetailView = ({route}) => {
  const keyword = 'ekalliyet';

  const [data, setData] = useState(null);

  useEffect(() => {
    getDetailData(keyword);
  }, []);
  const getDetailData = async keyword => {
    const response = await fetch(`https://sozluk.gov.tr/gts?ara=${keyword}`);
    const data = await response.json();

    setData(data[0]);
  };
  console.log(data);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.softRed,
        marginTop: -60,
        padding: 16,
      }}>
      <View>
        <Text style={{fontSize: 32, fontWeight: 'bold'}}>{keyword}</Text>
        <Text style={{color: colors.textLight, marginTop: 10}}>
          ({data?.telaffuz}) {data?.lisan}
        </Text>
      </View>
      <View style={{flexDirection: 'row', marginTop: 24}}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            width: 48,
            height: 48,
            borderRadius: radius.full,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
            shadowColor: '#000',
            shadowOpacity: 0.16,
            shadowRadius: 4,
            shadowOffset: {
              width: 0,
              height: 1,
            },
            paddingHorizontal: 10,
          }}>
          <Sound width={24} height={24} color={colors.textLight} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            width: 48,
            height: 48,
            borderRadius: radius.full,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
            shadowColor: '#000',
            shadowOpacity: 0.16,
            shadowRadius: 4,
            shadowOffset: {
              width: 0,
              height: 1,
            },
            paddingHorizontal: 10,
            marginLeft: 12,
          }}>
          <Favorite width={24} height={24} color={colors.red} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            width: 160,
            height: 48,
            borderRadius: radius.full,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
            shadowColor: '#000',
            shadowOpacity: 0.16,
            shadowRadius: 4,
            shadowOffset: {
              width: 0,
              height: 1,
            },
            paddingHorizontal: 10,
            marginLeft: 'auto',
          }}>
          <Hand width={24} height={24} color={colors.textLight} />
          <Text
            style={{
              color: colors.textLight,
              marginLeft: 8,
              fontWeight: 'bold',
            }}>
            Türk Dil şareti
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <DetailSummaryItem data={data} keyword={keyword} />
      </View>
    </SafeAreaView>
  );
};

export default DetailView;

const styles = StyleSheet.create({});
