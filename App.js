import { NavigationContainer } from "@react-navigation/native";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import MainNavigation from "./src/navigation/MainNavigation";
export default function App() {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </QueryClientProvider>
  );
}
