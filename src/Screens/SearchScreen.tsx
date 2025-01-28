import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import CompanyItem from '../Components/CompanyItem';
import company from '../Utilities/company.json';
import {TextInput} from 'react-native-paper';
import { AppNavigationProps, AppProps } from '../Navigation/Navigation';

const SearchScreen = ({navigation}:AppProps<'Search'>) => {
  const [text, setText] = React.useState('');
  const filteredCompanies = company.filter(item =>
    item.name.toLowerCase().includes(text.toLowerCase()),
  );
  return (
    <View>
      <View style={{width: '90%', margin: 16}}>
        <TextInput
          label="Search Comapany by Name"
          value={text}
          mode="outlined"
          onChangeText={text => setText(text)}
          style={{backgroundColor: 'white'}}
          placeholderTextColor="#0000"
          cursorColor="#000"
          outlineStyle={{borderColor: '#000'}}
        />
      </View>
      <Text style={styles.companyTitleStyle}>Popular Companies</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        {filteredCompanies.map((item, index) => {
          return (
            <View key={index}>
              <CompanyItem name={item.name} cityName={item.city} goToDetails={()=>navigation.navigate('Details',{title:item.name,subTitle:item.city})} />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  companyTitleStyle: {
    fontSize: 20,
    fontWeight: '400',
    margin: 16,
  },
});

export default SearchScreen;
