import React from 'react'; 
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    Text,
    View,
    Image,
    StyleSheet} 
from 'react-native';
// import instagramWordLogo from '../assets/instagram-word-logo.png';

const Header = () => {

return (
    <View style={styles.header}>
        <Icon name="camera" style={styles.icon} />
        {/* <Text style ={styles.logoTxt}>Instagram</Text> */}
        <Image 
        source={{ uri: 'https://ar.toneden.io/19770869/2c56f10e-8acb-4113-8d3b-49ac2e9b6ce8' }}
        style ={styles.logo} />
        <Icon name="send" style={styles.icon}  />
    </View>
    )
};

const styles = StyleSheet.create({
    header : {
      height: "10%",
      backgroundColor: '#111111',
      color: 'white',
      flexDirection: "row",
      justifyContent: "space-between",
      paddingTop: 20,
      paddingRight: 15,
      paddingLeft: 15,
      borderBottomColor: 'gray',
      borderBottomWidth: 0.5,
    },
    logo: {
        paddingTop:30 ,
        width: 120,
        // height: 2,
    },
    icon : {
        fontSize: 20,
        color : "white"
    }
  });

export default Header;