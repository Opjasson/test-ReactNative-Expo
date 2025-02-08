// import { useState } from "react";
// import { Text, TouchableOpacity, View } from "react-native";
// import { TextInput } from "react-native-gesture-handler";

// export default function Index() {
//     const [count, setCount] = useState<number>(0);
//     const handlePress = () => {
//         setCount(1);
//     };
//     return (
//         <View
//             style={{
//                 flex: 1,
//                 justifyContent: "center",
//                 alignItems: "center",
//             }}>
//             <Text>Hallo Tuan Muda Jasson nurmagomedove</Text>

//             <TouchableOpacity
//                 onPress={handlePress}
//                 style={{ backgroundColor: "yellow", padding: 5 }}>
//                 <Text>Klik me</Text>
//             </TouchableOpacity>
//         </View>
//     );
// }

import React, { Component } from "react";
import { Image, Text, View } from "react-native";

export default class index extends Component {
    render() {
        return (
            <View>
                <Text style={{ fontSize : 50 }}>
                    {" "}
                    <Text style={{ fontWeight: "bold" }}>Selamat</Text> datang
                    <Text style={{ fontStyle: "italic" }}>
                        {" "}
                        ditutorial
                    </Text>{" "}
                    component{" "}
                </Text>

                <Image style={{ height : 100, width : 300 }} source={ require('../assets/images/jam.jpg') }></Image>
            </View>
        );
    }
}
