import React from 'react';

import {
    View,
    StyleSheet,
    Text
  } from 'react-native';

import Header  from '../components/Header';
import Stories from '../components/Stories';
import Content from '../components/Content';
import Navbar from '../components/Navbar';

const Home = () => {

    return (
        <View style={styles.Container}>
            <Header style={styles.Header} />
            <Stories style={styles.Stories} />
            <Content style={styles.Content} />
            <Navbar style={styles.Navbar}/>
        </View>
    )

};
const styles = StyleSheet.create({
    Container:{
        flex: 1
    },
    Content: {
        flex: 1
    },
  });

export default Home;
