import React from 'react'; 

import {Text, View,FlatList, StyleSheet } from 'react-native';

import Card from './Card';

const Content = () => {

return (
   <View style={styles.Content}>
         <FlatList
          data={[1, 2, 3, 4, 5, 6, 7]}
          renderItem={ele => <Card num={ele.item} />}
          keyExtractor={(ele, idx) => idx}
          ItemSeparatorComponent={() => (
            <View
              style={ styles.seprator }
              />
          )} />
       </View>       
)}

const styles = StyleSheet.create({
    Content : {
        flex:1,
        backgroundColor: '#111111',
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
        // paddingTop: 2 
    },
    seprator : {
        alignSelf: 'center',
        height: 1,
        backgroundColor: 'grey',
        width: '100%',
    } 
  });


export default Content;