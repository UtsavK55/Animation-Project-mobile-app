import {useEffect, useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import SplashScreen from '@components/splashScreen';
import {DarkThemeProvider} from '@contexts/ThemeContext';
import Navigator from '@navigation/Navigator';
import {layout} from '@theme';

function App(): React.JSX.Element {
  const [isSplashScreen, setIsSplahScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsSplahScreen(false);
    }, 3100);
  }, []);
  return (
    <DarkThemeProvider>
      <SafeAreaView style={{...layout.flex_1}}>
        <NavigationContainer>
          {isSplashScreen ? <SplashScreen /> : <Navigator />}
        </NavigationContainer>
      </SafeAreaView>
    </DarkThemeProvider>
  );
}

export default App;
