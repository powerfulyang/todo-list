import {Tag} from '@src/components/Tag/index';
import React, {FC} from 'react';
import {TouchableOpacity} from 'react-native';

type Props = {
  tags: string[];
  activeTag?: string;
  onChange?: (tag: string) => void;
};

export const Tags: FC<Props> = ({tags, activeTag, onChange}) => {
  const [active, setActive] = React.useState(activeTag);
  return (
    <>
      {tags.map(tag => {
        return (
          <TouchableOpacity
            key={tag}
            onPress={() => {
              if (activeTag === undefined) {
                setActive(tag);
              } else {
                setActive(undefined);
                onChange?.(tag);
              }
            }}>
            <Tag active={tag === activeTag || active === tag} name={tag} />
          </TouchableOpacity>
        );
      })}
    </>
  );
};
