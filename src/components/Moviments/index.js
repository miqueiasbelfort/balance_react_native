import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'

//Animation
import {MotiView, AnimatePresence, MotiText} from "moti"

const Moviments = ({data}) => {

    const [showValue, setShowValue] = useState(false)

  return (
    <TouchableOpacity style={styles.container} onPress={() => setShowValue(!showValue)}>
      <Text style={styles.date}>{data.date}</Text>
      <View style={styles.content}> 
        <Text style={styles.label}>{data.label}</Text>
        {showValue ? (
            <AnimatePresence exitBeforeEnter>
                <MotiText 
                    style={data.type === 1 ? styles.value : styles.expeses}
                    from={{
                        translateX: 100
                    }}
                    animate={{
                        translateX: 0
                    }}
                    transition={{
                        type: "spring",
                        duration: 300
                    }}
                >
                    {data.type === 1 ? `R$ ${data.value}` : `R$ -${data.value}`}
                </MotiText>
            </AnimatePresence>
        ) : (
            <AnimatePresence exitBeforeEnter>
                <MotiText 
                    style={styles.skeleton}
                    from={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{type: "timing"}}
                ></MotiText>
            </AnimatePresence>
        )}
      </View>
    </TouchableOpacity>
  )
}

export default Moviments

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
        marginBottom: 24,
        borderBottomWidth: 0.5,
        borderBottomColor: "#dadada"
    },
    content: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 2,
        marginBottom: 8,
        paddingLeft: 10,
        paddingRight: 10,
        width: "80%",
    },
    date: {
        color: "#dadada",
        fontWeight: "bold"
    },
    label: {
        fontWeight: "bold",
        fontSize: 16,
    },
    value: {
        fontSize: 16,
        color: "#2ace72",
        fontWeight: "bold"
    },
    expeses: {
        fontSize: 16,
        color: "#e74c3c",
        fontWeight: "bold"
    },
    skeleton: {
        marginTop: 6,
        width: 80,
        height: 10,
        backgroundColor: "#dadada",
        borderRadius: 8,
    }
})