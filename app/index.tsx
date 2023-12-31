import * as React from 'react';
import { View, Text, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import { Stack, router as route, useRouter } from 'expo-router';
import { PaperProvider } from 'react-native-paper';;

import { COLORS, icons, images, SIZES } from '../constants';
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from '../components';

const Home = () => {
  const [searchQuery, setSearchQuery] = React.useState('');  
  const router = useRouter();

  return (
    <PaperProvider>      
        <SafeAreaView
          style={{
            flex: 1,
            backgroundColor: COLORS.lightWhite,
          }}>
          <StatusBar barStyle="dark-content" />
          <Stack.Screen
            options={{
              headerStyle: {
                backgroundColor: COLORS.lightWhite,
              },
              headerShadowVisible: true,
              headerLeft: () => (
                <ScreenHeaderBtn
                  iconUrl={icons.menu}
                  handlePress={() => {}}
                  dimensions="60%"
                />
              ),
              headerRight: () => (
                <ScreenHeaderBtn iconUrl={images.profile} dimensions="100%" />
              ),
              headerTitle: '',
            }}
          />

          <ScrollView showsVerticalScrollIndicator={false}>
            <View
              style={{
                flex: 1,
                paddingHorizontal: SIZES.medium,
              }}>                
              <Welcome
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                handleSearch={() => {
                  if (searchQuery) {
                    router.push(`/search/${searchQuery}`);
                  }
                }}
              />
              <Popularjobs />
              <Nearbyjobs />
            </View>
          </ScrollView>
        </SafeAreaView>      
    </PaperProvider>
  );
};

export default Home;
