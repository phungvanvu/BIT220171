import React, { useState, useRef } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import PhoneInput from "react-native-phone-number-input";
import Icon from "react-native-vector-icons/FontAwesome";

const App = () => {
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const phoneInput = useRef(null);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <View style={styles.container}>
        <Image
          source={require("../BIT220171_PhungVanVu/images/login.png")}
          style={styles.backgroundImage}
        />
        <SafeAreaView style={styles.wrapper}>
          <Text style={styles.title}>Get your groceries with nectar</Text>
          <PhoneInput
            ref={phoneInput}
            defaultValue={value}
            defaultCode="VN"
            layout="first"
            placeholder="Nhập số điện thoại"
            onChangeText={(text) => {
              setValue(text);
            }}
            onChangeFormattedText={(text) => {
              setFormattedValue(text);
            }}
            withShadow
            autoFocus
            containerStyle={styles.phoneInput}
            textContainerStyle={styles.textInputContainer}
          />
          
          {/* Displaying the formatted value */}
          {formattedValue !== "" && (
            <Text style={styles.formattedValueText}>
              Formatted Value: {formattedValue}
            </Text>
          )}
          
          <Text style={styles.orText}>Or connect with social media</Text>
          <TouchableOpacity style={styles.socialButton}>
            <Icon name="google" size={20} color="#fff" style={styles.icon} />
            <Text style={styles.buttonText}>Continue with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Icon name="facebook" size={20} color="#fff" style={styles.icon} />
            <Text style={styles.buttonText}>Continue with Facebook</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    position: "relative",
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    resizeMode: "cover",
    opacity: 0.9, 
  },
  wrapper: {
    flex: 1,
    justifyContent: "flex-start", 
    width: "100%",
    padding: 16,
    marginTop: 370, 
  },
  formattedValueText: {
    textAlign: "center",
    fontSize: 16,
    color: "#333", 
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  orText: {
    textAlign: "center",
    marginVertical: 10,
    fontSize: 16,
    color: "#555", 
  },
  phoneInput: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ddd", 
    borderRadius: 8, 
    marginBottom: 20,
    backgroundColor: "#fff",
  },
  textInputContainer: {
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 0, 
  },
  socialButton: {
    backgroundColor: "#4285F4", 
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
    shadowColor: "#000", 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    flexDirection: "row", 
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center", 
    marginLeft: 10, 
  },
  icon: {
    marginRight: 10,
  },
});

export default App;
