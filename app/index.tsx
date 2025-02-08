import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
    const [count, setCount] = useState<number>(0);
    const handlePress = () => {
        setCount(1);
    };
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}>
            <Text>Hallo Tuan Muda Jasson nurmagomedove</Text>
            <Text>{count}</Text>

            <TouchableOpacity
                onPress={handlePress}
                style={{ backgroundColor: "yellow", padding: 5 }}>
                <Text>Klik me</Text>
            </TouchableOpacity>
        </View>
    );
}
