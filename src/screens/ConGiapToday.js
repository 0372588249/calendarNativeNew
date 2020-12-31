import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity, } from 'react-native';
import asset from '../asset';

const ListConGiap =[
    {
        id:1,
        name:'Bach Duong',
        image:asset.iconZodiac.bachduong,
        time:'21/3 - 19/04',
        content:`hom nay dep troi 
        di choi thoi 
        di choi thoi
        di choi thoi 
        di choi thoi 
        di choi thoi 
        di choi thoi
        di choi thoi 
        di choi thoi 
        di choi thoi 
        di choi thoi
        di choi thoi 
        di choi thoi 
        di choi thoi 
        di choi thoi
        di choi thoi 
        di choi thoi
        di choi thoi 
        di choi thoi 
        di choi thoi 
        di choi thoi`

    },
    {
        id:2,
        name:'Kim Nguu',
        image:asset.iconZodiac.bachduong,
        time:'21/3 - 19/04',
        content:`hom nay dep troi 
                \ndi choi thoi 
                \ndi choi thoi
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi`
    },
    {
        id:3,
        name:'Song Tu',
        image:asset.iconZodiac.bachduong,
        time:'21/3 - 19/04',
        content:`hom nay dep troi 
                \ndi choi thoi 
                \ndi choi thoi
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi`
    },
    {
        id:4,
        name:'Cu Giai',
        image:asset.iconZodiac.bachduong,
        time:'21/3 - 19/04',
        content:`hom nay dep troi 
                \ndi choi thoi 
                \ndi choi thoi
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi`
    },
    {
        id:5,
        name:'Su tu',
        image:asset.iconZodiac.bachduong,
        time:'21/3 - 19/04',
        content:`hom nay dep troi 
                \ndi choi thoi 
                \ndi choi thoi
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi`
    },
    {
        id:6,
        name:'Xu nu',
        image:asset.iconZodiac.bachduong,
        time:'21/3 - 19/04',
        content:`hom nay dep troi 
                \ndi choi thoi 
                \ndi choi thoi
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi`
    },
    {
        id:7,
        name:'Thien Binh',
        image:asset.iconZodiac.bachduong,
        time:'21/3 - 19/04',
        content:`hom nay dep troi 
                \ndi choi thoi 
                \ndi choi thoi
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi`
    },
    {
        id:8,
        name:'Bach Duong',
        image:asset.iconZodiac.bachduong,
        time:'21/3 - 19/04',
        content:`hom nay dep troi 
                \ndi choi thoi 
                \ndi choi thoi
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi`
    },
    {
        id:9,
        name:'Kim Nguu',
        image:asset.iconZodiac.bachduong,
        time:'21/3 - 19/04',
        content:`hom nay dep troi 
                \ndi choi thoi 
                \ndi choi thoi
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi`
    },
    {
        id:10,
        name:'Song Tu',
        image:asset.iconZodiac.bachduong,
        time:'21/3 - 19/04',
        content:`hom nay dep troi 
                \ndi choi thoi 
                \ndi choi thoi
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi`
    },
    {
        id:11,
        name:'Cu Giai',
        image:asset.iconZodiac.bachduong,
        time:'21/3 - 19/04',
        content:`hom nay dep troi 
                \ndi choi thoi 
                \ndi choi thoi
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi`
    },
    {
        id:12,
        name:'Su tu',
        image:asset.iconZodiac.bachduong,
        time:'21/3 - 19/04',
        content:`hom nay dep troi 
                \ndi choi thoi 
                \ndi choi thoi
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi 
                \ndi choi thoi`
    },
];


export default class ConGiapToday extends React.Component {
    render() {
        let id = this.props.route.params;
        
        let item = ListConGiap.find(obj => obj.id == id);

        return (<View style = {styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                    <Image source={asset.icons.back} style={styles.backIconStyle} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Con giáp hôm nay</Text>
                <TouchableOpacity >
                    <Text style={styles.txt_edit}></Text>
                </TouchableOpacity>
            </View>
            <ScrollView 
            contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}
            >
               
                <Image style={styles.image}
                    source={item.image}
                />
                <Text style={styles.title}>
                    {item.name}
                </Text>
                <Text style={styles.content}>
                {item.content}
                </Text>
            </ScrollView>

        </View>

        );
    }
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      
    },
    header: { height:60, width:"100%", backgroundColor: 'white', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 10 },// eslint-disable-line
    headerTitle: { fontFamily: 'Avenir', color: 'black', fontSize: 20},
    backIconStyle: { width: 30, height: 30},
    txt_edit: {
        color: "black", fontSize: 18, fontWeight: 'bold'
    },
    drawContent:{
        height:'92%',
    },
    image:{
        width:120,
        height:120,
        borderRadius:100,
        borderWidth: 2,
        marginTop:'5%',
    },
    title:{
        fontSize:27,
        marginTop:'5%',
    },
    content:{
        backgroundColor:'white',
        width:'96%',
        marginTop:'5%',
        fontSize:22,
    },
});

