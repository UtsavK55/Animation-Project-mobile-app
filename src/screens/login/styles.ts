import {StyleSheet} from 'react-native';

import {createThemedStyles} from '@helpers';
import {layout} from '@theme';

export const loginStyles = createThemedStyles(
  (colors, scalingMetrics, scale, value, translateY, fadeAnim) => {
    const {hp, wp, scaleSize} = scalingMetrics;
    return StyleSheet.create({
      image: {
        width: wp(33),
        height: wp(33),
        borderRadius: scaleSize(70),
        backgroundColor: colors.white,
        paddingVertical: scaleSize(12),
      },
      container: {...layout.flex_1, flexDirection: 'column'},
      topContainer: {
        flex: 6,
        backgroundColor: colors.blue700,
        ...layout.itemsCenter,
        ...layout.justifyCenter,
      },
      imageContainer: {
        ...layout.row,
        ...layout.justifyCenter,
      },
      childContainer: {
        ...layout.itemsCenter,
        ...layout.justifyCenter,
        position: 'absolute',
        top: '30%',
      },
      appTitle: {
        textAlign: 'center' as 'center',
        fontSize: 24,
        fontWeight: 'semibold' as 'semibold',
        marginVertical: 24,
      },
      infoContainer: {
        backgroundColor: colors.white,
        flex: 1,
      },
      info: {
        textAlign: 'center' as 'center',
        color: colors.fixedWhite,
        fontSize: 28,
        fontWeight: 'bold' as 'bold',
        position: 'absolute',
        bottom: '15%',
        marginHorizontal: 24,
      },
      buttonText: {
        borderWidth: 1,
        borderColor: colors.fixedblue700,
        textAlign: 'center' as 'center',
        marginHorizontal: 40,
        marginTop: 40,
        paddingVertical: 12,
        color: colors.fixedblue700,
        borderRadius: 4,
        fontWeight: 'bold' as 'bold',
      },
      termText: {
        textAlign: 'center' as 'center',
        color: colors.fixedWhite,
        position: 'absolute',
        bottom: '8%',
        fontSize: 14,
      },
      formContainer: {
        height: hp(40),
        ...layout.fullWidth,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        zIndex: 10000,
        paddingHorizontal: 24,
      },
      input: {
        backgroundColor: colors.white,
        marginTop: 24,
      },
    });
  },
);
