import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '@screens/login/Login';
import {ROUTES} from '@constants';

const Stack = createNativeStackNavigator<StackScreenParamList>();

const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={ROUTES.LOGIN} component={Login} />
    </Stack.Navigator>
  );
};

export default Navigator;
