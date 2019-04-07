// Import libraries for creating components
import React from 'react';
import { Text, View } from 'react-native';

// Creating components
const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{ props.headerText }</Text>
        </View>
    );
}

// Styling components
const styles = {
    viewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        padding: 15,
        backgroundColor: '#F8F8F8', 
        shadowColor: '#000000',
        shadowOffset: { width:0, height:2},
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
};

// Make the components available to other parts of the app
export default Header;