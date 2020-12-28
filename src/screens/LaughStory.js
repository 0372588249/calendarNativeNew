import React from 'react';
import { StyleSheet, View, Text, Image, FlatList, TouchableOpacity, } from 'react-native';
import { Dimensions } from 'react-native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import ContainerLaughStorys from './ContainerLaughStory';
import asset from '../asset';

const Stack = createStackNavigator();

const widthItemZodiac = (Dimensions.get('window').width * 30) / 100;
const HeightItemZodiac = (Dimensions.get('window').width * 35) / 100;
const WidthImage = (widthItemZodiac * 70) / 100;
const HeightImage = (widthItemZodiac * 70) / 100;

const ListZodiac = [
    {
        title: "A",
        NoiDung: [{
            title: "Ai lay",
            container:`ngooiodsdjsfhioahfiowiogfngooiodsdjsfhioahfiowiogfngooiodsdjsfhioahfiowiogfngooiodsdjsfhioahfiowiogf
            ngooiodsdjsfhioahfiowiogf
            ngooiodsdjsfhioahfiowiogf
            ngooiodsdjsfhioahfiowiogf
            ngooiodsdjsfhioahfiowiogf
            ngooiodsdjsfhioahfiowiogf`
        }, {
            title: "An vung gap nhau",
            container: `nngooiodsdjsfhioahfiowiogf
            ngooiodsdjsfhioahfiowiogf
            ngooiodsdjsfhioahfiowiogf
            ngooiodsdjsfhioahfiowiogf
            ngooiodsdjsfhioahfiowiogf
            ngooiodsdjsfhioahfiowiogf`
        }]
    },
    {
        title: "B",
        NoiDung: [{
            title: "Ai lay",
            container: "ngooiodsdjsfhioahfiowiogf"
        }, {
            title: "An vung gap nhau",
            container: "ngooiodsdjsfhioahfiowiogf"
        }]
    },
    {
        title: "C",
        NoiDung: [{
            title: "Ai lay",
            container: "ngooiodsdjsfhioahfiowiogf"
        }, {
            title: "An vung gap nhau",
            container: "ngooiodsdjsfhioahfiowiogf"
        }]
    },
    {
        title: "D",
        NoiDung: [{
            title: "Ai lay",
            container: "ngooiodsdjsfhioahfiowiogf"
        }, {
            title: "An vung gap nhau1",
            container: "ngooiodsdjsfhioahfiowiogf"
        }]
    },
];

class ZodiacComponent extends React.Component {
    render() {
        return (
            <View style={styles.zodiacComponent}>
                <View style={styles.backGroundZodiacName}>
                <Text style={styles.zodiacName}>
                    {this.props.item.title}
                </Text>
            </View>
                <FlatList style={styles.containerScrollZodiac}
                    data={this.props.item.NoiDung}
                    renderItem={({ item }) => {
                        return (<View><View style={styles.brLaugh}>
                        </View>
                        <TouchableOpacity style={styles.itemLaugh} onPress={()=>{
                            if(this.props.navigation != null)
                            this.props.navigation.navigate('ContainerLaughStorys',{
                                data: item,
                            });
                        }}>
                            <Text style={styles.laughTitle}>
                                {item.title}
                            </Text>
                            <Text numberOfLines={2} width={100} style={styles.laughNoiDung}>
                                {item.container}
                            </Text>
                        </TouchableOpacity>
                        </View>
                        )
                    }}
                ></FlatList>
            </View>
        );
    }
}


class ZodiacScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                    <Image source={asset.icons.menu} style={styles.backIconStyle} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Truyện Cười</Text>
                <TouchableOpacity>
                    <Text style={styles.txt_edit}></Text>
                </TouchableOpacity>
            </View>
                <View style={styles.drawContent}>
                    <FlatList style={styles.containerScrollZodiac}
                        data={ListZodiac}
                        renderItem={({ item }) => {
                            return <ZodiacComponent item={item} navigation={this.props.navigation} />;
                        }}
                        keyExtractor={item => item.id}
                    >
                    </FlatList>
                </View>
            </View>
        );
    }
}
export default class LaughStory extends React.Component {
    render() {
        return (
            <Stack.Navigator
                screenOptions={
                    {
                        gestureEnabled: true,
                        gestureDirection: 'horizontal',
                        ...TransitionPresets.ModalSlideFromBottomIOS
                    }
                }
            >
                <Stack.Screen name="ZodiacScreen" component={ZodiacScreen}
                    options={{ headerShown:false}} />
                <Stack.Screen name="ContainerLaughStorys" component={ContainerLaughStorys}
                    options={{ headerShown:false}} />
            </Stack.Navigator>
        );
    }
}

const styles = StyleSheet.create({
    headerNavigation: {
        color: 'red',
    },
    header: { flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 10 },// eslint-disable-line
    headerTitle: { fontFamily: 'Avenir', color: 'black', fontSize: 20,marginLeft:-60 },
    backIconStyle: { width: 70, height: 70, marginLeft:-10 },
    txt_edit: {
        color: "black", fontSize: 18, fontWeight: 'bold'
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    drawContent: {
        height: '92%',
        alignItems: 'center',
    },
    title: {
        fontSize: 28,
        height: '6.2%',
        fontFamily: "Wellside",
    },
    containerScrollZodiac: {
        width: '100%',
        height: '93.8%',

    },
    rowItem: {
        flex: 1,
        justifyContent: 'space-around',
    },
    zodiacComponent: {
        width:"100%",
        height: 250,
    },
    zodiacImage: {
        width: WidthImage,
        height: HeightImage,
        borderRadius: 50,
        borderColor: 'silver',
        borderWidth: 2,
    },
    backGroundZodiacName:{
        width:"100%",
        backgroundColor:"#e5e5e5",
    },
    brLaugh:{
        height:1,
        width:"100%",
        backgroundColor:"#EEEEEE",
    },
    itemLaugh:{
        width:"96%",
    },
    zodiacName: {
        color: 'gray',
        fontWeight:'bold',
        fontSize: 24,
        marginLeft:15,
        marginTop:2,
        marginBottom:2,
    },
    laughTitle: {
        color: '#0877c2',
        fontSize: 24,
        marginLeft:15,
        marginTop:10,
        marginBottom:5,
    },
    laughNoiDung: {
        lineHeight: 22,
        fontSize: 16,
        marginLeft:15,
        marginBottom:10,
    },

});
