import {
  MediaStream,
  RTCView,
  useParticipant
} from '@videosdk.live/react-native-sdk';
import React from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import {
  colors,
  fontFamily,
  responsiveHeight,
  responsiveWidth,
  spaceVertical
} from '../../styles/variables';

function ParticipantView({ participantId }: any) {
  const { webcamStream, webcamOn } = useParticipant(participantId);

  return webcamOn && webcamStream ? (
    <RTCView
      streamURL={new MediaStream([webcamStream.track]).toURL()}
      objectFit={'cover'}
      style={{
        height: 300,
        marginVertical: 8,
        marginHorizontal: 8
      }}
    />
  ) : (
    <View
      style={{
        backgroundColor: 'grey',
        height: 300,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <Text style={{ fontSize: 16 }}>NO MEDIA</Text>
    </View>
  );
}

const ParticipantList = ({ participants, type, name, image }: any) => {
  return participants.length > 0 ? (
    type === 'VIDEO' ? (
      <FlatList
        data={participants}
        renderItem={({ item }) => {
          return <ParticipantView participantId={item} />;
        }}
      />
    ) : (
      <View
        style={{
          flex: 1,
          height: 200,
          width: responsiveWidth(90),
          borderWidth: 1,
          borderColor: colors.black,
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: spaceVertical.small
        }}>
        <Image
          style={{
            height: responsiveHeight(20),
            width: responsiveHeight(20),
            alignSelf: 'center',
            borderRadius: 10
          }}
          source={{ uri: image }}
        />
        <Text
          style={{
            alignSelf: 'center',
            fontFamily: fontFamily.semiBold,
            fontSize: 22,
            color: colors.simplegreen,
            marginTop: spaceVertical.semiSmall
          }}>
          {name}
        </Text>
      </View>
    )
  ) : (
    <View
      style={{
        flex: 1,
        marginTop: responsiveHeight(25)
      }}>
      <Image
        style={{
          height: responsiveHeight(20),
          width: responsiveHeight(20),
          alignSelf: 'center',
          borderRadius: 30
        }}
        source={{ uri: image }}
      />
      <Text
        style={{
          fontSize: 22,
          fontFamily: fontFamily.semiBold,
          alignSelf: 'center',
          color: colors.black,
          marginTop: spaceVertical.semiSmall
        }}>
        {name}
      </Text>
    </View>
  );
};

export default ParticipantList;
