import {ROUTES} from '@constants';

declare global {
  type StackScreenNames = keyof typeof ROUTES;
  type StackScreenParamList = Record<StackScreenNames, undefined>;
  type StackNavigationType = NavigationProp<StackScreenParamList>;
}
