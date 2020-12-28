import React from 'react';
import { StyleSheet, View, Text, Image, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Dimensions } from 'react-native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import ContainerStoryScreen from './ContainerStoryScreen';
import Draggable from 'react-native-draggable';
import CreateNote from './CreateNote';
import { GetListNote } from '../api';
import asset from '../asset';
import moment from 'moment';
import { SwipeListView } from 'react-native-swipe-list-view';
const Stack = createStackNavigator();

const widthItemZodiac = (Dimensions.get('window').width * 30) / 100;
const HeightItemZodiac = (Dimensions.get('window').width * 35) / 100;
const WidthImage = (widthItemZodiac * 70) / 100;
const HeightImage = (widthItemZodiac * 70) / 100;

class StoryScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataNote: [],
            isLoading: true,
        };
    }
    componentDidMount() {
        this.GetListNote();
    }
    GetListNote = () => {
        GetListNote((data) => {
            this.setState({ dataNote: data.data, isLoading: false })
            console.log(this.state.dataNote)

        })
    }
    render() {
        const { dataNote, isLoading } = this.state
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                        <Image source={asset.icons.menu} style={styles.backIconStyle} />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Ghi chú</Text>
                    <TouchableOpacity>
                        <Text style={styles.txt_edit}></Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.drawContent}>
                    {
                        isLoading ?
                            <ActivityIndicator size="large" color="#FFFFFF" style={{ marginTop: 50 }} />
                            :
                            <FlatList style={styles.containerScrollZodiac}
                                data={this.state.dataNote}
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
                    }
                </View>
                <Draggable x={300} y={500}
                    renderColor='red'
                    isCircle
                    onPressIn={() => this.props.navigation.navigate('CreateNote')}
                    maxX={300}
                    maxY={500}
                    minX={300}
                    minY={500}
                    renderSize={50}
                    renderText='+' />
            </View>
        );
    }
}
export default class MenuStory extends React.Component {
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
                <Stack.Screen name="StoryScreen" component={StoryScreen}
                    options={{ headerShown: false, }} />
                <Stack.Screen name="ContainerStoryScreen" component={ContainerStoryScreen}
                    options={{ headerShown: false, }} />
                <Stack.Screen name="CreateNote" component={CreateNote}
                    options={{ headerShown: false, }} />
            </Stack.Navigator>
        );
    }
}

const styles = StyleSheet.create({
    headerNavigation: {
        color: 'red',
    },
    header: { flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 10 },// eslint-disable-line
    headerTitle: { fontFamily: 'Avenir', color: 'black', fontSize: 20, marginLeft: -60 },
    backIconStyle: { width: 70, height: 70, marginLeft: -10 },
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
    brLaugh: {
        height: 1,
        width: "100%",
        backgroundColor: "#EEEEEE",
    },
    itemLaugh: {
        width: "96%",
    },
    laughTitle: {
        color: '#0877c2',
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
