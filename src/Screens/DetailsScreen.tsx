import React from "react";
import {View,Text, StyleSheet} from 'react-native'
import { AppProps } from "../Navigation/Navigation";

const DetailsScreen = ({route}:AppProps<'Details'>)=>{
    const {title,subTitle} = route.params
    return (
        <View style={styles.container} >
            <Text style={styles.titleStyle} >{title}</Text>
            <Text>{subTitle}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    titleStyle:{
        fontSize:16,
        fontWeight:'700',
        margin:16
    }
})

export default DetailsScreen