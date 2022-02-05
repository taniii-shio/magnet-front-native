import React, { VFC } from 'react';
import tw from 'tailwind-rn';
import { SafeAreaView, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

// import { AuthStackNavigator } from './AuthStackNavigator';
// import { TagStackNavigator } from './TagStackNavigator';
// import { useAuthState } from '../hooks/useAuthState';

import { TestScreen } from '../screens/TestScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator<RootStackParamList>();

type RootStackParamList = {
  Test: undefined;
};

export const RootNavigator: VFC = () => {
  // const { user, isLoading } = useAuthState();

  // if (isLoading) {
  //   return (
  //     <SafeAreaView style={tw('flex-1 items-center justify-center')}>
  //       <ActivityIndicator size="large" color="gray" />
  //     </SafeAreaView>
  //   );
  // }
  return (
    <NavigationContainer>
      {/* {user?.uid ? <TagStackNavigator /> : <AuthStackNavigator />} */}
      <Stack.Navigator>
        <Stack.Group
          screenOptions={{
            headerStyle: {
              backgroundColor: '#008b8b',
            },
            // headerTitle: user.email,
            headerTintColor: 'white',
            headerBackTitle: 'back',
          }}
        >
          <Stack.Screen name="Test" component={TestScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
