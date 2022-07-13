import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

//Animation
import {MotiView} from "moti"

const Balance = ({balance, expenses}) => {
  return (
    <MotiView 
      style={styles.container}
      from={{
        rotateX: "-100deg",
        opacity: 0
      }}
      animate={{
        rotateX: "0deg",
        opacity: 1,
      }}
      transition={{
        type: "timing",
        delay: 300,
        duration: 900
      }}
    >

      <View style={styles.item}>
        <Text style={styles.itemTitle}>Saldo</Text>
        <View style={styles.content}>
            <Text style={styles.currenceSymbol}>R$</Text>
            <Text style={styles.balance}>{balance}</Text>
        </View>
      </View>

      <View style={styles.item}>
        <Text style={styles.itemTitle}>Gastos</Text>
        <View style={styles.content}>
            <Text style={styles.currenceSymbol}>R$</Text>
            <Text style={styles.expenses}>{expenses}</Text>
        </View>
      </View>

    </MotiView>
  )
}

export default Balance

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "90%",
        paddingStart: 18,
        paddingEnd: 18,
        marginTop: -24,
        marginStart: 14,
        marginEnd: 14,
        borderRadius: 4,
        paddingTop: 22,
        paddingBottom: 22,
        zIndex: 99,
    },
    itemTitle: {
        fontSize: 20,
        color: "#dadada",
    },
    content: {
        flexDirection: "row",
        alignItems: "center",
    },
    currenceSymbol: {
        color: "#dadada",
        marginRight: 6,
    },
    balance: {
        fontSize: 22,
        color: "#2ecc71",
    },
    expenses: {
        fontSize: 22,
        color: "#e74c3c",
    }
})