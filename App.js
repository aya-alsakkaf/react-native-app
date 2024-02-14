import { NavigationContainer } from "@react-navigation/native";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import MainNavigation from "./src/navigation/MainNavigation";
import { useEffect, useState } from "react";
import { UserContext } from "./src/context/UserContext";
import { getToken } from "./src/api/Auth/storage";
import AuthNavigation from "./src/navigation/AuthNavigation/AuthNavigation";
import { NativeBaseProvider } from "native-base";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const checkToken = async () => {
    const token = await getToken();
    if (token) {
      setIsAuthenticated(true);
    }
  };
  useEffect(() => {
    checkToken();
  }, []);
  return (
    <NativeBaseProvider>
      <UserContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
        <QueryClientProvider client={new QueryClient()}>
          <NavigationContainer>
            {isAuthenticated ? <MainNavigation /> : <AuthNavigation />}
          </NavigationContainer>
        </QueryClientProvider>
      </UserContext.Provider>
    </NativeBaseProvider>
  );
}
