import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import CompanyItem from '../Components/CompanyItem';
import company from '../Utilities/company.json';
import {TextInput} from 'react-native-paper';
import {AppProps} from '../Navigation/Navigation';

const SearchScreen = ({navigation}: AppProps<'Search'>) => {
  const [text, setText] = React.useState('');
  const filteredCompanies = company.filter(item =>
    item.name.toLowerCase().includes(text.toLowerCase()),
  );
  return (
    <View style={{flex: 1}}>
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
      <FlatList
        data={filteredCompanies}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{paddingBottom: 45}}
        renderItem={({item}) => (
          <CompanyItem
            name={item.name}
            cityName={item.city}
            goToDetails={() =>
              navigation.navigate('Details', {
                title: item.name,
                subTitle: item.city,
              })
            }
          />
        )}
      />

      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 12,
          right: 12,
          backgroundColor: '#47535E',
          borderRadius: 2,
        }}>
        <Text style={{color: 'white', padding: 8}}>Create List</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  companyTitleStyle: {
    fontSize: 20,
    fontWeight: '400',
    margin: 16,
    textDecorationLine: 'underline',
  },
});

export default SearchScreen;
