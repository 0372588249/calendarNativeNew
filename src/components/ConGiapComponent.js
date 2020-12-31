import React, { Component } from 'react';
import { Image, Text, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';

export default class ConGiapComponent extends React.Component {

    render() {
        return (
            <TouchableOpacity style={styles.ConGiapComponent}
                onPress={() => {
                    if (this.props.navigation != null) {
                        /**
                         * do some thing
                         */
                        if (this.props.navigation != null)
                            this.props.navigation.navigate('ConGiapToday', {
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


const widthItemZodiac = (Dimensions.get('window').width * 30) / 100;
const HeightItemZodiac = (Dimensions.get('window').width * 35) / 100;
const WidthImage = (widthItemZodiac * 70) / 100;
const HeightImage = (widthItemZodiac * 70) / 100;

const styles = StyleSheet.create({
    ConGiapComponent: {
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
});