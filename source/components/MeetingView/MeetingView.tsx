import { useMeeting } from '@videosdk.live/react-native-sdk';
import { TouchableOpacity, View } from 'react-native';
import Svg, { Defs, Path } from 'react-native-svg';
import { responsiveWidth } from '../../styles/variables';
import ControlsContainer  from '../ControlsContainer/ControlsContainer';
import ParticipantList from '../ParticipantList/ParticipantList';

function CameraSwitch(props: any) {
  return (
    <Svg viewBox="0 0 19.046 16.357" {...props}>
      <Defs></Defs>
      <Path
        className="a"
        d="M21.045 11.238a.682.682 0 00-.627-.423h-.8a7.708 7.708 0 00-.443-1.608 8.178 8.178 0 00-15.239 0 .682.682 0 101.27.493 6.815 6.815 0 0112.7 0 6.134 6.134 0 01.314 1.118h-.532a.686.686 0 00-.484 1.165l1.363 1.363.109.068h.034a.634.634 0 00.341.129.682.682 0 00.484-.2l1.365-1.362a.682.682 0 00.145-.743zm-2.256 3.033a.682.682 0 00-.879.388 6.815 6.815 0 01-12.7 0 6.134 6.134 0 01-.314-1.118h.532a.686.686 0 00.484-1.165l-1.367-1.363-.109-.068a.682.682 0 00-.825.089L2.248 12.4a.669.669 0 00.45 1.145h.8a7.708 7.708 0 00.443 1.608 8.178 8.178 0 0015.239 0 .682.682 0 00-.391-.882z"
        transform="translate(-2.052 -4)"
      />
      <Path
        className="a"
        d="M13.602 12.179a2.045 2.045 0 10-2.045 2.045 2.045 2.045 0 002.045-2.045zm-2.726 0a.682.682 0 11.682.682.682.682 0 01-.682-.682z"
        transform="translate(-2.052 -4)"
      />
    </Svg>
  );
}
export const MeetingView = (props: any) => {
  const {
    join,
    leave,
    toggleWebcam,
    toggleMic,
    meetingId,
    participants,
    changeWebcam
  } = useMeeting({});
  const participantsArrId = [...participants.keys()];
  return (
    <View style={{ flex: 1, marginTop: '10%' }}>
      {meetingId ? (
        <>
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'flex-end',
              width: responsiveWidth(30),
              justifyContent: 'space-around'
            }}>
            {props.objs.type === 'VIDEO' ? (
              <TouchableOpacity
                style={{ alignSelf: 'center' }}
                onPress={() => {
                  changeWebcam();
                }}>
                <CameraSwitch height={26} width={26} fill="black" />
              </TouchableOpacity>
            ) : null}
          </View>
        </>
      ) : null}

      <ParticipantList
        name={props.objs.name}
        type={props.objs.type}
        image={props.objs.image}

        participants={participantsArrId}
      />
      <ControlsContainer
        navigation={props.navigation}
        objs={props.objs}
        join={join}
        leave={leave}
        toggleWebcam={props.objs.type === 'VIDEO' ? toggleWebcam : null}
        toggleMic={toggleMic}
      />
    </View>
  );
};
