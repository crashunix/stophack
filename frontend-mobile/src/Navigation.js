import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Ionicons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';

import HomeScreen from './screens/Home';
import SearchScreen from './screens/Search';
import ComingScreen from './screens/Coming';

const Tab = createBottomTabNavigator();

const icons = {
    Home: {
        lib: Feather,
        name: 'home',
    },
    Search: {
        lib: Feather,
        name: 'search',
    },
    Coming: {
        lib: MaterialCommunityIcons,
        name: 'animation-play-outline',
    },
    Downloads: {
        lib: Feather,
        name: 'download',
    },
    More: {
        lib: Feather,
        name: 'menu',
    },

};

export default function Navigation() {
    return(
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({color, size}) => {
                    const { lib: Icon, name } = icons[route.name];
                    return <Icon name={name} size={size} color={color} />
                },
            })}
            tabBarOptions = {{
                style: {
                    backgroundColor: '#111',
                    borderTopColor: 'rgba(255,255,255,0)',
                },
                activeTintColor: '#fff',
                inactiveTintColor: '#92929c',
            }}
        >
            <Tab.Screen name="Home" options={{
                title: 'Início',
            }} component={HomeScreen}/>
            <Tab.Screen name="Search" options={{
                title: 'Buscas'
            }} component={SearchScreen}/>
            <Tab.Screen name="Coming" options={{
                title: 'Em breve'
            }} component={ComingScreen}/>
            <Tab.Screen name="Downloads" options={{
                title: 'Downloads'
            }} component={ComingScreen}/>
            <Tab.Screen name="More" options={{
                title: 'Mais'
            }} component={ComingScreen}/>
        </Tab.Navigator>
    );
}