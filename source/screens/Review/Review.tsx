import React, { useState } from 'react';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Buttons from '../../components/Button';
import HeaderArrow from '../../components/HeaderArrow/HeaderArrow';
import Model from '../../components/Model';
import { btn_yesno } from '../../data/data';
import { colors } from '../../styles/variables';
import { showToast } from '../../utils/commonUtils';
import { reviewSub } from '../../utils/service';
import { styles } from './ReviewStyle';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Review = ({ navigation: { navigate }, route: { params } }: any) => {
  const { appointment_id, reviewed_to, doctor_name, doctor_img } = params;

  const [button, setButton] = useState(1);
  const [defaultRating, setDefaultRating] = useState(1);
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [desc, onChangeDesc] = useState('');
  const [loading, setLoading] = useState(false);

  const submitReview = async () => {
    if (desc) {
      setLoading(true);
      const subReview = await reviewSub({
        payloadData: {
          requestId: '',
          appId: 'MOBILE',
          sessionId: '',
          userId: '',
          isEcnrypt: true,
          requestData: {
            rating: defaultRating,
            description: desc,
            tag: '',
            is_recommended: button == 1 ? 'YES' : 'NO',
            reviewed_to: reviewed_to,
            appointment_id: appointment_id
          },
          appChannelId: 2
        }
      });
      if (subReview?.rc === 0) {
        setLoading(false);
        setModalVisible(!isModalVisible);
        onChangeDesc('');
      } else {
        setLoading(false);
        showToast('Already reviewed');
        onChangeDesc('');
      }
    } else {
      setLoading(false);
      showToast('Please write a comment');
    }
  };

  return (
    <View style={styles.container}>
      <LinearGradient style={{ flex: 1 }} colors={['#F7F0F0', '#E0F0EC']}>
        <Model
          isVisible={isModalVisible}
          text="Go to dashboard"
          title="Completed"
          twisbtn={false}
          source={require('../../assets/images/quote.png')}
          onPress={() => navigate('Tabs')}
          subTitle={'Thanks for Reviewing ' + doctor_name}
        />
        <HeaderArrow title={'Write a review'} />
        <KeyboardAwareScrollView>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 20 }}>
            <Image
              style={styles.doctorimage}
              resizeMode="contain"
              source={
                doctor_img
                  ? { uri: doctor_img }
                  : require('../../assets/images/profiledetails.png')
              }
            />
            <View style={{ alignSelf: 'center' }}>
              <Text style={styles.blackbold}>
                How was your experience with {''}
                <Text style={styles.greybold}>{doctor_name}</Text>
              </Text>
            </View>
            <View style={styles.customstar}>
              {maxRating.map((item, index) => {
                return (
                  <TouchableOpacity
                    activeOpacity={0.7}
                    key={index}
                    onPress={() => setDefaultRating(item)}>
                    <Image
                      style={[
                        styles.starImageStyle,
                        {
                          tintColor:
                            item <= defaultRating ? '#FFA873' : '#79797920'
                        }
                      ]}
                      resizeMode="contain"
                      source={require('../../assets/images/star.png')}
                    />
                  </TouchableOpacity>
                );
              })}
            </View>
            <View style={styles.textview}>
              <Text style={styles.text}>Write a comment</Text>
              <Text style={styles.lighttext}>Max 450 Words</Text>
            </View>
            <TextInput
              style={styles.input}
              maxLength={450}
              placeholder="Tell people about your experience"
              placeholderTextColor={colors.forgotpassgray}
              multiline={true}
              onChangeText={onChangeDesc}
              value={desc.replace(/^\s+/, '')}
            />
            <Text style={[styles.text, styles.textsection]}>
              Would you recommend Dr.{doctor_name} to your friends?
            </Text>
            <View style={styles.tickview}>
              {btn_yesno.map((item: { id: any; text: String }, index: any) => (
                <TouchableOpacity
                  onPress={() => setButton(item.id)}
                  style={styles.tickinnerview}
                  key={index}>
                  <Image
                    style={styles.image}
                    resizeMode="contain"
                    source={
                      item.id == button
                        ? require('../../assets/images/yes.png')
                        : require('../../assets/images/no.png')
                    }
                  />
                  <Text style={styles.text}>{item.text}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <Buttons
              needLoading={loading}
              style={styles.button}
              text={'Submit Review'}
              onPress={() => submitReview()}
            />
          </ScrollView>
        </KeyboardAwareScrollView>
      </LinearGradient>
    </View>
  );
};

export default Review;
