import { useRouter } from "expo-router";
import { Button,Text,View } from "react-native";

export default function home(){
    const router = useRouter();

    return(
        <View>
            <Text> Página Home</Text>
            <Button
                title= "Ver detalhes"
                onPress={() => router.push('/details')}>
            </Button>
        </View>
    )
}