import {RouteProp} from '@react-navigation/native';
import {NativeStackRoutes} from '../navigation/routes';
import {StackNavigationProp} from '@react-navigation/stack';

export type ScreenProps<Screen extends keyof NativeStackRoutes> = {
  navigation?: StackNavigationProp<NativeStackRoutes, Screen>;
  route?: RouteProp<NativeStackRoutes, Screen>;
};
