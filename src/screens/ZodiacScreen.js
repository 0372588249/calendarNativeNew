import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import { Dimensions } from 'react-native';
import { createStackNavigator, TransitionPresets, TransitionSpecs } from '@react-navigation/stack';
import ZodiacToday from './ZodiacToday'
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import asset from '../asset';

const Stack = createStackNavigator();

const widthItemZodiac = (Dimensions.get('window').width * 30) / 100;
const HeightItemZodiac = (Dimensions.get('window').width * 35) / 100;
const WidthImage = (widthItemZodiac * 70) / 100;
const HeightImage = (widthItemZodiac * 70) / 100;


const ListZodiac = [
    {
        id: 1,
        name: 'Bach Duong',
        image: require('../../assets/images/image-analysis.png'),
        time: '21/3 - 19/04',
    },
    {
        id: 2,
        name: 'Kim Nguu',
        image: require('../../assets/images/image-analysis.png'),
        time: '21/3 - 19/04',
    },
    {
        id: 3,
        name: 'Song Tu',
        image: require('../../assets/images/image-analysis.png'),
        time: '21/3 - 19/04',
    },
    {
        id: 4,
        name: 'Cu Giai',
        image: require('../../assets/images/image-analysis.png'),
        time: '21/3 - 19/04',
    },
    {
        id: 5,
        name: 'Su tu',
        image: require('../../assets/images/image-analysis.png'),
        time: '21/3 - 19/04',
    },
    {
        id: 6,
        name: 'Xu nu',
        image: require('../../assets/images/image-analysis.png'),
        time: '21/3 - 19/04',
    },
    {
        id: 7,
        name: 'Thien Binh',
        image: require('../../assets/images/image-analysis.png'),
        time: '21/3 - 19/04',
    },
    {
        id: 8,
        name: 'Bach Duong',
        image: require('../../assets/images/image-analysis.png'),
        time: '21/3 - 19/04',
    },
    {
        id: 9,
        name: 'Kim Nguu',
        image: require('../../assets/images/image-analysis.png'),
        time: '21/3 - 19/04',
    },
    {
        id: 10,
        name: 'Song Tu',
        image: require('../../assets/images/image-analysis.png'),
        time: '21/3 - 19/04',
    },
    {
        id: 11,
        name: 'Cu Giai',
        image: require('../../assets/images/image-analysis.png'),
        time: '21/3 - 19/04',
    },
    {
        id: 12,
        name: 'Su tu',
        image: require('../../assets/images/image-analysis.png'),
        time: '21/3 - 19/04',
    },
];

class ZodiacComponent extends React.Component {

    render() {
        return (
            <TouchableOpacity style={styles.zodiacComponent}
                onPress={() => {
                    if (this.props.navigation != null) {
                        /**
                         * do some thing
                         */
                        if (this.props.navigation != null)
                            this.props.navigation.navigate('ZodiacToday', {
                                id: this.props.item.id,
                            });
                    }
                }}
            >
                <Image style={styles.zodiacImage}
                    source={this.props.item.image}
                />
                <Text style={styles.zodiacName}>
                    {this.props.item.name}
                </Text>
                <Text style={styles.zodiacTime}>
                    {this.props.item.time}
                </Text>
            </TouchableOpacity>
        );
    }
}

class TopButtonNaviagation extends React.Component {

    render() {
        return (
            <TouchableOpacity
                style={styles.topButtonNavigation}
                onPress={() => {
                    /**
                     * do some thing
                     */
                    if (this.props.execute != null) {
                        this.props.execute();
                    }
                }}
            >
                <Image
                    style={[styles.imageTopButtonNavigation, this.props.tranform]}
                    source={this.props.sourceIcon}
                    tintColor='white'
                />
            </TouchableOpacity>
        );
    }
}

class ButtonInNavigationArea extends React.Component {
    render() {
        return (
            <TouchableOpacity
                style={[styles.buttonInNavigationArea, this.props.backColor]}
                onPress={() => {
                    /**
                     * do some thing
                     */
                    if (this.props.execute != null)
                        this.props.execute();
                }}
            >
                <Text style={[styles.textOfButtonInNavigationArea, this.props.fontWeight]}>
                    {this.props.text}
                </Text>
            </TouchableOpacity>
        );
    }
}


class ZodiacScreen extends React.Component {
    constructor() {
        super();
        this.state = { 
            isDayClicked: true 
        };
    }

    SelectDob = () => {
        this.setState({ isSelectDob: true })
    }
    getBackgroundColorDayButton = () => {
        if (this.state.isDayClicked == true) {
            return { backgroundColor: '#9ea490' };
        }
        return null;
    }
    getFontWeightDayButton = () => {
        if (this.state.isDayClicked == true) {
            return { fontWeight: '700' };
        }
        return null;
    }
    getBackgroundColorMonthButton = () => {
        if (this.state.isDayClicked == false) {
            return { backgroundColor: '#9ea490' };
        }
        return null;
    }
    getFontWeightMonthButton = () => {
        if (this.state.isDayClicked == false) {
            return { fontWeight: '700' };
        }
        return null;
    }
    render() {
        return (
            <View style={styles.container}>

                <View style={styles.header}>

                    <TouchableOpacity
                        style={styles.topButtonNavigation}
                        onPress={() => {
                            if (this.props.navigation != null)
                                this.props.navigation.openDrawer();
                        }}
                    >
                        <Image
                            style={[styles.imageTopButtonNavigation, this.props.tranform]}
                            source={require('../../assets/icon/menu.png')}
                        />
                    </TouchableOpacity>

                    <View style={styles.navigationArea}>
                        <ButtonInNavigationArea
                            text="Cung Hoàng Đạo"
                            backColor={this.getBackgroundColorDayButton()}
                            fontWeight={this.getFontWeightDayButton()}
                            execute={() => {
                                this.setState({ isDayClicked: true });
                                this.props.navigation.navigate('ZodiacScreen');
                            }}
                        />
                        <ButtonInNavigationArea
                            text="calendar"
                            backColor={this.getBackgroundColorMonthButton()}
                            fontWeight={this.getFontWeightMonthButton()}
                            execute={() => {
                                this.setState({ isDayClicked: false });
                                this.props.navigation.navigate('Zodiac1Screen');
                            }}
                        />
                    </View>
                    <TouchableOpacity style={styles.topButtonNavigation}></TouchableOpacity>

                    <DateTimePickerModal
                        display="spinner"
                        isVisible={this.state.isSelectDob}
                        // maximumDate={new Date()}
                        date={new Date()}
                        onConfirm={(date) => this._handleConfirmDob(date)}
                        onCancel={(date) => this._hideSelectDob(date)}
                    />
                </View>
                {this.state.isDayClicked ? <View style={styles.drawContent}>
                    <Text style={styles.title}>
                        Cung Hoàng Đạo
                    </Text>
                    <FlatList style={styles.containerScrollZodiac}
                        data={ListZodiac}
                        renderItem={({ item }) => {
                            return <ZodiacComponent item={item} navigation={this.props.navigation} />;
                        }}
                        keyExtractor={item => item.id}
                        numColumns='3'
                        columnWrapperStyle={styles.rowItem}
                    >
                    </FlatList>
                </View>:<View style={styles.drawContent}>
                    <Text style={styles.title}>
                    calendar
                    </Text>
                    <FlatList style={styles.containerScrollZodiac}
                        data={ListZodiac}
                        renderItem={({ item }) => {
                            return <ZodiacComponent item={item} navigation={this.props.navigation} />;
                        }}
                        keyExtractor={item => item.id}
                        numColumns='3'
                        columnWrapperStyle={styles.rowItem}
                    >
                    </FlatList>
                </View> }
                
            </View>

        );
    }
}
/**
 * screenOptions={{
                    headerShown: false
                }}
 */
class StackListZodiacScreen extends React.Component {

    render() {
        ZodiacToday
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
                <Stack.Screen name="ZodiacScreen" component={ZodiacScreen} options={{ headerShown: false }} />
                <Stack.Screen name="ZodiacToday" component={ZodiacToday} options={{ headerShown: false }} />
            </Stack.Navigator>
        );
    }
}


const styles = StyleSheet.create({
    headerNavigation: {
        color: 'red',
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
        width: widthItemZodiac,
        height: HeightItemZodiac,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '6%',
    },
    zodiacImage: {
        width: WidthImage,
        height: HeightImage,
        borderRadius: 50,
        borderColor: 'silver',
        borderWidth: 2,
    },
    zodiacName: {
        color: '#ff7654',
    },
    zodiacTime: {

    },
    header: {
        width: '94%',
        height: '6%',
        marginLeft: '3%',
        marginTop: '5%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    topButtonNavigation: {
        width: '10%',
        height: '85%',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'silver',
    },
    imageTopButtonNavigation: {
        alignItems: 'center',
    },
    navigationArea: {
        backgroundColor: '#b3bcb4',
        width: '60%',
        height: '85%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 20,

    },
    buttonInNavigationArea: {
        width: '50%',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textOfButtonInNavigationArea: {
        color: 'white',
        fontSize: 12,
    },

});

export default StackListZodiacScreen;
