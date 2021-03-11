import {StyleSheet} from 'react-native';
import {Colors, Dimensions} from '../../styles';

export const styles = StyleSheet.create({
  logo: {
    height: 30,
    width: 105,
    resizeMode: 'cover',
  },
  fill: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    alignItems: 'center',
  },
  titleText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textStyle: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
    padding: 10,
    marginTop: 16,
  },
  buttonStyle: {
    fontSize: 16,
    color: 'white',
    backgroundColor: 'green',
    padding: 5,
    minWidth: 250,
  },
  buttonTextStyle: {
    padding: 5,
    color: 'white',
    textAlign: 'center',
  },
  textLinkStyle: {
    color: 'blue',
    paddingVertical: 20,
  },
  cameraView: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  cameraTopArea: {
    alignSelf: 'center',
    paddingTop: Dimensions.SIZE_XL * 3,
    flex: 1,
  },
});
