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

// import React, { Component } from "react";
// import { Text, View, StyleSheet, TextInput } from "react-native";

// export class index extends Component {
//     state = {
//         nama : ''
//     }
//     render() {
//         return (
//             <View style={style.area}>
//                 <TextInput
//                     style={style.textInput}
//                     placeholder="Masukan nama"
//                     keyboardType="default"
//                     onChangeText={(text) => this.setState({nama : text})}
//                 />
//                 <Text style={style.text}> Halooo nama saya : {this.state.nama} </Text>
//             </View>
//         );
//     }
// }

// const style = StyleSheet.create({
//     text: {
//         fontSize: 20,
//         textAlign: "center",
//     },
//     area: {
//         flexDirection: "column",
//         marginTop: 200,
//         backgroundColor: "#fff",
//         alignItems: "center",
//     },
//     textInput: {
//         borderWidth: 1,
//         width: "80%",
//     },
// });

// export default index;

// ------------ ScrollView Component

// import React, { Component } from "react";
// import { Text, View, StyleSheet, ScrollView } from "react-native";

// export class index extends Component {
//     state = {
//         jenisMakanan: [
//             { id: 1, nama: "Nasi Goreng" },
//             { id: 2, nama: "Sate Ayam" },
//             { id: 3, nama: "Gado-Gado" },
//             { id: 4, nama: "Soto Betawi" },
//             { id: 5, nama: "Bakso Malang" },
//             { id: 6, nama: "Martabak Telor" },
//             { id: 7, nama: "Kue Lapis" },
//             { id: 8, nama: "Es Teler" },
//             { id: 9, nama: "Rendang Padang" },
//             { id: 10, nama: "Krupuk Udang" },
//         ],
//     };
//     render() {
//         return (
//             <ScrollView>
//                 <View>
//                     {this.state.jenisMakanan.map((item) => (
//                         <Text style={styles.text} key={item.id}>
//                             {item.nama}
//                         </Text>
//                     ))}
//                 </View>
//             </ScrollView>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     text: {
//         fontSize: 50,
//         backgroundColor: "red",
//         marginBottom: 10,
//     },
// });

// export default index;

// ------------ Fetch API

// import React, { Component } from "react";
// import { Text, View, StyleSheet, Button } from "react-native";

// export class index extends Component {
//     state = {
//         nama: "",
//         email: "-",
//     };

//     findAccount = () => {
//         const url = "https://reqres.in/api/users";

//         fetch(url)
//             .then((data) => data.json())
//             .then((hasil) => {
//                 console.log(hasil.data[0].first_name);
//                 this.setState({ nama: hasil.data[0].first_name });
//                 this.setState({ email: hasil.data[0].email });
//             });
//     };
//     render() {
//         return (
//             <View>
//                 <Text style={style.text}>
//                     {" "}
//                     Halooo nama saya : {this.state.nama}{" "}
//                 </Text>{" "}
//                 <Text style={style.text}> Email saya : {this.state.email} </Text>{" "}
//                 <Button onPress={this.findAccount} title="Cari" />
//             </View>
//         );
//     }
// }

// const style = StyleSheet.create({
//     text: {
//         fontSize: 20,
//     },
// });

// export default index;

// --------------- react Navigation
// In App.js in a new project

// import * as React from "react";
// import { View, Text, Button } from "react-native";
// import {
//     NavigationContainer,
//     NavigationIndependentTree,
//     useNavigation,
//     createStaticNavigation,
// } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

// function HomeScreen() {
//     const navigation = useNavigation();
//     return (
//         <View
//             style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//             <Text>Home Screen</Text>
//             <Button
//                 onPress={() => navigation.navigate("Detail")}
//                 title="Goto Detail"
//             />
//         </View>
//     );
// }

// function DetailScreen() {
//     return (
//         <View
//             style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//             <Text>DetailScreen</Text>
//         </View>
//     );
// }

// const Stack = createNativeStackNavigator();

// function RootStack() {
//     return (
//         <Stack.Navigator>
//             <Stack.Screen name="Home" component={HomeScreen} />
//             <Stack.Screen name="Detail" component={DetailScreen} />
//         </Stack.Navigator>
//     );
// }

// export default function App() {
//     return (
//         <NavigationIndependentTree>
//             <NavigationContainer>
//                 <RootStack />
//             </NavigationContainer>
//         </NavigationIndependentTree>
//     );
// }

// -------------- mengirimkan data dari halaman sebelumnya

// import * as React from "react";
// import { View, Text, Button } from "react-native";
// import {
//     NavigationContainer,
//     NavigationIndependentTree,
//     useNavigation,
//     createStaticNavigation,
// } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

// function HomeScreen() {
//     const navigation = useNavigation();
//     return (
//         <View
//             style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//             <Text>Home Screen</Text>
//             <Button
//                 onPress={() =>
//                     navigation.navigate("Detail", {
//                         info1: "Saya dari halaman depan",
//                     })
//                 }
//                 title="Goto Detail"
//             />
//         </View>
//     );
// }

// function DetailScreen({ route }) {
//     return (
//         <View
//             style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//             <Text>DetailScreen</Text>
//             <Text>info1 : {route.params.info1}</Text>
//         </View>
//     );
// }

// const Stack = createNativeStackNavigator();

// function RootStack() {
//     return (
//         <Stack.Navigator>
//             <Stack.Screen name="Home" component={HomeScreen} />
//             <Stack.Screen name="Detail" component={DetailScreen} />
//         </Stack.Navigator>
//     );
// }

// export default function App() {
//     return (
//         <NavigationIndependentTree>
//             <NavigationContainer>
//                 <RootStack />
//             </NavigationContainer>
//         </NavigationIndependentTree>
//     );
// }

// --------------------- Component WebView

// import React from 'react'
// import { View, Text, Button } from "react-native";

// import { WebView } from "react-native-webview"

// export default function index() {
//   return (
//     <WebView
//         // source={{ uri: 'https://youtube.com' }}
//         source={{ html : ' <p>Hallo world</p>' }}
//     />
//   )
// }

// --------------- ActivityIndicator untuk menampilkan proses loading di react Native
// import React, { useState } from "react";
// import {
//     Text,
//     View,
//     ActivityIndicator,
//     StyleSheet,
//     Button,
// } from "react-native";

// const index = () => {
//     const [loading, setLoading] = useState(false);
//     const [titleButton, setTitleButton] = useState("Jalankan proses");

//     const handleButton = () => {
//         if (loading === false) {
//             setLoading(true);
//             setTitleButton("Stop Process")
//         } else {
//             setLoading(false);
//             setTitleButton("Jalankan Process");
//         }
//     };
//     return (
//         <View style={style.area}>
//             <ActivityIndicator
//                 animating={loading}
//                 color="#ff0000"
//                 size={"large"}
//             />
//             <Button onPress={handleButton} title={titleButton} />
//         </View>
//     );
// };

// const style = StyleSheet.create({
//     area: {
//         flex: 1,
//         alignItems: "center",
//         justifyContent: "center",
//     },
// });

// export default index;

// ------------ react native picker = select pada html

// import { Picker } from "@react-native-picker/picker";
// import React, { useState } from "react";
// import { View, StyleSheet, Text, Alert } from "react-native";
// import { blue } from "react-native-reanimated/lib/typescript/Colors";

// const index = () => {
//     const [value, setValue] = useState("");
//     const handlePicker = (label: string) => {
//         setValue(label);
//         alert("kamu memilih hari " + label);
//         // setTimeout(() => {
//         //     alert(`Kamu memilih hari ${label}`)
//         // }, 500)
//     };

//     return (
//         <View style={style.area}>
//             <Picker
//                 style={{ width: "100%" }}
//                 enabled
//                 selectedValue={value}
//                 onValueChange={(label, index) => handlePicker(label)}>
//                 <Picker.Item label="Senin" value="senin" />
//                 <Picker.Item label="Selasa" value="selasa" />
//                 <Picker.Item label="Rabu" value="rabu" />
//             </Picker>
//             <Text>{value}</Text>
//         </View>
//     );
// };

// const style = StyleSheet.create({
//     area: {
//         flex: 1,
//         alignItems: "center",
//         justifyContent: "center",
//     },
// });

// export default index;

// ---------------- Switch React Natives Elements

// import React, { useState } from 'react'
// import { Text, View, Switch, StyleSheet } from 'react-native'

// function index() {
//     const [nilaiSwitch, setNilaiSwitch] = useState(false)

//     const handleSwitch = (value : boolean) => {
//         setNilaiSwitch(value)
//     }
//   return (
//     <View style={style.area}>
//         <Text>Nilai : {nilaiSwitch ? 'Tombol aktif' : 'Tombol mati'}</Text>
//         <Switch
//             onValueChange={(value) => handleSwitch(value)}
//             value={nilaiSwitch}
//         />

//     </View>
//   )
// }

// const style = StyleSheet.create({
//     area : {
//         flex : 1,
//         alignItems : "center",
//         justifyContent : "center"
//     }
// })

// export default index

// --------------- Modal element

// import React, { useState } from "react";
// import { Text, View, StyleSheet, Modal, Button } from "react-native";

// const index = () => {
//     const [visibleModal, setVisibleModal] = useState(false)

//     return (
//         <View style={styles.area}>
//             <Text>testting modal</Text>
//             <Button onPress={() => setVisibleModal(true)} title="See Promo" />
//             <Modal
//                 visible = {visibleModal}
//                 animationType="slide"
//             >
//                 <View style={styles.modal}>
//                     <Text>Promo akhir tahun</Text>
//                     <Button title="Okey" onPress={() => setVisibleModal(false)}/>
//                 </View>
//             </Modal>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     area: {
//         flex: 1,
//         alignItems: "center",
//         justifyContent: "center",
//     },
//     modal: {
//         width: "70%",
//         height: "50%",
//         alignItems: "center",
//         justifyContent : "center",
//         margin : "auto",
//         backgroundColor: "#1111",
//         borderRadius : 10,
//         gap : 10
//     },
// });

// export default index;

// ---------------- Linking API

// import React from 'react'
// import { Button, Linking, Text, View, StyleSheet } from 'react-native'

// const index = () => {
//   return (
//     <View style={styles.area}>
//         <Button onPress={() => Linking.openURL("mailto:azmitheusos333@gmail.com")} title='Go To facebook'/>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   area : {
//     margin : "auto",
//     justifyContent : "center",
//   }
// })

// export default index

// ---------------- API Alert

// import React from "react";
// import { Text, TouchableOpacity, View, Alert, StyleSheet } from "react-native";

// const index = () => {
//     const alert1 = () => {
//         Alert.alert("ini judul alert", "ini adalah isi alert", [
//             {
//                 text: "Cancel",
//                 onPress: () => console.log("cancel press"),
//                 style: "cancel",
//             },
//         ]);
//     };
//     return (
//         <View style={styles.area}>
//             <TouchableOpacity style={{ backgroundColor : "#ff1111", padding : 10, borderRadius : 10  }} onPressOut={() => alert1()}>
//                 <Text>Tampilkan</Text>
//             </TouchableOpacity>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     area: {
//         margin: "auto",
//         justifyContent: "center",
//     },
// });

// export default index;

// ------------ API Toast untuk menampilan flash informasi

// import React from "react";
// import {
//     Text,
//     TouchableOpacity,
//     View,
//     StyleSheet,
//     ToastAndroid,
// } from "react-native";

// const index = () => {
//     const toast1 = () => {
//         ToastAndroid.show("Pesanan diproses", ToastAndroid.LONG);
//     };
//     return (
//         <View style={styles.area}>
//             <TouchableOpacity
//                 onPress={toast1}
//                 style={{
//                     backgroundColor: "#ff1",
//                     padding: 10,
//                     borderRadius: 10,
//                 }}>
//                 <Text>Pesan makanan</Text>
//             </TouchableOpacity>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     area: {
//         margin: "auto",
//     },
// });

// export default index;

// -------------- ImageBackground

// import React from "react";
// import { ImageBackground, Text, View } from "react-native";

// const index = () => {
//     const source = {
//         uri: "https://uinsgd.ac.id/wp-content/uploads/2024/01/2-Grind-Joe-Coffee.jpg",
//     };
//     return (
//         <View style={{ flex: 1, justifyContent: "center" }}>
//             <ImageBackground
//                 source={source}
//                 style={{ flex: 1, justifyContent: "center" }}>
//                 <Text>Login Page</Text>
//             </ImageBackground>
//         </View>
//     );
// };

// export default index;

// -------------------- Api BackHandler

import React, { useEffect } from "react";
import { Alert, BackHandler, Text, View } from "react-native";

const index = () => {
    useEffect(() => {
        const aksiTombol = () => {
            Alert.alert("Warning", "Yakin ingin kembali ?", [
                { text: "Batal", onPress: () => null, style: "cancel" },
                { text: "Ya", onPress: () => BackHandler.exitApp() },
            ]);
            return true;
        };

        const handlerBack = BackHandler.addEventListener(
            "hardwareBackPress",
            aksiTombol
        );
        return () => handlerBack.remove();
    });
    return (
        <View>
            <Text>hallo</Text>
        </View>
    );
};

export default index;
