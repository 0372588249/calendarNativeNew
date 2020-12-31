import React from 'react';
import { SafeAreaView, View, StyleSheet, Image, Text, Linking, } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem, } from '@react-navigation/drawer';
import { GetWeather } from '../api';
import moment from 'moment';
import DataInfoManager from '../DataManager/DataInfoManager';
const dataInfoManager = DataInfoManager.getDataInfoManagerInstance();

export default class CustomDrawerContentComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            uriWeather:"",
            descriptions:"",
            dataWeather:{},
            profile:{},
            temperature:"",
            is_day:"",
        }
    }
    componentDidMount(){
        dataInfoManager.addObserver(this);
        var userInfo = dataInfoManager.getDataInfo()
        this.setState({profile:userInfo})
        GetWeather(userInfo.address,data=>{
            this.setState({dataWeather : data.current})
            this.setState({uriWeather : data.current.weather_icons[0]})
            this.setState({descriptions : data.current.weather_descriptions[0]})
            this.setState({temperature : data.current.temperature})
            this.setState({is_day : data.current.is_day})
        });
    }
    render() {
        const { uriWeather, descriptions,profile,temperature,is_day} = this.state;
        const dateTime = moment().format("DD-MM-YYYY")
        const dateTimeDob = moment(profile.dob).format("DD-MM-YYYY")
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.inforUser}>
                        <Image
                            style={[styles.drawImage]}
                            source={require('../../assets/images/image-analysis.png')}
                        />
                        <View style={styles.txtInfor}>
                            <Text style={styles.txtDetailInfor}>
                                {profile.full_name}
                            </Text>
                            <Text style={styles.txtDetailInfor}>
                            {dateTimeDob}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.headerWeather}>
                        <View style={styles.drawLine}/>
                        <Text style={styles.txtWeatherHeader}>
                        {profile.address} {dateTime}
                        </Text>
                        <View style={styles.drawLine}/>
                    </View>
                    <View style={styles.weatherDescription}>
                        <View style={styles.weatherFeeling}>
                            <Image 
                                style={styles.weatherIcon}
                                source={{uri:uriWeather}}
                            />
                            <Text style={styles.txtDetailFeeling}>
                            {descriptions}
                            </Text>
                        </View>
                        <Text style={styles.txtTemperature}>
                            Nhiệt độ trung bình: {temperature}°C
                        </Text>
                        <Text style={styles.txtTemperature}>
                        {is_day == "yes" ? "Buổi sáng":"Buổi tối"}
                        </Text>
                    </View>
                </View>



                <DrawerContentScrollView 
                    {...this.props}
                    style={styles.drawListItem}    
                >
                    <DrawerItemList {...this.props} />
                    <DrawerItem
                        label="FaceBook"
                        onPress={() => {
                            Linking.openURL('http://facebook.com/');
                        }}
                    />
                </DrawerContentScrollView>


            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    header: {
        width: '100%',
        height: 230,
        backgroundColor: 'white',
        borderColor:'#ebe8e6',
        borderWidth:2,
    },
    inforUser:{
        flexDirection:'row',
        marginTop:'3%',
        marginLeft:'5%',
    },
    drawImage: {
        width: 100,
        height: 100,
        borderRadius: 80,
    },
    txtInfor:{
        marginLeft:'5%',
        width:'50%',
        justifyContent:'center',
        marginBottom:'5%',
    },
    txtDetailInfor:{
        textAlign:'center',
        color:'blue',
        marginTop:'5%',
        fontSize:15,
    },
    txtWeatherHeader:{
        width:'50%',
        textAlign:'center',
    },
    weatherDescription:{
        marginTop:'3%',
        marginLeft:'5%',
        width:'90%',
        height:'35%',
        justifyContent:'center',
    },
    weatherFeeling:{
        flexDirection:'row',
        alignItems:'center',
    },
    weatherIcon:{
        borderRadius:15,
        width:30,
        height:30,
    },
    txtDetailFeeling:{
        marginLeft:10,
        width:'75%',
    },
    txtTemperature:{
    },
    headerWeather:{
        flexDirection:'row',
    },
    drawLine:{
        width:'25%',
        marginTop:'3%',
        marginBottom:'3%',
        height:2,
        backgroundColor:'#ebe8e6',
    },
    drawListItem:{
        width:'100%',
    },


    sideMenuProfileIcon: {
        resizeMode: 'center',
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        alignSelf: 'center',
    },
    iconStyle: {
        width: 15,
        height: 15,
        marginHorizontal: 5,
        borderRadius:10,
    },
    customItem: {
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
    },
});