import React, {FC} from 'react';
import {Text, View} from 'react-native';

type TagProps = {
  active?: boolean;
  name?: string;
};

export const Tag: FC<TagProps> = ({active = false, name}) => {
  return (
    <View
      style={{
        borderRadius: 30,
        backgroundColor: active ? 'black' : 'white',
      }}>
      <Text
        style={{
          color: active ? 'white' : 'black',
          paddingHorizontal: 15,
          paddingVertical: 10,
        }}>
        {name}
      </Text>
    </View>
  );
};
