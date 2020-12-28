import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import { GetListNote } from '../api';
import asset from '../asset';
import moment from 'moment';


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
    getDate() {

        return this.time.day + '/' + this.time.month + '/' + this.time.year;
    }
    render() {
        const { dataNote } = this.state;
        var isCheckNote = false;
        var data = []
        dataNote.map(item => {
            const dateTimeYear = new Date(item.date_time).getFullYear();
            const dateTimeMonth = new Date(item.date_time).getMonth() + 1;
            const dateTimeDate = new Date(item.date_time).getDate();
            const timeYear = new Date(this.time).getFullYear();
            const timeMonth = new Date(this.time).getMonth();
            const timeDate = new Date(this.time).getDate();
            console.log(dateTimeYear)
            console.log(dateTimeMonth)
            console.log(dateTimeDate)
            if (dateTimeYear === this.time.year && dateTimeMonth === this.time.month &&
                dateTimeDate === this.time.day) {
                data.push(item),
                    isCheckNote = true;
            }
            console.log(isCheckNote)
        })
        return (
            <ScrollView style={styles.container}
                contentContainerStyle={{ alignItems: 'center' }}
            >
                <Text style={styles.date}>
                    {this.getDate()}
                </Text>
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

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    date: {
        fontSize: 27,
        marginTop: '5%',
    },
    title: {
        color: '#0877c2',
        width: '96%',
        marginTop: '8%',
        fontSize: 22,
    },
    content: {
        width: '92%',
        marginLeft: '4%',
        marginTop: '1%',
        fontSize: 18,
    },
    contentFlat:{
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
