import {View, Text, TouchableOpacity} from 'react-native';
import {colors, radius} from '../utils/theme';

const SimpleCard = ({title}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: colors.light,
        borderRadius: radius.normal,
        padding: 16,
      }}>
      <Text style={{fontSize: 16, fontWeight: 'bold'}}>{title}</Text>
    </TouchableOpacity>
  );
};

export default SimpleCard;
