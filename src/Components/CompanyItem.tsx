import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

type companyProps = {
  name: string;
  cityName: string;
  goToDetails: ()=>void
};

const CompanyItem = ({name, cityName,goToDetails}: companyProps) => {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        onPress={goToDetails}>
        <Text style={styles.companyTitleStyle}>{name}</Text>

        <View style={styles.cityContainer}>
          <Text style={styles.cityTextStyle}>{cityName}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomWidth: 0.5,
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
});

export default CompanyItem;
