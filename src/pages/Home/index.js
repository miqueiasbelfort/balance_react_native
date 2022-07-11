import { StyleSheet, Text, View, FlatList } from 'react-native'

import Header from "../../components/Header"
import Balance from '../../components/Balance'
import Moviments from '../../components/Moviments'

const list = [
  {
    id: 1,
    label: "Boleto conta de luz",
    value: "185,90",
    date: "17/09/2022",
    type: 0 // despesas
  },
  {
    id: 2,
    label: "Pix Cliente X",
    value: "2.580,90",
    date: "18/04/2022",
    type: 1 // receita
  },
  {
    id: 3,
    label: "Salário",
    value: "7.250,90",
    date: "04/04/2022",
    type: 1 // receita
  }
]

export default function Home() {
  return (
    <View style={styles.container}>
        <Header
            name="Anna Paula"
        />
        <Balance
          balance={"15.420,65"}
          expenses={"-2.547,39"}
        />

        <Text style={styles.title}>Ultimas movimentações</Text>

        <FlatList
          style={styles.list}
          data={list}
          keyExtractor={(item) => String(item.id)}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => <Moviments data={item}/>}
        />

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center"
    },
    title: {
      fontSize: 18,
      fontWeight: "bold",
      marginLeft: 14,
      marginRight: 14,
      marginTop: 14,
    },
    list: {
      marginTop: 20,
      marginStart: 14,
      marginEnd: 14,
    }
})