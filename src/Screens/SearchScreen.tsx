import React from "react";
import {View,Text, ScrollView} from 'react-native'
import CompanyItem from "../Components/CompanyItem";
import company from '../Utilities/company.json' 

const SearchScreen = () =>{
    return (
        <View>
            <ScrollView showsVerticalScrollIndicator={false} >
            {company.map((item,index)=>{
                return (
                    <View key={index} >
<CompanyItem name={item.name} cityName={item.city} />
                    </View>
                )
            })}
            </ScrollView>
        </View>
    )
}

export default SearchScreen