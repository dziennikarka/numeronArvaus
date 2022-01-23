import react, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default function App() {
  const[message, setMessage] = useState("Guess a number between 1 - 100");
  const[guess, onChangeGuess] = useState(null);
  const[counter, setCounter] = useState(0);
  const [randomNUmber, setRandomNumber] = useState(Math.floor(Math.random() * 100) + 1);

  //checking whether the guess is correct
  const checkGuess = () => {
    if(parseInt(guess) == randomNUmber){
      Alert.alert("You guessed the number in " + counter + " guesses");
      setCounter(0);
      setRandomNumber(Math.floor(Math.random() * 100) + 1);
      setMessage("Guess a number between 1 - 100");
    }else if(parseInt(guess) > randomNUmber){
      setMessage("Your guess " + guess + " is too high");
      setCounter(counter + 1);
    }else{
      setMessage("Your guess " + guess + " is too low");
      setCounter(counter + 1);
    }

  }

  return (
    <View style={styles.container}>
      <Text>{message}</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeGuess}
        value={guess}
        keyboardType="numeric"
      />
      <Button onPress={checkGuess} title="MAKE GUESS"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
