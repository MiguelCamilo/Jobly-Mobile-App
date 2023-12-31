import * as React from 'react'
import { Stack } from 'expo-router'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'

// this makes the native splash screen stay visible
SplashScreen.preventAutoHideAsync() 

const Layout = () => {
    const [fontsLoaded] = useFonts({
        DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
        DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
        DMRegualr: require('../assets/fonts/DMSans-Regular.ttf'),
    })

    const onLayoutRootView = React.useCallback(async () => {
        if(fontsLoaded) {
         await SplashScreen.hideAsync()
        }             
    },[fontsLoaded])

    if(!fontsLoaded) return null 
    return <Stack onLayout={onLayoutRootView} />    
}

export default Layout