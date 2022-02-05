import React, { VFC } from 'react';
import tw from 'tailwind-rn';
import { Text, SafeAreaView, Button, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
// import { useFirebaseAuth } from '../hooks/useFirebaseAuth';
// import { Button } from '../components/Button';
// import { InputField } from '../components/InputField';
// import { IconButton } from '../components/IconButton';

import { useFetchData } from '../hooks/useFetchData';

export const TestScreen: VFC = () => {
  // const {
  //   isLogin,
  //   email,
  //   password,
  //   authErr,
  //   login,
  //   register,
  //   setEmail,
  //   setPassword,
  //   toggleMode,
  // } = useFirebaseAuth();

  const { onClickTest, fetchErr } = useFetchData();

  return (
    <SafeAreaView
      style={[tw('flex-1 pt-16 items-center'), { backgroundColor: '#fff' }]}
    >
      <Text>Hello</Text>
      <View>
        <Button
          onPress={onClickTest}
          title="データ取得"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    </SafeAreaView>
  );
};
