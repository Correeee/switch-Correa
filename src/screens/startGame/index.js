import React, { useState } from 'react';
import {
    Button,
    Text,
    TextInput,
    View,
    TouchableWithoutFeedback,
    Keyboard,
    Alert,
} from 'react-native';

import { styles } from './styles';
import { Card, Header, NumberContainer } from '../../components/index';

const StartGame = ({ onStartGame }) => {
    const [numberOption, setNumberOption] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState(null);

    const onHandlerChangeText = (text) => {
        setNumberOption(text.replace(/[^0-9]/g, ''));
    };

    const onHandlerConfirm = () => {
        const chosenNumber = Number(numberOption);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Número inválido', 'El número debe ser entre 1 y 99', [
                { text: 'Ok', style: 'destructive', onPress: () => setNumberOption('') },
            ]);
        } else {
            setConfirmed(true);
            setSelectedNumber(chosenNumber);
            setNumberOption('');
        }
    };

    const onHandlerReset = () => {
        setNumberOption('');
        setConfirmed(false);
        setSelectedNumber(null);
    };

    const onHandlerStartGame = () => {
        onStartGame(selectedNumber);
    };

    const Confirmed = () =>
        confirmed ? (
            <Card style={styles.confirmedContainer}>
                <Text style={styles.confirmedTitle}>Número Seleccionado:</Text>
                <NumberContainer number={selectedNumber} />
                <Button title="Comenzar Juego" onPress={onHandlerStartGame} color={'#457b9d'} />
            </Card>
        ) : null;

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <Text style={styles.title}>Comenzar Juego</Text>
                <Card style={styles.inputContainer}>
                    <Text style={styles.label}>¡Escribe un número!</Text>
                    <TextInput
                        placeholder="0"
                        style={styles.input}
                        keyboardType="number-pad"
                        maxLength={2}
                        autoCapitalize="none"
                        autoCorrect={false}
                        blurOnSubmit
                        onChangeText={onHandlerChangeText}
                        value={numberOption}
                    />
                    <View style={styles.buttonContainer}>
                        <Button title="Resetear" onPress={onHandlerReset} color={'#e63946'} />
                        <Button
                            title="Confirmar"
                            onPress={onHandlerConfirm}
                            color={'#457b9d'}
                            disabled={numberOption === ''}
                        />
                    </View>
                </Card>
                <Confirmed />
            </View>
        </TouchableWithoutFeedback>
    );
};

export default StartGame;