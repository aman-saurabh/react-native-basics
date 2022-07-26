import 'react-native-gesture-handler';
import Component01 from "./components/Component01";
import Component02 from "./components/Component02";
import Component03 from "./components/Component03";
import Component04 from "./components/Component04";
import Component05 from "./components/Component05";
import Component06 from "./components/Component06";
import Component07 from "./components/Component07";
import Component08 from "./components/Component08";
import Component09 from "./components/Component09";
import Component10 from "./components/Component10";
import Component11 from "./components/Component11";
import Component12 from "./components/Component12";
import Component13 from "./components/Component13";
import Component14 from "./components/Component14";
import StackNavigationComponent from './components/react-navigation/01-stack-navigator/StackNavigationComponent';
import BottomTabsNavigationComponent from './components/react-navigation/02-tab-navigator/BottomTabsNavigationComponent';
import MaterialBottomTabsNavigationComponent from './components/react-navigation/03-material-tab-navigator/MaterialBottomTabsNavigationComponent';
import MaterialTopTabsNavigationComponent from './components/react-navigation/03-material-tab-navigator/MaterialTopTabsNavigationComponent';
import CustomDrawerComponent from './components/react-navigation/04-drawer-navigator/02CustomDrawerComponent';
import DrawerNavigationComponent from './components/react-navigation/04-drawer-navigator/01DrawerNavigationComponent';
import PassingParametersBetweenScreens from './components/react-navigation/05-passing-parameters-between-screems/PassingParametersBetweenScreens';

/*
  Have converted this project from 'Expo CLI' project to 'React Native CLI' project. 
  So now you need to run this project as follows :
  npm start
  Or,
  npm run android

  Above commands may take quite some time, So wait the command completes its execution or throw error.
  If you are running above command for the first time on any emulator then you might get error or program may not run.
  In that case use following commands. Even if are getting any error again and again especially of type "Invariant Violation: requireNativeComponent....."
  then simply close your emulator, wipe its data and restart enulator and then run following commands. Your error might be resolved.

  npx react-native start 				      - - - (To start Metro)
  npx react-native run-android			  - - - (Run this command in a new terminal(i.e. don't close the terminal in which metro is running) to run project in Android emulator)
*/

/*
    To run this project first you need to install "Andriod studio" in your system and then follow these steps.
    While opening first time it may ask you for "Install Type", Select "Standard" as install type. Then press next-next 
    until you reach to finish button and finally press finish button.
    From the Android Studio Welcome screen, select 'More Actions' -> 'Virtual Device Manager'.
    Now press on "Create device" -> A new screen will open -> Choose a device like "Pixel 6" -> Finish setup.
    It will redirect you again on Virtual Device Manager screen(i.e. where "Create device" button was there). 
    Choose the device you created in previous step and click on play button.
    It will create and setup Andriod Emulator on your system. Now you can view your project by pressing "a" in your
    PC(i.e. system) terminal where you are running your react native project. 
    You can also use "expo url" printed on your screen to connect to Andriod emulator which seems like - exp://192.168.1.8:19000
    You can also use your andriod phone as emulator. For that You will just have to install and open "Expo Go" app on 
    your andriod app and in that app you can either scan the QR code printed on your terminal or use "expo url" to connect.


    How to open Debug menu in Andriod emulator :
    If you are running the android emulator on your PC then open your Android Emulator and press 'Command + M' 
    on macOS or 'Ctrl + M' on Linux and Windows from the PC keyboard. And if you are running the android emulator 
    on your android phone then just shake your phone and the Debug menu will be open.
*/

export default function App() {
  return (
    <>
      {/* <Component01 /> */}
      {/* <Component02 /> */}
      {/* <Component03 /> */}
      {/* <Component04 /> */}
      {/* <Component05 /> */}
      {/* <Component06 /> */}
      {/* <Component07 /> */}
      {/* <Component08 /> */}
      {/* <Component09 /> */}
      {/* <Component10 /> */}
      {/* <Component11 /> */}
      {/* <Component12 /> */}
      {/* <Component13 /> */}
      {/* <Component14 /> */}
      {/* <StackNavigationComponent /> */}
      {/* <BottomTabsNavigationComponent /> */}
      {/* <MaterialBottomTabsNavigationComponent /> */}
      {/* <MaterialTopTabsNavigationComponent /> */}
      {/* <DrawerNavigationComponent /> */}
      {/* <CustomDrawerComponent /> */}
      <PassingParametersBetweenScreens />
    </>
  );
}