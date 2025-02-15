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

// import React, { Component } from "react";
// import {
//     Button,
//     Image,
//     Text,
//     View,
//     TouchableOpacity,
//     StyleSheet,
// } from "react-native";

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

// export default class index extends Component {
//     render() {
//         return (
//             <View style={style.area}>
//                 <View style={style.kotakMerah}></View>
//                 <View style={style.kotakHijau}></View>
//                 <View style={style.kotakBiru}></View>
//             </View>
//         );
//     }
// }

// const style = StyleSheet.create({
//     area: {
//         flexDirection : 'column',
//         justifyContent : 'space-between',
//         flex : 1,
//         alignItems : 'flex-start'

//     },
//     kotakMerah: {
//         width: 100,
//         height: 100,
//         backgroundColor: "red",
//     },
//     kotakHijau: {
//         width: 100,
//         height: 100,
//         backgroundColor: "green",
//     },
//     kotakBiru: {
//         width: 100,
//         height: 100,
//         backgroundColor: "blue",
//     },
// });

// --------------- Menampilkan list dan penggunaan state
// import React, { Component } from 'react'
// import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

// export class index extends Component {
//     state = {
//         namaHewan : [
//             {id : 0, nama : 'Kucing'},
//             {id : 1, nama : 'Ikan'},
//             {id : 2, nama : 'Kambing'},
//             {id : 3, nama : 'Gajah'}
//         ]
//     }

//     klik = (namaHewan : string) => {
//         alert(`Kamu pilih ${namaHewan}`)
//     }
//   render() {
//     return (
//       <View>
//         {
//             this.state.namaHewan.map((item, index) => (
//                 <TouchableOpacity onPress={() => this.klik(item.nama)}>
//                     <Text style= {style.textNamaHewan} key={index}>{item.nama}</Text>
//                 </TouchableOpacity>
//             ))
//         }
//       </View>
//     )
//   }
// }

// const style = StyleSheet.create({
//     textNamaHewan : {
//         fontSize : 30,
//         fontWeight : 'bold',
//         backgroundColor : 'green',
//         marginBottom : 10,
//         color : 'white'
//     }
// })

// export default index

// ------------------ Cara menangani state pada React Native

// import React, { Component } from "react";
// import { Text, View, StyleSheet, Button } from "react-native";

// export class index extends Component {
//     state = {
//         nama: "azmi",
//         kelas: "Sistem Informasi Visual",
//     };

//     handleButton = () => {
//         this.setState({nama : "jasson"})
//     }
//     render() {
//         return (
//             <View style={style.viewStyle}>
//                 <Text style={style.textStyle}>
//                     {" "}
//                     Hallo nama saya : {this.state.nama}{" "}
//                 </Text>
//                 <Text style={style.textStyle}>
//                     {" "}
//                     Saya kelas : {this.state.kelas}{" "}
//                 </Text>
//                 <Button onPress={this.handleButton} title="Ubah" />
//             </View>
//         );
//     }
// }

// const style = StyleSheet.create({
//     textStyle: {
//         color: "red",
//         fontSize: 20,
//         fontWeight: "bold",
//     },
//     viewStyle: {
//         flexDirection: "column",
//         backgroundColor: "green",
//         justifyContent: "center",
//         flex: 1,
//         alignItems: "center",
//     },

// });

// export default index;

// -------------------- state pada functional komponen

// import { Text, View, StyleSheet, Button } from "react-native";
// import React, { useState } from "react";

// export default function index() {
//     const [nama, setNama] = useState("jasson");

//     const handleButton = () => {
//         setNama("azmi");
//     };
//     return (
//         <View style={style.viewStyle}>
//             <Text style={style.textStyle}>{nama}</Text>
//             <Button onPress={handleButton} title="ubah" />
//         </View>
//     );
// }

// const style = StyleSheet.create({
//     textStyle: {
//         color: "red",
//         fontSize: 20,
//         fontWeight: "bold",
//     },
//     viewStyle: {
//         flexDirection: "column",
//         backgroundColor: "green",
//         justifyContent: "center",
//         flex: 1,
//         alignItems: "center",
//     },
// });

// import React, { Component } from 'react'
// import { Text, View, StyleSheet } from 'react-native'

// interface Dataprops {
//     nama : string,
//     alamat : string,
//     usia : number
// }

// export class Data extends Component<Dataprops> {
//   render() {
//     return (
//       <View style={style.area}>
//         <Text style={style.text}> Nama : {this.props.nama} </Text>
//         <Text style={style.text}> Alamat : {this.props.alamat} </Text>
//         <Text style={style.text}> Usia : {this.props.usia} </Text>
//       </View>
//     )
//   }
// }

// const style = StyleSheet.create({
//     area: {
//         height: 90,
//         backgroundColor: "gray",
//     },
//     text: {
//         fontSize: 20,
//         fontWeight: "bold",
//     },
//     textInti: {
//         fontSize: 20,
//         fontWeight: "bold",
//         color: "white",
//         textAlign : 'center'
//     },
//     view: {
//         height: 90,
//         backgroundColor: "blue",
//     },
// });

// export class index extends Component {
//   render() {
//     return (
//       <View style={style.view}>
//         <Text style={style.textInti}>Data diri mahasiswa</Text>
//         <Data nama='jasson' alamat='mejasem' usia={21} />
//         <Data nama='robi' alamat='mejasem' usia={21} />
//         <Data nama='toni' alamat='mejasem' usia={21} />
//       </View>
//     )
//   }
// }

// export default index

// ------------ TextInput

import React, { Component } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";

export class index extends Component {
    state = {
        nama : ''
    }
    render() {
        return (
            <View style={style.area}>
                <TextInput
                    style={style.textInput}
                    placeholder="Masukan nama"
                    keyboardType="default"
                    onChangeText={(text) => this.setState({nama : text})}
                />
                <Text style={style.text}> Halooo nama saya : {this.state.nama} </Text>
            </View>
        );
    }
}

const style = StyleSheet.create({
    text: {
        fontSize: 20,
        textAlign: "center",
    },
    area: {
        flexDirection: "column",
        marginTop: 200,
        backgroundColor: "#fff",
        alignItems: "center",
    },
    textInput: {
        borderWidth: 1,
        width: "80%",
    },
});

export default index;
