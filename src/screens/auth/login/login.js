import { AUTHORIZATION_ENDPOINT_URL, AUTH_0_CLIENT_ID } from "@/config";
import * as AuthSession from "expo-auth-session";
import jwtDecode from "jwt-decode";
import React, { useEffect, useState } from "react";
import { Alert, Button, Platform, StyleSheet, Text, View } from "react-native";

const useProxy = Platform.select({ web: false, default: true });
const redirectUri = AuthSession.makeRedirectUri({ useProxy });

export default () => {
  const [name, setName] = useState(null);

  const [request, result, promptAsync] = AuthSession.useAuthRequest(
    {
      redirectUri,
      clientId: AUTH_0_CLIENT_ID,
      responseType: "id_token",
      scopes: ["openid profile email"],
      extraParams: {
        nonce: "nonce",
      },
    },
    { authorizationEndpoint: AUTHORIZATION_ENDPOINT_URL }
  );

  useEffect(() => {
    if (result) {
      if (result.error) {
        Alert.alert(
          "Authentication error",
          result.params.error_description || "something went wrong"
        );
        return;
      }
      if (result.type === "success") {
        const jwtToken = result.params.id_token;
        const decoded = jwtDecode(jwtToken);

        const { name } = decoded;
        setName(name);
      }
    }
  }, [result]);

  return (
    <View style={styles.container}>
      {name ? (
        <>
          <Text style={styles.title}>You are logged in, {name}!</Text>
          <Button title='Log out' onPress={() => setName(null)} />
        </>
      ) : (
        <Button
          disabled={!request}
          title='Log in with Auth0'
          onPress={() => promptAsync({ useProxy })}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 40,
  },
});
