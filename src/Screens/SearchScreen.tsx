import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity, Alert} from 'react-native';
import CompanyItem from '../Components/CompanyItem';
import company from '../Utilities/company.json';
import {Modal, TextInput} from 'react-native-paper';
import {AppProps} from '../Navigation/Navigation';

const SearchScreen = ({navigation}: AppProps<'Search'>) => {
  const [text, setText] = React.useState('');
  const [addList, setAddList] = React.useState('');
  const [addCity, setAddCity] = React.useState('')
  const [visible, setVisible] = React.useState(false);
  const [companies,setCompanies] = React.useState(company)
  const [editIndex, setEditIndex] = React.useState<number | null>(null);

  const showModal = () => setVisible(true);
  const hideModal = () => {
    setAddList('');
    setAddCity('');
    setEditIndex(null);
    setVisible(false);
  };

  const handleAddCompanyName = () => {
    if (!addList.trim()) {
      Alert.alert('Error', 'Company name cannot be empty.');
      return;
    }

    if (editIndex !== null) {
    
      const updatedCompanies = [...companies];
      updatedCompanies[editIndex] = { name: addList.trim(), city: addCity.trim() };
      setCompanies(updatedCompanies);
    } else {
     
      setCompanies(prev => [{ name: addList.trim(), city: addCity.trim() }, ...prev]);
    }

    hideModal();
  };

  const handleDeleteCompany = (index: number) => {
    Alert.alert('Delete', 'Are you sure you want to delete this company?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Delete', style: 'destructive', onPress: () => {
        setCompanies(prev => prev.filter((_, i) => i !== index));
      }},
    ]);
  };

  const handleEditCompany = (index: number) => {
    setEditIndex(index);
    setAddList(companies[index].name);
    setAddCity(companies[index].city);
    showModal();
  };

  const filteredCompanies = companies.filter(item =>
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
        renderItem={({item,index}) => (
          <CompanyItem
            name={item.name}
            cityName={item.city}
            goToDetails={() =>
              navigation.navigate('Details', {
                title: item.name,
                subTitle: item.city,
              })
            }
            onDelete={() => handleDeleteCompany(index)} 
            onEdit={() => handleEditCompany(index)}
          />
        )}
      />

      <TouchableOpacity onPress={showModal} style={styles.modalButton}>
        <Text style={{color: 'white', padding: 8}}>Create List</Text>
      </TouchableOpacity>

      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={{
          backgroundColor: 'white',
          padding: 20,
          margin: 12,
        }}>
        <Text>Add Your Favourite Company name</Text>
        <TextInput
          label="Enter Company Name"
          value={addList}
          mode="outlined"
          onChangeText={addList => setAddList(addList)}
          style={{backgroundColor: 'white', marginTop: 12}}
          placeholderTextColor="#0000"
          cursorColor="#000"
          outlineStyle={{borderColor: '#000'}}
        />
        <TextInput
          label="Enter City"
          value={addCity}
          mode="outlined"
          onChangeText={addCity => setAddCity(addCity)}
          style={{backgroundColor: 'white', marginTop: 12}}
          placeholderTextColor="#0000"
          cursorColor="#000"
          outlineStyle={{borderColor: '#000'}}
        />
      <TouchableOpacity onPress={handleAddCompanyName} style={styles.addButton}>
          <Text style={styles.buttonText}>{editIndex !== null ? 'Update' : 'Add'}</Text>
        </TouchableOpacity>
      </Modal>
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
  modalButton: {
    position: 'absolute',
    bottom: 12,
    right: 12,
    backgroundColor: '#47535E',
    borderRadius: 2,
  },
  addButton: {
    marginTop: 12,
    alignItems: 'center',
    backgroundColor: '#47535E',
    borderRadius: 2,
    alignSelf: 'flex-end',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default SearchScreen;
