import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity, 
    ActivityIndicator, Dimensions } from 'react-native';
import asset from '../asset';

const ListZodiac = [
    {
        id: 1,
        image: asset.iconZodiac.bachduong,
    },
    {
        id: 2,
        image: asset.iconZodiac.kimnguu,
    },
    {
        id: 3,
        image: asset.iconZodiac.songtu,
    },
    {
        id: 4,
        image: asset.iconZodiac.cugiai,
    },
    {
        id: 5,
        image: asset.iconZodiac.sutu,
    },
    {
        id: 6,
        image: asset.iconZodiac.xunu,
    },
    {
        id: 7,
        image: asset.iconZodiac.thienbinh,
    },
    {
        id: 8,
        image: asset.iconZodiac.bocap,
    },
    {
        id: 9,
        image: asset.iconZodiac.nhanma,
    },
    {
        id: 10,
        image: asset.iconZodiac.maket,
    },
    {
        id: 11,
        image: asset.iconZodiac.baobinh,
    },
    {
        id: 12,
        image: asset.iconZodiac.songngu,
    },
];

class ZodiacToday extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dataZodiac: '',
            isLoading: false,
            index: this.props.route.params
        }
    }

    componentDidMount() {

        const { index } = this.state;
        console.log('index', index)
        var arrZodiac = [];
        var Url = '';
        var currentdate = new Date();
        let dayStr = currentdate.getDate() < 10 ? `0${currentdate.getDate()}` : `${currentdate.getDate()}`
        let monthStr = currentdate.getMonth() + 1 < 10 ? `0${currentdate.getMonth() + 1}` : `${currentdate.getMonth() + 1}`
        let dateStr = `${monthStr}-${dayStr}-${currentdate.getFullYear()}`
        let dateStr2 = `${dayStr}/${monthStr}/${currentdate.getFullYear()}`

        Url = 'https://api.nhatky.ml/v1/zodiacdaily',
            arrZodiac = [{ name: 'Bạch Dương', code: 1, query: 'CungBachDuong' }, { name: 'Kim Ngưu', code: 2, query: 'CungKimNguu' }, { name: 'Song Tử', code: 3, query: 'CungSongTu' },
            { name: 'Cự Giải', code: 4, query: 'CungCuGiai' }, { name: 'Sư Tử', code: 5, query: 'CungSuTu' }, { name: 'Xử Nữ', code: 6, query: 'CungXuNu' },
            { name: 'Thiên Bình', code: 7, query: 'CungThienBinh' }, { name: 'Bọ Cạp', code: 8, query: 'CungBoCap' }, { name: 'Nhân Mã', code: 9, query: 'CungNhanMa' },
            { name: 'Ma Kết', code: 10, query: 'CungMaKet' }, { name: 'Bảo Bình', code: 11, query: 'CungBaoBinh' }, { name: 'Song Ngư', code: 12, query: 'CungSongNgu' }];
        this.setState({ isLoading: true })
        fetch(`${Url}/${dateStr}/${arrZodiac[index.id-1].query}/`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        }).then((response) => response.json())
            .then((responseJson) => {
                this.setState({ isLoading: false })
                console.log('responseJson', responseJson)

                if (responseJson.data !== undefined) {
                    var find = '♥';
                    var re = new RegExp(find, 'g');
                    // console.log(`${responseJson.data.zodiacdailycontent.replace(re, '❤')}`)
                    let tmp = `${responseJson.data.zodiacdailycontent.replace(re, '❤')}`
                    tmp = tmp.replace('❤ Tâm trạng:', '');
                    tmp = tmp.replace('Isabelle Fortes | ', '');
                    tmp = tmp.replace(dateStr2, '');
                    tmp = tmp.replace(dateStr2, '');
                    this.setState({ dataZodiac: tmp })
                }
            })
            .catch((error) => {
                //console.log(error);
            });
    }
    render() {
        console.log(dataZodiac)
        let { id } = this.props.route.params;

        let item = ListZodiac.find(obj => obj.id == id);
        const { dataZodiac, isLoading, index } = this.state;
        console.log(dataZodiac === '')
        var arrZodiac = [];
        let titleDay = ''
        var currentdate = new Date();
        let dayStr = currentdate.getDate() < 10 ? `0${currentdate.getDate()}` : `${currentdate.getDate()}`
        let monthStr = currentdate.getMonth() + 1 < 10 ? `0${currentdate.getMonth() + 1}` : `${currentdate.getMonth() + 1}`
        titleDay = `Hôm nay, ngày ${dayStr} tháng ${monthStr} năm ${currentdate.getFullYear()}`
        arrZodiac = [{ name: 'Bạch Dương', code: 1, query: 'CungBachDuong' }, { name: 'Kim Ngưu', code: 2, query: 'CungKimNguu' }, { name: 'Song Tử', code: 3, query: 'CungSongTu' },
            { name: 'Cự Giải', code: 4, query: 'CungCuGiai' }, { name: 'Sư Tử', code: 5, query: 'CungSuTu' }, { name: 'Xử Nữ', code: 6, query: 'CungXuNu' },
            { name: 'Thiên Bình', code: 7, query: 'CungThienBinh' }, { name: 'Bọ Cạp', code: 8, query: 'CungBoCap' }, { name: 'Nhân Mã', code: 9, query: 'CungNhanMa' },
            { name: 'Ma Kết', code: 10, query: 'CungMaKet' }, { name: 'Bảo Bình', code: 11, query: 'CungBaoBinh' }, { name: 'Song Ngư', code: 12, query: 'CungSongNgu' }];
        

        return (<View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                    <Image source={asset.icons.back} style={styles.backIconStyle} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Cung hoàng đạo hôm nay</Text>
                <TouchableOpacity >
                    <Text style={styles.txt_edit}></Text>
                </TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={{ marginTop: 20, alignItems: 'center', justifyContent: 'center', }}>
                    <Image style={{ width: 90, height: 90 }} source={item.image} />
                </View>
                <Text style={{ fontFamily: 'BaseFutara', fontSize: 25, marginTop: 10, color: 'orange', textAlign: 'center' }}>{arrZodiac[index.id-1].name}</Text>
                <Text style={{ fontFamily: "BaseFutara", fontSize: 20, padding: 10, color: 'white', textAlign: 'center' }}>{titleDay}</Text>
                <View style={{ width: DEVICE_WIDTH - 30, alignItems: 'center', marginLeft: 10 }}>
                    {
                        isLoading ?
                            <ActivityIndicator size="large" color="#FFFFFF" style={{ marginTop: 50 }} />
                            :
                            <View style={{ width: DEVICE_WIDTH - 30 }}>
                                <Text style={{ fontFamily: "BaseFutara", fontSize: 20, color: 'white', textAlign: 'left' }}>
                                    {dataZodiac}
                                </Text>
                            </View>
                    }
                </View>
            </ScrollView>

        </View>

        );
    }
}
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#F8A6C4",
    },
    header: { height: 60, width: "100%", backgroundColor: 'white', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 10 },// eslint-disable-line
    headerTitle: { fontFamily: 'Avenir', color: 'black', fontSize: 20 },
    backIconStyle: { width: 30, height: 30 },
    txt_edit: {
        color: "black", fontSize: 18, fontWeight: 'bold'
    },
    drawContent: {
        height: '92%',
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 100,
        borderWidth: 2,
        marginTop: '5%',
    },
    title: {
        fontSize: 27,
        marginTop: '5%',
    },
    content: {
        backgroundColor: 'white',
        width: '96%',
        marginTop: '5%',
        fontSize: 22,
    },
    ModalBackground: {
        flex: 1
    },
    spinnerTextStyle: {
        color: '#FFFFFF',
        fontFamily: "BaseFutara",
        fontSize: 20,
    },
});

export default ZodiacToday;
