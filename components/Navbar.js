import React from 'react'; 
import {Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Navbar = () => {

return (
    <View style={styles.Navbar}>
        <Icon name="home" style= {styles.icon} />
        <Icon name="camera" style= {styles.icon} />
        <Icon name="plus-square"style= {styles.icon} />
        <Icon name="heart" style= {styles.icon} />
        <Icon name="user" style= {styles.icon} />
    </View>
    )
};

const styles = StyleSheet.create({
    Navbar : {
        height: "10%",
        backgroundColor: '#111111',
        color: 'white',
        alignItems: 'center',
        flexDirection: "row",
        justifyContent: "space-between",
        borderTopColor: 'gray',
        borderTopWidth: 0.5,
    },
    txtheader : {
        color : 'white',
    },
    icon: {
    fontSize: 25,
    color: "white",
    marginStart: 10,
    marginEnd: 10    
    }
    
    });

export default Navbar;