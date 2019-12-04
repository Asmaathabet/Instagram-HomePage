import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Like from 'react-native-vector-icons/FontAwesome';


const Card = ({ num }) => (
  <View style={styles.cardView}>
      <View
        style={styles.imageView}>
         <View style={styles.imageRight}>   
            <Image
            source={require('../assets/user.jpg')}
            style={styles.avatar}
            />
            <View style={styles.users}>
                <Text style={styles.username}>Lousie Moran</Text>
                <Text style={styles.userplace}>New York </Text>
            </View>
        </View>
        <Icon name="more-horiz" style={styles.icon} />
      </View>
    <ImageBackground
      source={require('../assets/post.jpg')}
      style={styles.background}>
    </ImageBackground>
    <View style={styles.likes}>
      <View style={styles.likesRight}>
          <Like name ="heart" style= {styles.like} />
          <Like name ="comment" style={styles.like} />
          <Like name ="send" style={styles.like} />
      <View style={styles.likesMiddle}>
          <Like name="circle" style={styles.circle} />
          <Like name="circle" style={styles.circle} />
      </View>
      </View>
      <View style={styles.likesLeft}>
          <Like name ="bookmark" style={styles.like} />
      </View>
    </View>
    <View style={styles.LikeDescription}>
      <View style={styles.likedFirst}>
        <Text style={styles.liked}>Liked by </Text> 
        <Text style ={styles.username}>Berg, Tomas and 821 others </Text>
      </View>
      <View style={styles.likedFirst}>
        <Text style ={styles.username}>Lousie Moran</Text>
        <View>
            <Text style ={styles.description}>Autum Season Beauty </Text>
        </View>
      </View>
        <Text style={styles.link}>https://github.com/oblador/react-native-vector-icons</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
    cardView : {
        height: 430,
        paddingRight: 12,
        paddingLeft: 12
    },
    imageView : {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 16,
        paddingBottom: 6,
        paddingStart:2,
        paddingEnd: 2,
        justifyContent: 'space-between',
    },
    imageRight:{
        flexDirection: 'row',     
    },
    users:{
        paddingStart:7
    },
    avatar : {
        width: 45,
        height: 45, 
        borderRadius: 25,
        marginLeft: 8
    },
    username :{
        color: 'white',
        fontWeight: "bold"
    },
    userplace:{
        color: 'white',
        fontSize: 12
    },
    icon : {
        fontSize: 25 ,
        color: 'white',
    },
    background :{
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        paddingRight: 12,
        paddingBottom: 12,
    },
    likes : {
        height:40, 
        flexDirection: "row",
        justifyContent: "space-between",
    },
    likesRight:{
      flexDirection:"row",
      justifyContent: "space-between",
      paddingTop: 8,
    },
    like:{
      color: 'white',
      fontSize: 20,
      paddingRight: 10,
      paddingStart: 10 
    },
    likesMiddle:{
     flexDirection:"row",
     justifyContent: "center",
     paddingTop: 8,
     paddingLeft: 40
    },
    circle:{
        fontSize: 8,
        color: "white",
        marginRight: 5, 
    },
    likesLeft:{
       paddingTop: 8,
    },
    LikeDescription:{
      height:50,
      marginBottom: 30  
    },
    likedFirst :{
        flexDirection: "row"
    },
    liked: {
        color: 'white'
    },
    description: {
        color: 'white',
        marginStart: 10,
        fontWeight: "normal"
    },
    link :{
        color: "#2b92f4",
    }
});

export default Card;
