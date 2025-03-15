import fetchCaracters from "@/services/api";
import { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import { Image, Text, View , FlatList} from "react-native";
import { StyleSheet } from "react-native";


interface Personagem{
    id:number;
    name:string;
    imagens: [string]
}

export default function Home() {
    const router = useRouter();
    const [personagens,setPersonagens]= useState<Personagem[]>([])
    const [carregar,setCarregar] = useState(true)


    useEffect(() => {
        async function carregarPersonagens(){
            const dados = await fetchCaracters();
            setPersonagens(dados.characters);
        }
    })

    return(
        <View style={style.container}>
            <Text>Página de detalhes</Text>
            <FlatList 
             data={personagens}
             keyExtractor= {item => item.id.toString()}
             renderItem={({item})=> (
                <View style={style.card}>
                    <Image source={{uri:item.imagens[0]}} style={style.image}/>
                    <Text style={style.name}>{item.name}</Text>

                </View>
            )}
             >

             </FlatList>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",  
        backgroundColor: "#FFF",
        padding: 15
    },
    card: {
        backgroundColor: "#F4F4F4",
        padding: 10,
        marginVertical: 8,
        borderRadius: 10,
        alignItems: "center" 
    },
    image: {
        width: 100,
        height: 100, 
        borderRadius: 50,
        marginBottom: 5  
    },
    name: {
        fontSize: 10,
        fontWeight: "bold"  
    }
});
