
import {NavigationContainer} from "@react-navigation/native";
import MainNavigation from "./navigation/MainNavigation";
import {PaperProvider} from "react-native-paper";

const App = () => {


  return (
      <PaperProvider>
      <NavigationContainer >
          <MainNavigation />
      </NavigationContainer>
      </PaperProvider>
  )
}



export default App;
