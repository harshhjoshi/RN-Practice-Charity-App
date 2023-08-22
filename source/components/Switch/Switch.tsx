import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { styles } from './SwitchStyles';
import { colors } from '../../styles/variables';
import SwitchToggle from 'react-native-switch-toggle';

const Switch =({ on, off, bgcolor, image, name }: any) => {
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity style={styles.renderItem}>
        <View style={styles.leftRender}>
          <View style={[styles.iconsection, { backgroundColor: bgcolor }]}>
            <Image
              source={image}
              style={styles.settingIcon}
              resizeMode="contain"
            />
          </View>
          <View style={styles.settingTitle2}>
            <Text style={styles.name}>{name}</Text>
          </View>
        </View>

        <View style={styles.switchSection}>
          {on ? (
            <Text style={styles.activeText}>On</Text>
          ) : (
            <Text style={styles.activeText}>Off</Text>
          )}
          <SwitchToggle
            switchOn={on}
            onPress={() => off(!on)}
            circleColorOff={colors.lightGray}
            circleColorOn={colors.white}
            backgroundColorOn={colors.projectgreen}
            backgroundColorOff="#C4C4C4"
            containerStyle={styles.switchStyle}
            circleStyle={styles.circleStyle}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Switch;
