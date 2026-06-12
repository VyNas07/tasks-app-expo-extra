import React from 'react';
import { View } from 'react-native';
import { Heading, Text } from '@gluestack-ui/themed';

const EmptyState = () => {
  return (
    <View className="flex-1 items-center justify-center py-16 px-8">
      <Heading className="text-gray-400 mb-2">Nenhuma tarefa</Heading>
      <Text className="text-gray-400 text-center">
        Você não tem tarefas cadastradas. Adicione uma nova tarefa para começar!
      </Text>
    </View>
  );
};

export default EmptyState;
