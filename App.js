import { View, Text } from 'react-native';
import { getFirestore } from "firebase/firestore";
import app from "./firestoreConfig"
import { collection, getDocs, addDoc } from "firebase/firestore";
import {useEffect, useState} from "react";

export default function App() {

    const [data, setData] = useState([])


  const db = getFirestore(app);

  useEffect(() => {
      getDocs(collection(db, "users")).then((querySnapshot) => {

          let tmp = []

          querySnapshot.forEach((doc) => {
              tmp = [...tmp, doc.data()];
          });

          setData(tmp)

      })


      try {
          const docRef = addDoc(collection(db, "users"), {
              first: "Ada",
              last: "Lovelace",
              born: 1815
          });
          console.log("Document written with ID: ", docRef.id);
      } catch (e) {
          console.error("Error adding document: ", e);
      }

  }, [])



  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Przykład</Text>
        {data.map((item,index) => (
            <Text key={index}>{item.name}</Text>
        ))}
    </View>
  );
}

