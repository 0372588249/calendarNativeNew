import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import asset from '../asset';


export default class ContainerLaughStory extends React.Component {
    render() {
        let { data } = this.props.route.params;
        return (
            <ScrollView style = {styles.container}
            contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}
            >
            <View style={styles.header}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                    <Image source={asset.icons.back} style={styles.backIconStyle} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>{data.title}</Text>
                <TouchableOpacity >
                    <Text style={styles.txt_edit}></Text>
                </TouchableOpacity>
            </View>
               
                <Text style={styles.content}>
                {data.container}
                </Text>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      
    },

    header: { height:60, width:"100%", backgroundColor: 'white', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 10 },// eslint-disable-line
    headerTitle: { fontFamily: 'Avenir', color: 'black', fontSize: 20, marginLeft:-30},
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


