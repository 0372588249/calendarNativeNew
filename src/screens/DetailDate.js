import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    ScrollView,
    Image,
    TouchableOpacity,
} from 'react-native';
import { GetListNote } from '../api';
import asset from '../asset';
import moment from 'moment';



class HeaderDetailDate extends React.Component {
    constructor(props) {
        super(props);
        if(this.props.navigation != null){
            this.navigation = this.props.navigation;
        }
    }

    render() {


        return (
            <TouchableOpacity style ={styles.buttonHeader}
                onPress={()=>{
                    if(this.navigation != null)
                        this.navigation.navigate('ListMonthScreen');
                }}
            >
                <Image
                    style={styles.imgButtonHeader}
                    source={require('../../assets/icon/down-arrow.png')}
                />
            </TouchableOpacity>
        );
    }
}


class DetailDate extends React.Component {
    constructor(props) {
        super(props);
        let { time } = this.props.route.params;
        this.time = time;
        this.state = {
            dataNote: []
        }
    }

    componentDidMount() {
        this.GetListNote();
    }
    GetListNote = () => {
        const { dataNote } = this.state;
        GetListNote((data) => {
            this.setState({ dataNote: data.data })
        })
    }
    getDay = () => {
        let d = this.time.day;
        let m = this.time.month - 1;
        let y = this.time.year;
        let dt = moment().year(y).month(m).date(d);
        let value = "";
        if (dt != null) {
            switch (dt.day()) {
                case 0: value = 'CHỦ NHẬT';
                    break;
                case 1: value = 'THỨ HAI';
                    break;
                case 2: value = 'THỨ BA';
                    break;
                case 3: value = 'THỨ TƯ';
                    break;
                case 4: value = 'THỨ NĂM';
                    break;
                case 5: value = 'THỨ SÁU';
                    break;
                case 6: value = 'THỨ BẢY';
                    break;
                default: value = "";
            }
        }
        return value;
    }
    getDate() {
        return this.time.day + ' Tháng ' + this.time.month + ', ' + this.time.year;
    }
    getLunarDay() {
        let d = this.time.day;
        let m = this.time.month - 1;
        let y = this.time.year;
        let dd = moment().year(y).month(m).date(d).add(1, 'days').lunar();
        let quy = '';
        if (dd.format('MM') < 4) {
            quy = 'X';
        }
        else if (dd.format('MM') < 7) {
            quy = 'H';
        }
        else if (dd.format('MM') < 10) {
            quy = 'T';
        }
        else {
            quy = 'Đ';
        }
        return dd.format('DD') + ' Tháng ' + dd.format('MM') + ' (' + quy + '), ' + this.getYearZodiac();
    }

    //

    UniversalToJD(D, M, Y) {
        let JD;
        if (Y > 1582 || (Y == 1582 && M > 10) || (Y == 1582 && M == 10 && D > 14)) {
            JD = 367 * Y - parseInt(7 * (Y + parseInt((M + 9) / 12)) / 4) - parseInt(3 * (parseInt((Y + (M - 9) / 7) / 100) + 1) / 4) + parseInt(275 * M / 9) + D + 1721028.5;
        } else {
            JD = 367 * Y - parseInt(7 * (Y + 5001 + parseInt((M - 9) / 7)) / 4) + parseInt(275 * M / 9) + D + 1729776.5;
        }
        return JD;
    }

    getYearZodiac = () => {
        let can = ["Tân", "Nhâm", "Quý", "Giáp", "Ất", "Bính", "Đinh", "Mậu", "Kỷ", "Canh"];
        let chi = ["Dậu", "Tuất", "Hợi", "Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi", "Thân"];

        let d = this.time.day;
        let m = this.time.month - 1;
        let y = this.time.year;
        let year = moment().year(y).month(m).date(d).lunar().add(1, 'days').format('YYYY');
        let canIndex = 0
        let chiIndex = 0;

        let mol = year % 10;
        switch (mol) {
            case 0: canIndex = 9; break;
            case 1: canIndex = 0; break;
            case 2: canIndex = 1; break;
            case 3: canIndex = 2; break;
            case 4: canIndex = 3; break;
            case 5: canIndex = 4; break;
            case 6: canIndex = 5; break;
            case 7: canIndex = 6; break;
            case 8: canIndex = 7; break;
            case 9: canIndex = 8; break;
        }
        mol = year % 12;//tinh chi
        switch (mol) {
            case 0: chiIndex = 11; break;
            case 1: chiIndex = 0; break;
            case 2: chiIndex = 1; break;
            case 3: chiIndex = 2; break;
            case 4: chiIndex = 3; break;
            case 5: chiIndex = 4; break;
            case 6: chiIndex = 5; break;
            case 7: chiIndex = 6; break;
            case 8: chiIndex = 7; break;
            case 9: chiIndex = 8; break;
            case 10: chiIndex = 9; break;
            case 11: chiIndex = 10; break;
        }
        return 'Năm ' + can[canIndex] + ' ' + chi[chiIndex];
    }
    getMonthZodiac = () => {
        let result = '';
        let d = this.time.day;
        let m = this.time.month - 1;
        let y = this.time.year;

        let month = moment().year(y).month(m).date(d).lunar().add(1, 'days').format('MM');
        let year = moment().year(y).month(m).date(d).lunar().add(1, 'days').format('YYYY');

        let canM;
        let chiM = ["Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi", "Thân", "Dậu", "Tuất", "Hợi", "Tý", "Sửu"];
        let mol = year % 10;
        let canYIndex = 0
        switch (mol) {
            case 0: canYIndex = 9; break;
            case 1: canYIndex = 0; break;
            case 2: canYIndex = 1; break;
            case 3: canYIndex = 2; break;
            case 4: canYIndex = 3; break;
            case 5: canYIndex = 4; break;
            case 6: canYIndex = 5; break;
            case 7: canYIndex = 6; break;
            case 8: canYIndex = 7; break;
            case 9: canYIndex = 8; break;
        }

        if (canYIndex == 3 || canYIndex == 8) {
            // Bính
            canM = ["Bính", "Đinh", "Mậu", "Kỷ", "Canh", "Tân", "Nhâm", "Quý", "Giáp", "Ất"];
        }
        else if (canYIndex == 4 || canYIndex == 9) {
            // Mậu
            canM = ["Mậu", "Kỷ", "Canh", "Tân", "Nhâm", "Quý", "Giáp", "Ất", "Bính", "Đinh"];
        }
        if (canYIndex == 5 || canYIndex == 0) {
            // Canh
            canM = ["Canh", "Tân", "Nhâm", "Quý", "Giáp", "Ất", "Bính", "Đinh", "Mậu", "Kỷ"];
        }
        if (canYIndex == 6 || canYIndex == 1) {
            // Nhâm
            canM = ["Nhâm", "Quý", "Giáp", "Ất", "Bính", "Đinh", "Mậu", "Kỷ", "Canh", "Tân"];
        }
        if (canYIndex == 7 || canYIndex == 2) {
            // Giáp
            canM = ["Giáp", "Ất", "Bính", "Đinh", "Mậu", "Kỷ", "Canh", "Tân", "Nhâm", "Quý"];
        }

        switch (month) {
            case '01': result = canM[0] + ' ' + chiM[0]; break;
            case '02': result = canM[1] + ' ' + chiM[1]; break;
            case '03': result = canM[2] + ' ' + chiM[2]; break;
            case '04': result = canM[3] + ' ' + chiM[3]; break;
            case '05': result = canM[4] + ' ' + chiM[4]; break;
            case '06': result = canM[5] + ' ' + chiM[5]; break;
            case '07': result = canM[6] + ' ' + chiM[6]; break;
            case '08': result = canM[7] + ' ' + chiM[7]; break;
            case '09': result = canM[8] + ' ' + chiM[8]; break;
            case '10': result = canM[9] + ' ' + chiM[9]; break;
            case '11': result = canM[0] + ' ' + chiM[10]; break;
            case '12': result = canM[1] + ' ' + chiM[11]; break;
        }
        return result;
    }
    getDayZodiac = () => {
        let can = ["Giáp", "Ất", "Bính", "Đinh", "Mậu", "Kỷ", "Canh", "Tân", "Nhâm", "Quý"];
        let chi = ["Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi", "Thân", "Dậu", "Tuất", "Hợi"];

        let d = this.time.day;
        let m = this.time.month - 1;
        let y = this.time.year;

        let indexX = parseInt(this.UniversalToJD(d, m, y) + 9.5) % 10;

        let indexY = parseInt(this.UniversalToJD(d, m, y) + 1.5) % 12;

        return can[indexX] + ' ' + chi[indexY];
    }






    render() {
        const { dataNote } = this.state;
        var isCheckNote = false;
        var data = [];
        dataNote.map(item => {
            const dateTimeYear = new Date(item.date_time).getFullYear();
            const dateTimeMonth = new Date(item.date_time).getMonth() + 1;
            const dateTimeDate = new Date(item.date_time).getDate();
            const timeYear = new Date(this.time).getFullYear();
            const timeMonth = new Date(this.time).getMonth();
            const timeDate = new Date(this.time).getDate();
            // console.log(dateTimeYear)
            // console.log(dateTimeMonth)
            // console.log(dateTimeDate)
            if (dateTimeYear === this.time.year && dateTimeMonth === this.time.month &&
                dateTimeDate === this.time.day) {
                data.push(item),
                    isCheckNote = true;
            }
            console.log(isCheckNote)
        });
        var navigation;
        if(this.props.navigation != null){
            navigation = this.props.navigation;
        }
        return (
            <View style={styles.bigContainer}>
                <HeaderDetailDate navigation = {navigation} />
                <View style={styles.drawFullLine} />
                <ScrollView style={styles.container}

                >
                    <View style={styles.header}>
                        <View style={styles.leftHeader}>
                            <Text style={[styles.txtDay, { color: this.getDay() == 'CHỦ NHẬT' ? 'red' : 'gray' }]}>
                                {this.getDay()}
                            </Text>
                            <Text style={styles.txtDate}>
                                {this.getDate()}
                            </Text>
                            <Text style={styles.lunarDate}>
                                {this.getLunarDay()}
                            </Text>
                        </View>

                        <View style={styles.rightHeader}>
                            <Text style={styles.txtZodiact}>
                                N. {this.getDayZodiac()}
                            </Text>
                            <Text style={styles.txtZodiact}>
                                T. {this.getMonthZodiac()}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.drawLine} />
                    <Text style={styles.title}>
                        Tử vi hằng ngày :
                </Text>
                    <Text style={styles.content}>
                        - Chiến thắng điện biên phủ.
                        - Chiến thắng điện biên phủ.
                        - Chiến thắng điện biên phủ.
                        - Chiến thắng điện biên phủ.
                        - Chiến thắng điện biên phủ.
                </Text>

                    <View style={styles.drawLine} />

                    <Text style={styles.title}>
                        Các sự kiện :
                </Text>
                    <Text style={styles.content}>
                        - Chiến thắng điện biên phủ.
                        - Chiến thắng điện biên phủ.
                        - Chiến thắng điện biên phủ.
                        - Chiến thắng điện biên phủ.
                        - Chiến thắng điện biên phủ.
                </Text>

                    {isCheckNote ? <View style={styles.contentFlat}>

                        <Text style={styles.title}> Các ghi chu :</Text>
                        <FlatList style={styles.containerScrollZodiac}
                            data={data}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => {
                                const dateTime = moment(new Date(item.date_time)).format('MMMM Do YYYY');
                                return (<View><View style={styles.brLaugh}>
                                </View>
                                    <TouchableOpacity style={styles.itemLaugh} onPress={() => {
                                        if (this.props.navigation != null)
                                            this.props.navigation.navigate('ContainerStoryScreen', {
                                                data: item,
                                            });
                                    }}>
                                        <Text style={styles.laughTitle}>
                                            {item.note_title}

                                            <Text style={styles.dateTitle}>
                                                {dateTime}
                                            </Text>
                                        </Text>
                                        <Text numberOfLines={2} width={100} style={styles.laughNoiDung}>
                                            {item.note_content}
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                )
                            }}
                        ></FlatList>
                    </View> : <View></View>}
                </ScrollView>
            </View>


        );
    }
}

const styles = StyleSheet.create({
    bigContainer:{
        flex:1,
        backgroundColor:'white',
    },
    buttonHeader:{
        height:50,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
        borderColor:'#ebe8e6',
        borderWidth:2,
    },
    imgButtonHeader:{
        width:25,
    },
    container: {
        marginTop:20,
    },
    drawLine: {
        backgroundColor: '#ebe8e6',
        marginLeft: '5%',
        width: '90%',
        height: 2,
        marginTop: '5%',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        marginTop: '5%',
        marginLeft: '5%',
    },
    leftHeader: {
    },
    rightHeader: {
        marginTop: '6%',
    },
    txtDay: {
        fontSize: 18,
        color: 'gray',
    },
    txtDate: {
        fontSize: 23,
        marginTop: '2%',
    },
    lunarDate: {
        fontSize: 17,
        marginTop: '2%',
        color: 'gray',
    },
    txtZodiact: {
        fontSize: 14,
        marginTop: '10%',
        color: 'gray',
    },
    title: {
        color: '#0877c2',
        width: '92%',
        marginTop: '8%',
        marginLeft: '5%',
        fontSize: 22,
    },
    content: {
        width: '90%',
        marginLeft: '7%',
        marginTop: '1%',
        fontSize: 18,
    },
    contentFlat: {
        width: '96%',
    },
    drawContent: {
        height: '92%',
        alignItems: 'center',
    },
    containerScrollZodiac: {
        width: '100%',
        height: '93.8%',

    },
    brLaugh: {
        height: 1,
        width: "100%",
        backgroundColor: "#EEEEEE",
    },
    itemLaugh: {
        width: "96%",
    },
    laughTitle: {
        fontSize: 23,
        marginLeft: 15,
        marginTop: 10,
        marginBottom: 5,
    },
    dateTitle: {
        color: 'gray',
        fontSize: 14,
    },
    laughNoiDung: {
        lineHeight: 22,
        fontSize: 16,
        marginLeft: 15,
        marginBottom: 10,
    },
});

export default DetailDate;