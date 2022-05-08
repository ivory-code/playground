import React, {useCallback, useMemo, useState} from 'react'
import {CalendarList} from 'react-native-calendars'
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import {IMAGES} from '../../constants/images'
import Modal from 'react-native-modal'

interface MarkingInfo {
  marked?: boolean
  startDay?: string
  endDay?: string
  color?: string
  title?: string
  titleColor?: string
  stamp?: number
  periods?: Array<MarkingInfo>
}

type MarkingDatesType = {
  [key: string]: MarkingInfo
}

const EVENT_COLORS = {
  DATE: '#FFF2AE',
  HOLIDAY: '#D3EDFF',
  CAKE: 'red',
  LOVE: '#FFD7CC',
  OTHER: '#E8F4B6',
}

const STAMPS = [
  IMAGES.airplane,
  IMAGES.car,
  IMAGES.flower,
  IMAGES.tulip,
  IMAGES.wave,
]

const CalendarTemplate = () => {
  const [busyDays, setBusyDays] = useState<any[]>([])
  const [isSelectionOpen, setIsSelectionOpen] = useState<boolean>(false)
  const [stamp, setStamp] = useState<number>(IMAGES.car)
  const [demoStamp, setDemoStamp] = useState<number>(stamp)

  const convertMarkers = useMemo(() => {
    const converted: MarkingDatesType = {}

    busyDays.forEach(element => {
      const date = element.date

      if (converted[date] !== undefined) {
        if (Array.isArray(converted[date].periods)) {
          converted[date].periods?.push({
            marked: element.marked,
            color: element.color,
            title: element.title,
            stamp: element.stamp,
          })
        } else {
          const previousDate = converted[date]

          converted[date] = {
            periods: [
              previousDate,
              {
                marked: element.marked,
                color: element.color,
                title: element.title,
                stamp: element.stamp,
              },
            ],
          }
        }
      } else {
        converted[date] = {
          marked: true,
          color: element.color,
          title: element.title,
          stamp: element.stamp,
        }
      }
    })

    return converted
  }, [busyDays])

  const updateStamp = useCallback(() => {
    setIsSelectionOpen(false)
    setStamp(demoStamp)

    const applyStamp = busyDays

    applyStamp.forEach(element => {
      element.stamp = demoStamp
    })

    setBusyDays([...applyStamp])
  }, [busyDays, demoStamp])

  const selectDay = useCallback(
    date => {
      const dayString = date.dateString

      const isExist = busyDays.filter(element => element.date === dayString)

      if (isExist.length !== 0) {
        const index = busyDays.indexOf(isExist[0])

        busyDays.splice(index, 1)
        setBusyDays([...busyDays])
      } else {
        busyDays.length === 0
          ? setBusyDays([{date: dayString, stamp: stamp}])
          : setBusyDays([...busyDays, {date: dayString, stamp: stamp}])
      }
    },
    [busyDays, stamp],
  )

  const isSunday = useCallback((year: number, month: number, day: number) => {
    const myDay = new Date()

    myDay.setFullYear(year)
    myDay.setMonth(month - 1)
    myDay.setDate(day)

    return myDay.getDay() === 0
  }, [])

  const isSaturday = useCallback((year: number, month: number, day: number) => {
    const myDay = new Date()

    myDay.setFullYear(year)
    myDay.setMonth(month - 1)
    myDay.setDate(day)

    return myDay.getDay() === 6
  }, [])

  const getDayColor = useCallback(
    (date, state: any) => {
      if (state === 'disabled') {
        return 'grey'
      } else {
        if (isSunday(date.year, date.month, date.day)) {
          return 'red'
        } else if (isSaturday(date.year, date.month, date.day)) {
          return 'red'
        }
      }
    },
    [isSaturday, isSunday],
  )

  const stampList = useMemo(() => {
    return STAMPS.map((element: number, index: number) => {
      return (
        <View key={index}>
          <TouchableOpacity
            style={styles.demoStampButton}
            onPress={() => setDemoStamp(element)}>
            <Image style={styles.demoStampStyle} source={element} />
          </TouchableOpacity>
        </View>
      )
    })
  }, [])

  const renderStamp = useCallback((marking: any) => {
    return (
      <View style={styles.markerContainer}>
        <Image style={styles.markerImage} source={marking.stamp} />
      </View>
    )
  }, [])

  const customDay = useCallback(
    (date, state, marking) => {
      const todayBackgroundColor = {
        backgroundColor: state === 'today' ? '#F98F75' : 'transparent',
      }

      const todayText = {
        color: state === 'today' ? 'white' : getDayColor(date, state),
      }

      return (
        <View style={styles.dayView}>
          <TouchableOpacity
            style={styles.dayButton}
            disabled={state === 'disabled'}
            onPress={() => selectDay(date)}>
            <View style={[styles.dayTextContainer, todayBackgroundColor]}>
              <Text style={[styles.dayText, todayText]}>{date.day}</Text>
            </View>
            {marking ? renderStamp(marking) : null}
          </TouchableOpacity>
        </View>
      )
    },
    [getDayColor, renderStamp, selectDay],
  )

  return (
    <View>
      <CalendarList
        style={styles.calendarStyle}
        horizontal
        pastScrollRange={120}
        futureScrollRange={120}
        pagingEnabled
        customImageDayStyle={{
          width: '100%',
          position: 'absolute',
          top: -234,
        }}
        customImageWeekStyle={{
          width: '100%',
          marginBottom: -28,
        }}
        theme={{
          calendarBackground: 'transparent',

          textMonthFontSize: 20,
        }}
        renderHeader={date => {
          return (
            <View style={styles.headerContainer}>
              <Text style={styles.monthText}>{date.getMonth() + 1}월</Text>
            </View>
          )
        }}
        markingType={'custom'}
        markedDates={convertMarkers}
        hideArrows={true}
        hideDayNames={true}
        hideExtraDays={false}
        dayComponent={({date, state, marking}) => {
          return customDay(date, state, marking)
        }}
      />
      <Button onPress={() => setIsSelectionOpen(true)} title={'change stamp'} />
      <Modal
        isVisible={isSelectionOpen}
        onBackdropPress={() => setIsSelectionOpen(false)}
        onBackButtonPress={() => setIsSelectionOpen(false)}
        animationIn="fadeIn"
        animationOut="fadeOut"
        animationOutTiming={400}
        coverScreen
        hideModalContentWhileAnimating
        useNativeDriver>
        <View style={styles.stampModal}>
          <Text style={styles.modalTitle}>Please select a stamp!</Text>
          <View style={styles.demoStampContainer}>
            <Image style={styles.modalImage} source={demoStamp} />
          </View>
          <View style={styles.stampListContainer}>{stampList}</View>
          <Button onPress={updateStamp} title="confirm" />
        </View>
      </Modal>
    </View>
  )
}

export default CalendarTemplate

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: -30,
  },
  monthNumber: {
    marginTop: -30,
  },
  calendarStyle: {
    backgroundColor: 'transparent',
  },
  dayView: {
    height: 61.5,
    width: '100%',
    backgroundColor: 'transparent',
    justifyContent: 'space-around',
  },
  dayButton: {
    height: '100%',
    alignItems: 'center',
  },
  dayTextContainer: {
    borderRadius: 50,
    height: 24,
    width: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 3,
  },
  dayText: {
    textAlign: 'center',
  },
  monthText: {
    fontSize: 23,
    fontWeight: '700',
    marginTop: 20,
    marginBottom: 40,
  },
  stampModal: {
    backgroundColor: 'white',
    alignItems: 'center',
    paddingVertical: 25,
  },
  modalTitle: {
    fontSize: 25,
  },
  demoStampContainer: {alignItems: 'center', width: 150, height: 150},
  demoStampButton: {width: 60, height: 60},
  demoStampStyle: {width: '100%', height: '100%'},
  stampListContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },
  markerContainer: {
    width: '100%',
    height: 16,
    borderRadius: 5,
    alignItems: 'center',
  },
  markerImage: {paddingTop: 20, width: 30, height: 30},
  modalImage: {width: 100, height: 100},
})
