import {View} from 'react-native';
import {baseContainerStyles} from './styles';

const BaseContainer = ({children}: {children: React.ReactNode}) => {
  const styles = baseContainerStyles();
  return <View style={styles.container}>{children}</View>;
};

export default BaseContainer;
