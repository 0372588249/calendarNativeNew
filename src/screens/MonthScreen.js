import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import moment from 'moment';
import 'moment-lunar';
import { CalendarList } from 'react-native-calendars';
import { LocaleConfig } from 'react-native-calendars';

LocaleConfig.locales['en'] = {
  formatAccessibilityLabel: "dddd d 'of' MMMM 'of' yyyy",
  monthNames: [
    'Tháng Một',
    'Tháng Hai',
    'Tháng Ba',
    'Tháng Tư',
    'Tháng Năm',
    'Tháng Sáu',
    'Tháng Bảy',
    'Tháng Tám',
    'Tháng Chín',
    'Tháng Mười',
    'Tháng Mười Một',
    'Tháng Mười Hai'
  ],
  monthNamesShort: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  dayNames: ['CN', 'Hai', 'Ba', 'Tư', 'Năm', 'Sáu', 'Bảy'],
  dayNamesShort: ['CN', 'Hai', 'Ba', 'Tư', 'Năm', 'Sáu', 'Bảy'],

};


const testIDs = require('../testIDs');
class ListMonthScreen extends React.Component {
  render() {

    let count = 1;
    return (
      <View style={styles.container}>
        <CalendarList
        renderHeader={(date) => {
          return (
            <View style={styles.header}>
              <Text style={styles.textHeader}>
                Tháng {date.getMonth() + 1} - {date.getFullYear()}
              </Text>
            </View>
          );
        }}

        dayComponent={({ date, state }) => {
          

          const getLunarDay = () => {
            let d = date.day;
            let m = date.month;
            let y = date.year;
            let value = moment().year(y).month(m).date(d).lunar().subtract(1, 'days').format('DD');
            if (value == 1) {
              value = moment().year(y).month(m).date(d).lunar().subtract(1, 'days').subtract(1, 'months').format('MM') + '/' + value;
            }
            return value;
          }

          const  getColorDay = () => {
            
            let today = moment();
            let dayOfWeek = new Date(date.year, date.month, date.day).getDay();
            if (dayOfWeek == 1) {
              console.log(dayOfWeek, new Date(date.year, date.month, date.day));
              return 'red';
            }
            else if (date.day == today.date()
              && date.month == today.month() + 1
              && date.year == today.year()) {
              return 'white';
            }
            return '';
          }


         
          /*
          const  getColorDay2 = () => {
            let today = moment();
            let dayOfWeek = new Date(date.year, date.month, date.day).getDay();
            if (dayOfWeek == 1) {
              console.log(dayOfWeek, new Date(date.year, date.month, date.day));
              return 'red';
            }
            else if (date.day == today.date()
              && date.month == today.month() + 1
              && date.year == today.year()) {
              return 'white';
            }
            return '';
          }
          async function gcl(){
            return await getColorDay2();
          }
          */
          const isToday = () => {
            let today = moment();
            if (date.day == today.date()
              && date.month == today.month() + 1
              && date.year == today.year()) {
              return true;
            }
            return false;
          }
          return (
            <TouchableOpacity style={[styles.containerDate, { backgroundColor: isToday() == true ? '#4f6386' : '' }]}
              onPress={() => {
                /**
                 * do some thing
                 */
                if (this.props.navigation != null) {
                  this.props.navigation.navigate('DetailDate', {
                    time: date
                  })
                }
              }}
            >
              <Text style={[styles.dateText, { color: state === 'disabled' ? 'gray' :getColorDay() }]}>
                {date.day}
              </Text>
              <Text style={styles.lunarText}>
                {getLunarDay(date)}
              </Text>
            </TouchableOpacity>
          );
        }}
        pastScrollRange={50}
        futureScrollRange={50}
        scrollEnabled={true}
        showScrollIndicator={true}
        style={{ borderBottomWidth: 1, borderBottomColor: 'black' }}
        firstDay={1}
        style={styles.listCalendar}
        calendarHeight={400}
        calendarWidth={'95%'}
        theme={{
          marginTop: 150,
          calendarBackground: 'white',
          textSectionTitleColor: 'white',
          textSectionTitleDisabledColor: 'gray',
          backgroundColor:'red',
          // textDisabledColor: 'red',
          'stylesheet.calendar.header': {
            week: {
              marginTop: 15,
              marginHorizontal: 12,
              flexDirection: 'row',
              justifyContent: 'space-around',
              backgroundColor: '#c9c1bc',
              borderRadius: 20,
              width: '100%',
              marginLeft: '0%',
            },
            headerContainer: {
              flexDirection: 'row',
              backgroundColor: '#3a524e',
              width:'110%',
              marginLeft:'-5%',
              justifyContent:'center',
              alignItems:'center',
              height:'180%',
              borderTopLeftRadius:10,
              borderTopRightRadius:10,
            },
          }
        }}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'blue',
  },
  header: {
  },
  textHeader: {
    fontSize: 18,
    color: 'white',
  },
  listCalendar: {
    backgroundColor:'gray',
  },
  text: {
    textAlign: 'center',
    padding: 10,
    backgroundColor: 'lightgrey',
    fontSize: 16
  },
  containerDate: {
    width: '80%',
    borderRadius: 8,
  },
  dateText: {
    fontSize: 17,
    textAlign: 'center',
    fontWeight: '600',
    color: 'white',
  },
  lunarText: {
    fontSize: 12,
    color: 'silver',
    textAlign: 'center'
  }
});


export default ListMonthScreen;