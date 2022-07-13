import { 
    StyleSheet, 
    Text, 
    View, 
    StatusBar,
    TouchableOpacity
} from 'react-native'

// Icons do Expo
import { Feather } from "@expo/vector-icons"

//Animation
import {MotiView, MotiText} from "moti"

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight * 2 : 64

export default function Header({name}) {
  return (
    <View style={styles.container}>
      <MotiView 
        style={styles.content}
        from={{
          traslateY: -150,
          opacity: 0,
        }}
        animate={{
          traslateY: 0,
          opacity: 1
        }}
        transition={{
          type: "timing",
          duration: 800,
          delay: 300,
        }}
      >
        <MotiText 
          style={styles.username}
          from={{
            translateX: -300,
          }}
          animate={{
            translateX: 0
          }}
          transition={{
            type: "timing",
            duration: 800,
            delay: 800,
          }}
        >
          {name}
        </MotiText>

        <TouchableOpacity 
            activeOpacity={0.9}
            style={styles.buttomUser}
        >
            <Feather 
                name='user'
                size={27}
                color="#fff"
            />
        </TouchableOpacity>
      </MotiView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#8200FF",
        width: "100%",
        paddingTop: statusBarHeight,
        flexDirection: "row",
        paddingStart: 16,
        paddingEnd: 16,
        paddingBottom: 44,
    },
    content: {
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    username: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
    },
    buttomUser: {
        width: 44,
        height: 44,
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 44 / 2,
    }
})