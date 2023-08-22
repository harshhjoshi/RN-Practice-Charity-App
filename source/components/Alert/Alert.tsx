import React from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';

import {
  colors,
  responsiveWidth,
  spaceVertical
} from '../../styles/variables';
import { styles } from './Alertstyles';
import { alert } from '../../data/data';

const Alert = ({
  AlertVisible,
  setAlertVisible
}: any) => {

  const logOut = () => {
    setAlertVisible(false);
  };

  const ItemRender = ({ color, bgcolor, name, patient, id }: any) => (
    <View
      style={[
        styles.flatlistview,
        { backgroundColor: id % 2 !== 0 ? colors.white : '#F1F5F9' }
      ]}>
      <View style={[styles.flinnerview, { backgroundColor: bgcolor }]}>
        <Text style={[styles.innertext, { color: color }]}>{name}</Text>
      </View>
      <Text style={styles.patientnum}>{patient}</Text>
    </View>
  );

  return (
    <Modal
      isVisible={AlertVisible}
      animationIn="fadeIn"
      animationOut="fadeOut"
      onBackdropPress={() => setAlertVisible(false)}
      backdropTransitionOutTiming={0}
      backdropTransitionInTiming={0}
      useNativeDriver={true}>
      <View style={styles.alertView}>
        <TouchableOpacity
          style={styles.Alertbutton}
          onPress={() => {
            logOut();
          }}>
          <Image
            style={styles.image}
            source={require('../../assets/images/cross.png')}
          />
        </TouchableOpacity>
        <View style={{ width: responsiveWidth(70), alignSelf: 'center' }}>
          <Text style={styles.Alerttitle}>Status Summary !</Text>
          <View style={styles.modalstatus}>
            <View style={styles.modalheader}>
              <Image
                style={styles.images}
                source={require('../../assets/images/modalimg.png')}
              />
              <Text style={styles.Alertsubtitle}>Status</Text>
            </View>
            <View style={styles.modalheader}>
              <Image
                style={styles.images}
                source={require('../../assets/images/modalimg2.png')}
              />
              <Text style={styles.Alertsubtitle}>Total Patients</Text>
            </View>
          </View>
          <FlatList
            data={alert}
            renderItem={({ item: { bgcolor, color, patient, name, id } }) => (
              <ItemRender
                bgcolor={bgcolor}
                color={color}
                patient={patient}
                name={name}
                id={id}
              />
            )}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item: any) => item.id}
            contentContainerStyle={{
              marginTop: spaceVertical.extraSmall
            }}
          />
        </View>
      </View>
    </Modal>
  );
};

export default Alert;
