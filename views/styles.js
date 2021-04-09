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
        marginTop: 10,
        height: 200,
    },
    winnerContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
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
    buttons: {
        marginRight:40,
        marginLeft:40,
        marginTop:10,
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:'#1E6738',
        borderRadius:10,
        borderWidth: 1,
        borderColor: 'red'

    },
    listItem: {
        height:100,
        borderColor: "black",
        borderWidth: 1,
        margin: 5,
    },
    listText: {
        fontSize: 24,
    },
    instructions: {
        fontSize: 18,
        textAlign: "center",
        margin: 5,
    },

});

export { styles }
