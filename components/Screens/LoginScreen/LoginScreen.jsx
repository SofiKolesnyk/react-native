import { useState } from "react";
import {
	TouchableWithoutFeedback, 
  KeyboardAvoidingView,
	View,
  Keyboard,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet,
	Platform,
} from "react-native";

import { Background } from '../Background/Background';

const initialState = {
  name: "",
  email: "",
  password: "",
};

export const LoginScreen = ({ navigation }) => {
  
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [state, setState] = useState(initialState);
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);
  
  const keyboardHidden = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const submitForm = () => {
    setState(initialState)
    console.log(state)
  }

  
  return (
		<TouchableWithoutFeedback onPress={keyboardHidden}>   
			<View style={styles.container}>
				<Background> 
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View style={{...styles.form, paddingBottom: isShowKeyboard ? 0 : 111}}>
              <Text style={[styles.header]}>
                Увійти
              </Text>
              <View style={{ marginTop: 32 }}>
                <TextInput
                  placeholder="Адреса електронної пошти"
                  style={isFocusedEmail ? styles.inputOnFocus : styles.input}
                  onChange={() => setIsFocusedEmail(true)}
                  value={state.email}
                      onChangeText={(value) =>
                        setState((prevState) => ({
                          ...prevState,
                          email: value,
                        }))
                      }
                  onFocus={() => setIsShowKeyboard(true)}
                />       
              </View>
              <View style={{ marginTop: 16, position: 'relative' }}> 
                <TextInput
                  placeholder="Пароль"
                  style={isFocusedPassword ? styles.inputOnFocus : styles.input}
                  onChange={() => setIsFocusedPassword(true)}
                  secureTextEntry={!showPassword}
                  value={state.password}
                      onChangeText={(value) =>
                        setState((prevState) => ({
                          ...prevState,
                          password: value,
                        }))
                      }
                  onFocus={() => setIsShowKeyboard(true)}
                />
                <View style={styles.showPassword}>
                  <TouchableOpacity title="show" onPress={togglePasswordVisibility}>
                    <Text style={{color:'#1B4371'}}>{showPassword ? 'Сховати' : 'Показати'}</Text>
                  </TouchableOpacity>
                </View>       
              </View>
              <TouchableOpacity style={styles.btnSubmit} title={"Login"} onPress={submitForm}>
                <Text style={{ color: '#fff' }} >
                  Увійти
                </Text>
              </TouchableOpacity>
              <Text
                style={styles.logInText}
                onPress={() => navigation.navigate("Registration")}>
                  Немає аккаунта? Зареєструватися
              </Text>
            </View>
          </KeyboardAvoidingView>
        </Background> 
			</View>
    </TouchableWithoutFeedback>         
  )
}

const styles = StyleSheet.create({
  container: {
		position: 'relative',    
		flex: 1,
    backgroundColor: "#fff",
	},
	
  form: { 
    width: '100%',
    paddingHorizontal: 16,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: 'white',
    zIndex: 20
  },
  
  input: {   
    height: 50,
    paddingLeft: 16,
    gap: 16,
    backgroundColor: '#F6F6F6', 
    color: '#BDBDBD',
    borderRadius: 8,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#E8E8E8",
  },

  inputOnFocus: {
    height: 50,
    paddingLeft: 16,
    gap: 16,
    color: '#212121',
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#FF6C00",
  },

  inputTitle: {
    color: "#f0f8ff",
  },
  
  text: {
    fontFamily: 'Roboto-Regular',
    color: '#212121',
    fontWeight: 400,
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
  },

  header: {   
    marginTop: 32,
    fontFamily: 'Roboto-Regular',
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    textAlign: 'center',
    fontStyle: 'normal',
  },
  
  showPassword: {
    top: 16,
    left: 275,
		position: 'absolute',
		flexDirection: 'row',
    alignItems: 'center'
	},
	
	btnSubmit: {
    height: 51,
    paddingTop: 16,
    marginTop: 40,
    marginBottom: 16,
    borderRadius: 50,
    backgroundColor: "#FF6C00",
    
    textAlign: 'center',
    alignItems: 'center',
    fontFamily: 'Roboto-Regular',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 16,
    fontStyle: 'normal',
  },  

  logInText: {
    color: "#1B4371",
    textAlign: 'center',
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
}); 