import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, ScrollView, SafeAreaView, Text } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import { COLORS, icons, SIZES } from '../constants';

import { Summary, IconRenderer, BottomBar } from '../components';
// import { IconRenderer } from '../components/common';

const Home = () => {

    const [pageTitle, HandleTabPress] = useState("Home");

    const router = useRouter();

    return (
        <View style={{flex: 1}}>
            <StatusBar style='dark' />
            <Stack.Screen  options={{
                headerStyle: {backgroundColor:  COLORS.lightWhite},
                headerShadowVisible: false,
                headerTitle: pageTitle
            }} />
            <BottomBar handleTabPress={HandleTabPress} />
        </View>
    )
}
export default Home;