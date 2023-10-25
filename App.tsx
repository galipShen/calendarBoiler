import React from 'react';
import {SafeAreaView, Text, Alert, Button} from 'react-native';
import CalendarComp from './src/components/CalendarComp';
import TimelineCalendarComp from './src/components/TimelineCalendarComp';

function App(): JSX.Element {
  const [progress, setProgress] = React.useState(10);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'silver',
        alignItems: 'center',
      }}>
      <Text>APP</Text>
      {/* <CalendarComp /> */}
      <TimelineCalendarComp />
    </SafeAreaView>
  );
}

export default App;
