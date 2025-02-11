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
import {
    Button,
    Image,
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
} from "react-native";

// const handleButton = () => {
//     alert("Hallooo");
// };
// export default class index extends Component {
//     render() {
//         return (
//             <View>
//                 <Text style={style.tulisan}>
//                     {" "}
//                     <Text style={style.tulisanTebal}>Selamat</Text> datang
//                     <Text style={style.tulisanMiring}>
//                         {" "}
//                         ditutorial
//                     </Text>{" "}
//                     component{" "}
//                 </Text>

//                 <Image
//                     style={{ height: 100, width: 300 }}
//                     source={require("../assets/images/jam.jpg")}></Image>
//                 <Button title="Colekk akuu" onPress={handleButton} />
//                 <TouchableOpacity><Text>Klik akuu</Text></TouchableOpacity>
//             </View>
//         );
//     }
// }

// const style = StyleSheet.create({
//     tulisan: {
//         fontSize: 50,
//     },
//     tulisanTebal: {
//         fontWeight: "bold",
//     },
//     tulisanMiring: {
//         fontStyle: "italic",
//     },
// });

// ----------------- Flex box

export default class index extends Component {
    render() {
        return (
            <View style={style.area}>
                <View style={style.kotakMerah}></View>
                <View style={style.kotakHijau}></View>
                <View style={style.kotakBiru}></View>
            </View>
        );
    }
}

const style = StyleSheet.create({
    area: {
        flexDirection : 'row'
    },
    kotakMerah: {
        width: 100,
        height: 100,
        backgroundColor: "red",
    },
    kotakHijau: {
        width: 100,
        height: 100,
        backgroundColor: "green",
    },
    kotakBiru: {
        width: 100,
        height: 100,
        backgroundColor: "blue",
    },
});
