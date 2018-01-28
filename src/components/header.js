//Import libs for Components
import React from 'react';
// import { View, Text } from 'react-native';
import { Text, View } from 'react-native';
const style = {
    viewStyle: {
        backgroundColor: '#F8F8F8'
    },
    textStyle: {
        fontSize: 20
    }
};

//Make a Component
const Header = () => {
    const { textStyle, viewStyle } = style;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>Albums</Text>
        </View>
    )
};


//make component available to other parts of the app
export default Header;
