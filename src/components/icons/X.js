import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgX = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className=""
    viewBox="0 0 24 24"
    {...props}>
    <Path d="M18 6 6 18M6 6l12 12" />
  </Svg>
);
export default SvgX;
