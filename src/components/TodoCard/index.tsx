import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Icon from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
  container: {
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 20,
    gap: 10,
  },
  primaryContainer: {
    backgroundColor: '#3269ff',
  },
  secondaryContainer: {
    backgroundColor: '#fff',
  },
});

type CheckBoxProps = {
  text?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  primary?: boolean;
};

const CheckBox: FC<CheckBoxProps> = ({
  text = '',
  checked,
  onChange,
  primary,
}) => {
  const [_checked, setChecked] = React.useState(checked);

  const checkStatus = checked === undefined ? _checked : checked;

  return (
    <View
      style={{
        backgroundColor: primary ? '#3163E9' : '#F5F5F5',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingHorizontal: 10,
        paddingVertical: 10,
      }}>
      <BouncyCheckbox
        disableBuiltInState
        isChecked={_checked || checked}
        onPress={() => {
          if (checked === undefined) {
            setChecked(!_checked);
          } else {
            onChange?.(!checked);
            setChecked(undefined);
          }
        }}
        size={25}
        textComponent={
          <Text
            style={[
              {
                color: primary ? 'white' : '#282828',
                fontSize: 16,
                paddingLeft: 8,
              },
              checkStatus && {
                color: primary ? '#7d9cf1' : '#979797',
                textDecorationLine: 'line-through',
              },
            ]}>
            {text}
          </Text>
        }
        fillColor={primary ? 'white' : '#3163E9'}
        iconImageStyle={{
          tintColor: primary ? '#3263e8' : 'white',
        }}
      />
    </View>
  );
};

type TodoCardProps = {
  title: string;
  primary?: boolean;
};

export const TodoCard: FC<TodoCardProps> = ({title, primary}) => {
  return (
    <View
      style={[
        styles.container,
        primary ? styles.primaryContainer : styles.secondaryContainer,
      ]}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text
          style={[
            {
              fontSize: 16,
              fontWeight: '600',
            },
            primary ? {color: '#fff'} : {color: '#282828'},
          ]}>
          {title}
        </Text>
        <Icon
          size={20}
          color={primary ? '#CCCCCC' : '#282828'}
          name={'more-horiz'}
        />
      </View>
      <View
        style={{
          gap: 10,
        }}>
        <CheckBox primary={primary} checked text={'Research'} />
        <CheckBox primary={primary} text={'Moodboard'} />
        <CheckBox primary={primary} text={'Lof Design'} />
        {!primary && <CheckBox primary={primary} text={'Lof Design'} />}
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 8,
        }}>
        <Text
          style={[
            primary
              ? {
                  color: '#fff',
                }
              : {
                  color: '#979797',
                },
          ]}>
          {new Date().toDateString()}
        </Text>
        <Icon
          name={'push-pin'}
          color={primary ? '#fff' : '#282828'}
          size={20}
        />
      </View>
    </View>
  );
};
