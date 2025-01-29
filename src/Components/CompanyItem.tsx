import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

type companyProps = {
  name: string;
  cityName: string;
  goToDetails: ()=>void;
  onEdit: ()=>void;
  onDelete: ()=>void
};

const CompanyItem = ({name, cityName,goToDetails,onEdit,onDelete}: companyProps) => {
  const navigation = useNavigation();

  return (
    <View style={{ borderBottomWidth:0.5 }} >
      <TouchableOpacity
        style={styles.container}
        onPress={goToDetails}>
        <Text style={styles.companyTitleStyle}>{name}</Text>

        <View style={styles.cityContainer}>
          <Text style={styles.cityTextStyle}>{cityName}</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.buttons}>
        <TouchableOpacity onPress={onEdit} style={styles.editButton}>
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  companyTitleStyle: {
    fontSize: 16,
    fontWeight: '600',
  },
  cityContainer: {
    padding: 8,
    borderWidth: 0.5,
    borderRadius: 4,
  },
  cityTextStyle: {
    fontSize: 12,
    fontWeight: '400',
  },
  buttons: {
    flexDirection: 'row',
    padding:16
  },
  editButton: {
    marginRight: 8,
    backgroundColor: '#007BFF',
    padding: 6,
  },
  deleteButton: {
    backgroundColor: '#FF3B30',
    padding: 6,
  },
  buttonText: {
    color: 'white',
  },
});

export default CompanyItem;
