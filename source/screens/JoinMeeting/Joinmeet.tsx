import React from 'react';
import {Image, SafeAreaView, TextInput, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Buttons from '../../components/Button';
import {
  responsiveHeight,
  responsiveWidth,
  spaceVertical,
} from '../../styles/variables';

export function Joinmeet(props: any) {
  return (
    <LinearGradient style={{flex: 1}} colors={['#F7F0F0', '#E0F0EC']}>
      <SafeAreaView
        style={{
          flexGrow: 1,
          backgroundColor: '#F6F6FF',
          justifyContent: 'center',
          paddingHorizontal: 6 * 10,
        }}>
        <Image
          style={{
            height: responsiveHeight(30),
            width: responsiveWidth(60),
            alignSelf: 'center',
          }}
          source={require('../../assets/images/callview.png')}
        />
        {!props.value ? (
          <Buttons
            onPress={() => props.getMeetingId()}
            style={{
              height: responsiveHeight(7),
              width: responsiveWidth(93),
              borderRadius: 6,
              justifyContent: 'center',
              alignSelf: 'center',
              marginTop: spaceVertical.semiSmall,
            }}
            text={'Click here to join the call'}
          />
        ) : null}
        {props.value ? (
          <>
            <View style={{width: 0, height: 0}}>
              <TextInput
                value={props.value}
                editable={props.value ? false : true}
                // onChangeText={setMeetingVal}
                placeholder={'XXXX-XXXX-XXXX'}
                style={{
                  padding: 12,
                  borderRadius: 6,
                  fontStyle: 'italic',
                  marginVertical: 16,
                  color: '#FFFFFFF10',
                }}
              />
            </View>
            <Buttons
              onPress={() => props.getMeetingId(props.value)}
              style={{
                height: responsiveHeight(7),
                width: responsiveWidth(93),
                borderRadius: 6,
                justifyContent: 'center',
                alignSelf: 'center',
                marginTop: spaceVertical.semiSmall,
              }}
              text={'Click here to join the call'}
            />
          </>
        ) : null}
      </SafeAreaView>
    </LinearGradient>
  );
}

export default Joinmeet;
