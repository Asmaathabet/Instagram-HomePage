import React from 'react';

import { Text, View,Image, StyleSheet } from 'react-native';

const Story = ({ image }) => {
    
    return (
        <View style={styles.Container}>
            {/* <Text style={styles.text}>{title}</Text> */}
            <Image
             source={ require('../assets/storyImage.jpg')}
             style ={styles.img} />
        </View>
    )

}

const styles = StyleSheet.create({
    Container: {
        flex:1,
        flexDirection: "row"
    },
    text:{
        color: 'white',
        fontSize:50 
    },
    img:{
        height:50,
        width: 50,
        borderRadius: 25,
        marginLeft: 12
    }

});

export default Story;