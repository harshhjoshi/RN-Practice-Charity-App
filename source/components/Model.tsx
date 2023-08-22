import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image } from 'react-native';
import {
  colors,
  fontFamily,
  fontSize,
  spaceVertical,
  borderRadius,
  responsiveWidth,
  responsiveHeight
} from '../styles/variables';
import Modal from 'react-native-modal';
import Buttons from './Button';
import NormalButton from './NormalButton';

const Model =({
  isVisible,
  title,
  subTitle,
  source,
  text,
  text2,
  twisbtn,
  onPress,
  onPressCancel
}: any) => {
  return (
    <Modal isVisible={isVisible}>
      <View
        style={[
          { height: twisbtn ? responsiveHeight(70) : responsiveHeight(60) },
          styles.model
        ]}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Image source={source} resizeMode="contain" style={styles.icon} />
        </View>
        <View style={{ flex: 1, justifyContent: 'space-between' }}>
          <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subTitle}>{subTitle}</Text>
          </View>

          <Buttons style={styles.btn} text={text} onPress={onPress} />
          {twisbtn ? (
            <NormalButton
              bacgroundstyle={[styles.btn, styles.btn2]}
              textStyle={styles.textStyle}
              text={text2}
              onPress={onPressCancel}
            />
          ) : null}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  model: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.boxRadius,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spaceVertical.small,
    paddingHorizontal: responsiveWidth(4)
  },
  icon: {
    width: responsiveWidth(26),
    height: responsiveHeight(12)
  },
  title: {
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.extraLarge0,
    color: colors.black,
    alignSelf: 'center'
  },
  textStyle: {
    fontFamily: fontFamily.semiBold,
    fontSize: fontSize.normal,
    color: colors.green
  },
  subTitle: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.small,
    color: colors.forgotpassgray,
    textAlign: 'center',
    lineHeight:26
  },
  btn: {
    height: responsiveHeight(7),
    borderRadius: 6,
    justifyContent: 'center'
  },
  btn2: {
    borderWidth: 0.4
  }
});
export default Model;
