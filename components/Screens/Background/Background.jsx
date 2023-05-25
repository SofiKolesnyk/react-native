import BackgroundImage from '../../../assets/images/bg-photo.jpg';
import { ImageBackground, StyleSheet } from "react-native";

export const Background = ({ children }) => {
  return (
    <ImageBackground
      source={BackgroundImage}
      style={styles.image}
    >
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    width: '100%',
    height: '100%',
  },
})