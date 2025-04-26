import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgHandSolid = props => (
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
      fillRule="evenodd"
      d="M17.353 3.23a4.26 4.26 0 0 1 1.195 2.97v7.378l9.652 2.8L26.542 30H11.07L3.743 19.948a3.93 3.93 0 0 1-.74-2.444 3.9 3.9 0 0 1 .91-2.382 3.7 3.7 0 0 1 2.161-1.267 3.65 3.65 0 0 1 2.455.409l1.862 1.05V6.2c0-1.114.43-2.182 1.195-2.97A4.02 4.02 0 0 1 14.469 2a4.02 4.02 0 0 1 2.884 1.23"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgHandSolid;
