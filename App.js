import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, VirtualizedList, Image} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.cardWrapper}>
        <View style={styles.header}>
          <Image
            style={styles.image}
            source={{
              uri: "https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/279361598_679220459954957_7421755612298684233_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=q20beGuqnpMAX-NeVVm&_nc_ht=scontent.fsgn2-3.fna&oh=00_AfDBn0VDkd7E4F2ohMSbA9oEiGkXHIIZ4V9PpTp0idLp8g&oe=6437C51C",
            }}
          ></Image>

          <View style={styles.inforWrapper}>
            <Text style={styles.texts}>Trần Đình Tâm</Text>
            <Text style={styles.texts}>Student</Text>
          </View>
        </View>

        <View style={styles.footer}>
            <Text style={styles.texts}>Phone: 0971669507</Text>
            <Text style={styles.texts}>Email: 21522574@gm.uit.edu.vn</Text>
          </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fda172",
    alignItems: "center",
    justifyContent: "center",
  },

  cardWrapper: {
    backgroundColor: "#be5504",
    height: 200,
    justifyContent: "space-around",
    padding: 20,
    borderRadius: 10
  },

  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center"
  },

  inforWrapper: {
    marginRight: 15
  },

  image : {
    height: 80,
    width: 80,
    borderRadius: 50
  },

  texts: {
    color: '#ffffff',
    marginTop: 5,
    fontSize: 16
  }
});
