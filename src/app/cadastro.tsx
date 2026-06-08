import { router } from "expo-router"
import { addDoc, collection } from "firebase/firestore"
import { useEffect, useState } from "react"
import { Button, StyleSheet, Text, TextInput, View } from "react-native"
import { auth, db } from "../firebase/firebaseConfig"



export default function Cadastro(){


    const [cargo, setCargo] = useState('')
    const [empresa,setEmpresa] = useState('')
    const [salario, setSalario] = useState('')



    useEffect(()=>{
        const unsubcribe = auth.onAuthStateChanged((user)=>{
            if(!user){
                router.replace("/login")
            }
        })

        return unsubcribe;
    },[])

    async function salvarVaga() {
        await addDoc(
            collection(db,"vagas" ),
            {
                cargo,
                empresa,
                salario
            }
        )

        alert("Vaga cadastrada!")
    }


    return(
        <View>
            <Text>Cadastro de Vagas</Text>

            <TextInput 
            style={styles.input}
            value={cargo}
            onChangeText={setCargo}
            placeholder="Digite o cargo..."
            />

            <TextInput 
            style={styles.input}
            value={empresa}
            onChangeText={setEmpresa}
            placeholder="Digite a empresa..."
            />

            <TextInput 
            style={styles.input}
            value={salario}
            onChangeText={setSalario}
            placeholder="Digite o salario..."
            />

            <Button 
            title="Salvar"
            onPress={salvarVaga}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        borderWidth:1,
        padding:10,
        margin:5
    }
})