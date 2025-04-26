import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgFavoriteSolid = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 32 32"
    className=""
    {...props}>
    <Path
      fill="currentColor"
      d="M25.333 13.51V5.508a2.67 2.67 0 0 0-2.666-2.666H9.333a2.67 2.67 0 0 0-2.666 2.666v23.824L16 23.112l9.333 6.221z"
    />
  </Svg>
);
export default SvgFavoriteSolid;
