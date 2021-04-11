import React from 'react';
import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flex: 1,
        alignItems: "center",
    },
    infoContainer: {
        flex: 1,
        marginTop: 50,
        marginBottom: 10,
    },
    listContainer: {
        flex: 1,
        marginTop: 10,
        backgroundColor: "#ccd9db",
        width: 300,
        alignItems: "center",
        margin: 5
    },
    winnerContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    locationContainer: {
        marginTop: 30,
        flex: 1,
        alignItems: "center",
        //justifyContent: "center"
    },
    address: {
        fontSize: 24,
        textAlign: "center",
        marginTop: 10,
        marginBottom: 10,

    },
    smallTitle: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
    },
    infoBit: {
        fontSize: 24,
        fontWeight: "bold",
        color: "blue"
    },
    priceLevel: {
        fontSize: 20,
        textAlign: "center",
        color: "green",
    },
    bigTitle: {
        textAlign: 'center',
        color: 'purple',
        fontWeight: 'bold',
        fontSize: 36,
        marginBottom: 30
    },
    winnerTitle: {
        color: "blue",
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 5,
    },
    favouriteTitle: {
        fontSize: 30,
        textAlign: "center",
        fontWeight: "bold",
        margin: 10
    },
    listItem: {
        height:110,
        borderColor: "black",
        borderWidth: 1,
        margin: 10,
        backgroundColor: "#30fff5",
        width: 225
    },
    favListItem: {
        height:75,
        borderColor: "black",
        borderWidth: 1,
    },
    listText: {
        fontSize: 24,
    },
    instructions: {
        fontSize: 18,
        textAlign: "center",
        margin: 5,
    },
    input: {
        margin: 15,
        height: 50,
        width: 125,
        textAlign: "center",
        borderColor: '#7a42f4',
        borderWidth: 2,
    },
    purpleButton: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
    },
    buttonText:{
        color: 'white',
        fontSize: 24,
    },
    locationText: {
        margin: 10,
        fontSize: 20,
    },
    smallText: {
        margin: 10,
        fontSize: 18,
    },
    distanceText: {
        marginTop: 10,
    },
    blueButton: {
        backgroundColor: 'blue',
        padding: 10,
        margin: 15,
    },
    blueButtonText: {
        color: 'white',
        fontSize: 24,
    },
    clearButton: {
        backgroundColor: 'white',
        borderColor: "blue",
        borderWidth: 2,
        padding: 10,
        margin: 5,
    },
    clearButtonText: {
        color: "blue",
        fontSize: 18,
    },
    smallButton: {
        backgroundColor: 'white',
        borderColor: "blue",
        borderWidth: 2,
        padding: 5,
    },
    smallButtonText: {
        color: "blue",
        fontSize: 20,
    },
    smallButtonContainer: {
        margin: 7,
    },
    letterButton: {
        padding: 5,
        color: "#30fff5"
    },
    disabledButton: {
        backgroundColor: '#77787a',
        padding: 10,
        margin: 15,
    }

});

export { styles }
