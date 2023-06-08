declare module 'react-native-vector-icons/MaterialIcons' {
  import {FC} from 'react';
  type IconProps = {
    name: string;
    size?: number;
    color?: string;
  };
  const Icon: FC<IconProps>;
  export default Icon;
}
