import {MeetingProvider} from '@videosdk.live/react-native-sdk';
import React, { useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {MeetingView} from '../../components/MeetingView/MeetingView';
import {createMeeting, token} from '../../utils/API';
import {videostart} from '../../utils/service';
import Joinmeet from '../JoinMeeting/Joinmeet';

const Createmeet = ({navigation, route}: any) => {
  const appointment_id = route.params.appointment_id;
  const type = route.params.type;
  const name = route.params.name;
  const image = route.params.image;
  const [meetingId, setMeetingId] = useState(null);
  const [new_id, setnew_id] = useState(null);

  useEffect(() => {
    startJoin();
  }, []);

  const startJoin = async () => {
    const JoinPost = await videostart({
      payloadData: {
        requestData: {
          appointment_id: appointment_id,
          room_id: meetingId,
          call_type: type.toLowerCase(),
          call_status: 'initiated',
        },
      },
    });

    if (JoinPost?.rc === 0) {
      setnew_id(JoinPost?.payloadResponse?.data?.roomId);
    } else {
      console.log('error');
    }
  };

  const getMeetingId =async (id: any) => {
    const meetingId = id == null ? await createMeeting({token}) : id;
    setMeetingId(meetingId);
  };

  const objs = {
    meeting_Id: meetingId,
    appointment_id: appointment_id,
    type: type,
    name: name,
    image: image,
  };
  
  return meetingId ? (
    <LinearGradient style={{flex: 1}} colors={['#F7F0F0', '#E0F0EC']}>
      <SafeAreaView style={{flexGrow: 1, backgroundColor: '#F6F6FF'}}>
        <MeetingProvider
          config={{
            meetingId,
            micEnabled: true,
            webcamEnabled: true,
            name: 'Test',
          }}
          token={token}>
          <MeetingView objs={objs} navigation={navigation} />
        </MeetingProvider>
      </SafeAreaView>
    </LinearGradient>
  ) : (
    <Joinmeet value={new_id} getMeetingId={getMeetingId} />
  );
};

export default Createmeet;
