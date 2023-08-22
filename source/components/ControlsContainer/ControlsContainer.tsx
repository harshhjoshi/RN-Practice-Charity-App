import React, { useEffect, useState } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { showToast } from '../../utils/commonUtils';
import { videostart } from '../../utils/service';
import { colors } from '../../styles/variables';

const ControlsContainer = ({
  join,
  leave,
  toggleWebcam,
  toggleMic,
  objs,
  navigation
}: any) => {
  const [micon, setmicOn] = useState(true);
  const [videoon, setVideoon] = useState(true);

  useEffect(() => {
    startJoin();
  }, []);

  const startJoin = async () => {
    const JoinPost = await videostart({
      payloadData: {
        requestData: {
          appointment_id: objs.appointment_id,
          room_id: objs.meeting_Id,
          call_type: objs.type.toLowerCase(),
          call_status: 'initiated'
        }
      }
    });

    if (JoinPost?.rc === 0) {
      {
        join();
      }
    } else {
      showToast(JoinPost?.payloadResponse?.error[0]?.message);
    }
  };

  const endJoin = async () => {
    const levaePost = await videostart({
      payloadData: {
        requestData: {
          appointment_id: objs.appointment_id,
          call_type: objs.type.toLowerCase(),
          call_status: 'ended'
        }
      }
    });

    if (levaePost?.rc === 0) {
      {
        leave();
      }
      navigation.navigate('CallEnd', {
        doctor_image: levaePost.payloadResponse.data.doctor_img,
        doctor_name: levaePost.payloadResponse.data.doctor_name,
        doctor_duration: levaePost.payloadResponse.data.duration
      });
    } else {
      showToast(levaePost?.payloadResponse?.error[0]?.message);
    }
  };

  const micClick = () => {
    toggleMic();
    setmicOn(!micon);
  };

  const VideoButton = () => {
    toggleWebcam();
    setVideoon(!videoon);
  };

  return (
    <View
      style={{
        padding: 24,
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}>
      {objs.type.toLowerCase() === 'video' ? (
        <TouchableOpacity
          style={{
            backgroundColor: videoon === true ? colors.darkGreen : colors.black,

            borderRadius: 10,
            justifyContent: 'center',
            padding: 10
          }}
          activeOpacity={0.6}
          onPress={() => {
            VideoButton();
          }}>
          <Image
            style={{ height: 30, width: 30, alignSelf: 'center' }}
            resizeMode="contain"
            source={
              videoon
                ? require('../../assets/images/videoasset.png')
                : require('../../assets/images/videooff.png')
            }></Image>
        </TouchableOpacity>
      ) : null}
      <TouchableOpacity
        style={{
          backgroundColor: colors.darkGreen,
          borderRadius: 10
        }}
        activeOpacity={0.6}
        onPress={() => {
          micClick();
        }}>
        <Image
          style={{ height: 50, width: 50 }}
          resizeMode="contain"
          source={
            micon
              ? require('../../assets/images/Mic_fill.png')
              : require('../../assets/images/mic.png')
          }></Image>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => {
          endJoin();
        }}>
        <Image
          style={{ height: 50, width: 50 }}
          resizeMode="contain"
          source={require('../../assets/images/Call_End.png')}></Image>
      </TouchableOpacity>
    </View>
  );
};

export default ControlsContainer;
