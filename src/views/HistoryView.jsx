import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../utils/theme';

const HistoryView = () => {
  return (
    <SafeAreaView
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 40}}>History</Text>
    </SafeAreaView>
  );
};

export default HistoryView;

const styles = StyleSheet.create({});
