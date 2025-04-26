import {
  Button,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {radius, colors} from '../utils/theme';
import {Search, X} from '../components/icons';
import {useRef, useState} from 'react';
import {FeComponentTransfer} from 'react-native-svg';
import {useEffect} from 'react';

const SearchInput = ({onChangeFocus}) => {
  // const inputRef = useRef(null);
  const [isFocus, setIsFocus] = useState(false);
  const [value, setValue] = useState('');

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     inputRef.current?.focus();
  //   }, 300);
  //   return () => clearTimeout(timer);
  // }, []);

  // useEffect(() => {
  //   Keyboard.addListener('keyboardWillShow', keyboardDidShow);
  //   Keyboard.addListener('keyboardWillHide', keyboardDidHide);

  //   return function () {
  //     Keyboard.removeListener('keyboardWillShow', keyboardDidShow);
  //     Keyboard.removeListener('keyboardWillHide', keyboardDidHide);
  //   };
  // }, []);

  useEffect(() => {
    onChangeFocus(isFocus);
  }, [isFocus]);

  const onCancel = () => {
    setIsFocus(false);
    Keyboard.dismiss();
  };

  return (
    <View
      style={{
        marginTop: 50,
        padding: 10,
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <View
        style={{
          position: 'absolute',
          zIndex: 1,
          top: 25,
          left: 20,
        }}>
        <Search style={{color: colors.textMedium}} />
      </View>

      <TextInput
        value={value}
        // ref={inputRef}
        clearButtonMode="always"
        onFocus={() => setIsFocus(true)}
        placeholder="Türkçe Sözlükte Ara..."
        placeholderTextColor={colors.textMedium}
        style={{
          flex: 1,
          backgroundColor: 'white',
          color: 'black',
          borderWidth: 1,
          borderColor: isFocus ? '#D1D1D1' : 'transparent',
          height: 52,
          borderRadius: radius.normal,
          paddingLeft: 52,
          shadowColor: '#000',
          shadowOpacity: 0.1,
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowRadius: 24,
        }}
      />

      {isFocus && (
        <View style={{paddingHorizontal: 20}}>
          <Button onPress={onCancel} title="Vazgeç" color="black"></Button>
        </View>
      )}
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({});
