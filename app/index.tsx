import { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import { COLORS, icons, images, SIZES } from '../constants';
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components';


const Home = () => {
    const router = useRouter();
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: COLORS.lightWhite,
        }}>
            <StatusBar barStyle='dark-content' />
            <Stack.Screen options={{
                headerStyle: {
                    backgroundColor: COLORS.lightWhite,             
                },
                headerShadowVisible: true,
                headerLeft: () => (
                    <ScreenHeaderBtn iconUrl={icons.menu} dimensions="60%" />
                ),
                headerRight: () => (
                    <ScreenHeaderBtn iconUrl={images.profile} dimensions="100%" />
                ),
                headerTitle: "",                
            }} />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                    style={{
                        flex: 1,                        
                        paddingHorizontal: SIZES.medium,
                    }}
                >
                    <Welcome />
                    <Popularjobs />
                    <Nearbyjobs />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;