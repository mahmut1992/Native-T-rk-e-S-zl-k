import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgSoundSolid = props => (
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
      d="M21.868 23.202c1.797-1.614 2.933-4.737 2.933-7.334 0-2.598-1.136-5.72-2.933-7.334zm-17.601 0h3.956l8.43 5.62a1.47 1.47 0 0 0 1.507.073c.477-.255.774-.752.774-1.293V4.134a1.467 1.467 0 0 0-2.28-1.22l-8.431 5.62H4.267a2.936 2.936 0 0 0-2.934 2.934v8.8a2.936 2.936 0 0 0 2.934 2.934m26.4-7.334c0 6-3.626 10.931-8.8 13.2v-2.933c3.502-2.033 5.866-5.936 5.866-10.267S25.37 7.634 21.868 5.6V2.667c5.173 2.27 8.799 7.2 8.799 13.2"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgSoundSolid;
