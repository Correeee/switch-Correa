import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    title: {
        fontSize: 16,
        color: 'white',
        textAlign: 'center',
        paddingVertical: 20,
        fontFamily: 'Inter-Regular',
    },
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
    },
    label: {
        fontSize: 20,
        color: 'black',
        paddingVertical: 5,
        textAlign: 'center',
    },
    input: {
        borderBottomColor: 'red',
        borderBottomWidth: 1,
        minWidth: 70,
        fontSize: 20,
        textAlign: 'center',
        paddingVertical: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '80%',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    confirmedContainer: {
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 40,
        marginHorizontal: 20,
    },
    confirmedTitle: {
        fontSize: 20,
    },
});