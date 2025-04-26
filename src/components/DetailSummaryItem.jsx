import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {colors, radius} from '../utils/theme';

const DetailSummaryItem = ({data}) => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        marginTop: 40,
        paddingHorizontal: 26,
        paddingVertical: 20,
        borderRadius: radius.normal,
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flexDirection: 'row', paddingVertical: 20}}>
          <Text style={{marginRight: 10, color: colors.textLight}}>1.</Text>
          <Text style={{color: 'red'}}>İSİM</Text>
        </View>
        <View>
          <Text style={{fontSize: 14, fontWeight: '600'}}>
            {data?.anlamlarListe[0]?.anlam}
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '500',
              marginLeft: 10,
              marginTop: 10,
              color: colors.textLight,
            }}>
            {data?.anlamlarListe?.[0]?.ozelliklerListe?.[1]?.tam_adi}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 20,
            marginTop: 30,
            borderTopWidth: 1,
            borderColor: colors.light,
          }}>
          <Text style={{marginRight: 10, color: colors.textLight}}>2.</Text>
          <Text style={{color: 'red'}}>İSİM</Text>
        </View>
        <View>
          <Text style={{fontSize: 14, fontWeight: '600'}}>
            Yazma, çizme vb. işlerde kullanılan çeşitli biçimlerde araç:
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '500',
              marginLeft: 10,
              marginTop: 10,
              color: colors.textLight,
            }}>
            "Kağıt, kalem, mürekkep, hepsi masanın üstündedir." - Falih Rıfkı
            Atay
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 20,
            marginTop: 30,
            borderTopWidth: 1,
            borderColor: colors.light,
          }}>
          <Text style={{marginRight: 10, color: colors.textLight}}>3.</Text>
          <Text style={{color: 'red'}}>İSİM</Text>
        </View>
        <View>
          <Text style={{fontSize: 14, fontWeight: '600'}}>
            Yazma, çizme vb. işlerde kullanılan çeşitli biçimlerde araç:
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '500',
              marginLeft: 10,
              marginTop: 10,
              color: colors.textLight,
            }}>
            "Kağıt, kalem, mürekkep, hepsi masanın üstündedir." - Falih Rıfkı
            Atay
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 20,
            marginTop: 30,
            borderTopWidth: 1,
            borderColor: colors.light,
          }}>
          <Text style={{marginRight: 10, color: colors.textLight}}>3.</Text>
          <Text style={{color: 'red'}}>İSİM</Text>
        </View>
        <View>
          <Text style={{fontSize: 14, fontWeight: '600'}}>
            Yazma, çizme vb. işlerde kullanılan çeşitli biçimlerde araç:
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '500',
              marginLeft: 10,
              marginTop: 10,
              color: colors.textLight,
            }}>
            "Kağıt, kalem, mürekkep, hepsi masanın üstündedir." - Falih Rıfkı
            Atay
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 20,
            marginTop: 30,
            borderTopWidth: 1,
            borderColor: colors.light,
          }}>
          <Text style={{marginRight: 10, color: colors.textLight}}>3.</Text>
          <Text style={{color: 'red'}}>İSİM</Text>
        </View>
        <View>
          <Text style={{fontSize: 14, fontWeight: '600'}}>
            Yazma, çizme vb. işlerde kullanılan çeşitli biçimlerde araç:
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '500',
              marginLeft: 10,
              marginTop: 10,
              color: colors.textLight,
            }}>
            "Kağıt, kalem, mürekkep, hepsi masanın üstündedir." - Falih Rıfkı
            Atay
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailSummaryItem;
