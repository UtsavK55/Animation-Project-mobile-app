import {StyleSheet} from 'react-native';

import {createThemedStyles} from '@helpers';
import {layout} from '@theme';

export const baseContainerStyles = createThemedStyles((colors: Colors) => {
  return StyleSheet.create({
    container: {
      backgroundColor: colors.white,
      ...layout.flex_1,
      
    },
  });
});
