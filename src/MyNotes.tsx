import {Tags} from '@src/components/Tag/Tags';
import {TodoCard} from '@src/components/TodoCard';
import React from 'react';
import {Text, View} from 'react-native';

export const MyNotes = () => {
  return (
    <View>
      <Text
        style={{
          fontWeight: '500',
          fontSize: 24,
          padding: 20,
        }}>
        My Notes
      </Text>
      <View
        style={{
          flexDirection: 'row',
          gap: 10,
          marginHorizontal: 10,
          marginBottom: 20,
        }}>
        <Tags tags={['All', 'To-Do list', 'Work', 'Journal']} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          gap: 10,
          marginHorizontal: 10,
        }}>
        <View
          style={{
            flex: 1,
            gap: 10,
          }}>
          <TodoCard primary title={'Today Work'} />
          <TodoCard title={'To-do List'} />
          <TodoCard title={'To-do List'} />
        </View>
        <View
          style={{
            flex: 1,
            gap: 10,
          }}>
          <TodoCard title={'To-do List'} />
          <TodoCard title={'To-do List'} />
        </View>
      </View>
    </View>
  );
};
