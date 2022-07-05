import { SafeAreaProvider } from "react-native-safe-area-context";
import { ApplicationNavigator } from "./navigation";
import "react-native-gesture-handler";

export default () => {
  return (
        <SafeAreaProvider>
          <ApplicationNavigator />
        </SafeAreaProvider>
  );
};
