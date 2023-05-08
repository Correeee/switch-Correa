import { useState } from 'react';
import { Button, Text, View } from 'react-native';
import { styles } from './styles';
import { Card, NumberContainer } from '../../components';

const MIN_NUMBER = 1;
const MAX_NUMBER = 99;

const generateRandomNumber = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randomNumber = Math.floor(Math.random() * (max - min) + min);
    if (randomNumber === exclude) {
        return generateRandomNumber(min, max, exclude);
    } else {
        return randomNumber;
    }
};

const Game = ({ userNumber }) => {
    const [currentGuess, setCurrentGuess] = useState(
        generateRandomNumber(MIN_NUMBER, MAX_NUMBER, userNumber)
    );
    return (
        <View style={styles.container}>
            <Card style={styles.content}>
                <Text style={styles.title}>Guess a Number</Text>
                <NumberContainer number={currentGuess} />
                <View style={styles.buttonContainer}>
                    <Button title="Menor" color={'#e63946'} onPress={() => { }} />
                    <Button title="Mayor" color={'#52b788'} onPress={() => { }} />
                </View>
            </Card>
        </View>
    );
};

export default Game;