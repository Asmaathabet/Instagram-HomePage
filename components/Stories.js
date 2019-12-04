import React from 'react'; 
import Icon from 'react-native-vector-icons/FontAwesome';

import {Text, View,FlatList,Card, StyleSheet} from 'react-native';

import Story from './Story';
import Data  from './StoriesData';

export default class Stories extends React.Component {
      
      render (){    
          return (  
  <View style={styles.Stories}>
      <View style={styles.head}>
            <Text style ={styles.txtStories}> Stories </Text>
             <View style ={styles.Watch}>
               <Icon name="caret-right" style={styles.icon}  />
               <Text style ={styles.txtWatch}> Watch all </Text>
             </View>
      </View>

      <View style={styles.Content}>
         <FlatList
          data={Data}
          renderItem={ele => <Story image={ele.item} />}
          keyExtractor={(ele, idx) => idx} 
          style={styles.images} 
          horizontal/>
       </View>        

      {/* <FlatList
          data={["https://randomuser.me/api/portraits/women/73.jpg","https://randomuser.me/api/portraits/women/73.jpg","https://randomuser.me/api/portraits/women/73.jpg","https://randomuser.me/api/portraits/women/73.jpg","https://randomuser.me/api/portraits/women/73.jpg"]}
          renderItem={ele => <Story image={ele.item} />}
          keyExtractor={(ele, idx) => idx}
          ItemSeparatorComponent={() => (
            <View
              style={ styles.seprator }
              />
          )} /> */}

      {/* <FlatList
          data={ Data }
          renderItem={({item}) => ( 
          <Story 
                id = {item.id}
                title = {item.title} 
          />
           )}
           keyExtractor={item => item.id}
          style = {styles.storiesList}
        /> */}
      
</View>
)
}
};

const styles = StyleSheet.create({
    Stories : {
        height: "15%",
        backgroundColor: '#111111',
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
    },
    head: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 5 
    },
    txtStories: {
        paddingLeft: 10,
        color: 'white'
    },
    Watch: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    txtWatch: {
        paddingRight: 10,
        color: 'white'  
    },
    icon : {
        color : 'white',
        fontSize: 20
    },
    txtheader : {
        color : 'black',
    },
    storiesList : {
        flexDirection: "row",
        color:'white',
        backgroundColor: "blue"
    },
   Content:{
       paddingTop: 5
   }
});

