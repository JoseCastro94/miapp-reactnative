import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      width: '100%',
      padding: 20,
    },
    text: {
      fontSize: 20,
      color: '#6f6f6f',
    },
    textDone: {
      fontSize: 20,
      color: '#6f6f6f',
      textDecorationLine: 'line-through',
    },
    whiteText: {
      fontSize: 16,
      color: '#fff',
    },
    textInput: {
      borderColor: '#6f6f6f',
      borderWidth: 1,
      width: Dimensions.get('screen').width * 0.6,
      borderRadius: 15,
      paddingLeft: 15,
    },
    inputContainer: {
      marginTop: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    addButton: {
      width: Dimensions.get('screen').width * 0.25,
      backgroundColor: '#5897fb',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
    },
    removeButton: {
      backgroundColor: '#f33d3d',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 15,
      borderRadius: 10,
      marginTop: 10, 
    },
    scrollContainer: {
      marginTop: 20,
    },
    itemContainer: {
      paddingVertical: 10,
      borderBottomColor: '#e4e4e4',
      borderBottomWidth: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: Dimensions.get('screen').width * 0.9,
    },
  });

  export default styles;