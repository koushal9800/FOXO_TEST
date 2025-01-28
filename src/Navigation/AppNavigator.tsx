import {createStackNavigator} from '@react-navigation/stack';
import SearchScreen from '../Screens/SearchScreen';
import DetailsScreen from '../Screens/DetailsScreen';
import { AppNavigationProps } from './Navigation';





const Stack = createStackNavigator<AppNavigationProps>();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
