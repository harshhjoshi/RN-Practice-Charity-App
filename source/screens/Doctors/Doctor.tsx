import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Platform,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import LinearGradient from 'react-native-linear-gradient';
import HeaderArrow from '../../components/HeaderArrow/HeaderArrow';
import Input from '../../components/SearchInput';
import {
  colors,
  fontFamily,
  fontSize,
  responsiveHeight,
  responsiveWidth
} from '../../styles/variables';
import { showToast } from '../../utils/commonUtils';
import { getAllbranch, PatientAllDoctors } from '../../utils/service';
import { styles } from './DoctorStyles';
import { useDispatch } from 'react-redux';
import { setBranchStatus } from '../../redux/Slice/UserSlice';

const Doctor = ({ navigation }: any) => {
  const [alldoctors, setAllDoctors] = useState<any[]>([]);
  const [search, setSearch] = useState('');
  const [branches, setBranch] = useState('');
  const [branch, setallbranch] = useState<any[]>([]);
  const [loginloading, setloginloading] = useState(false);
  const dispatch = useDispatch();

  const Booking = (_id: any) => {
    branches !== ''
      ? navigation.navigate('DoctorDetail', { _id: _id })
      : showToast('Please Select Branch');
  };

  const getallDoctors = async (search: string, branches: any) => {
    setSearch(search);
    setloginloading(true);
      const alldoctor_api = await PatientAllDoctors({
        payloadData: {
          requestData: {
            page: 1,
            search: search,
            branch: branches
          }
        }
      });
      if (alldoctor_api.rc === 0) {
        setloginloading(false);

        setAllDoctors(alldoctor_api?.payloadResponse?.data?.data);
      } else {
        setloginloading(false);
        {
          alldoctor_api?.payloadResponse?.error[0]?.message === 'Not authorize'
            ? showToast('Please setup your profile first')
            : showToast(alldoctor_api?.payloadResponse?.error[0]?.message);
        }
      }
  };

  const getbranch = async () => {
      const allBranch = await getAllbranch({
        payloadData: {
          requestData: {
            search: '',
            page: 0,
            pageSize: 30
          }
        }
      });

      if (allBranch?.rc === 0) {
        let branchesList: any = [];
        for (let i = 0; i < allBranch.payloadResponse.data.data.length; i++) {
          branchesList.push({
            label: allBranch.payloadResponse.data.data[i].name,
            value: allBranch.payloadResponse.data.data[i]._id
          });
        }
        setallbranch(branchesList);
      } else {
        console.log('error in doctor', allBranch.payloadResponse.error);
      }
  };

  // useEffect(() => {
  //   const unsubscribe = navigation.addListener('focus', () => {
  //     getbranch();
  //     setBranch('');
  //     getallDoctors(search, branches);
  //   });
  //   return unsubscribe;
  // }, [navigation]);

  const onchangeBranch = (selectedItem: any) => {
    setBranch(selectedItem);
    dispatch(setBranchStatus(selectedItem));

    getallDoctors('', selectedItem);
  };

  type PropsItem = {
    doctor_name: string;
    profile_pic: any;
    name: string;
    avg_rating: any;
    _id: any;
    rating_count: any;
  };
  const RenderItem = ({
    doctor_name,
    profile_pic,
    name,
    avg_rating,
    rating_count,
    _id
  }: PropsItem) => (
    <TouchableOpacity
      onPress={() => Booking(_id)}
      activeOpacity={0.7}
      style={styles.listview}>
      <Image
        style={styles.image}
        source={
          profile_pic && !Array.isArray(profile_pic)
            ? { uri: profile_pic }
            : require('../../assets/images/profiledetails.png')
        }
      />

      <View style={styles.leftRender}>
        <Text numberOfLines={1} style={styles.name}>
          {doctor_name}
        </Text>

        <View
          style={{
            flexDirection: 'row',
            marginTop: Platform.OS === 'ios' ? 10 : 0
          }}>
          <Image
            style={styles.star}
            source={require('../../assets/images/star.png')}
          />
          <Text style={styles.time}>
            {avg_rating} ({rating_count} Review)
          </Text>
        </View>
        <View
          style={{
            width: responsiveWidth(60),
            marginTop: Platform.OS === 'ios' ? 10 : 0
          }}>
          <Text style={styles.types}>{name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <LinearGradient style={{ flex: 1 }} colors={['#FFF', '#FFF']}>
        <HeaderArrow title={'Search'} />
        {/* <View style={styles.outersearchview}>
          <Input
            value={search}
            width={responsiveWidth(90)}
            placeholder={'Search doctor. . .'}
            onChangeText={(text: string) => getallDoctors(text, branches)}
          />
          <Dropdown
            style={styles.dropdown}
            containerStyle={{ borderRadius: 10, width: 140 }}
            placeholderStyle={{
              fontSize: fontSize.normal,
              color: '#777A95',
              fontFamily: fontFamily.regular,
              // textAlign: 'center',
              // end: Platform.OS === "ios" ? 12: 0
            }}
            selectedTextStyle={styles.dropdowntext}
            data={branch}
            maxHeight={140}
            labelField="label"
            valueField="value"
            placeholder={'Branches'}
            value={branches}
            onChange={item => {
              setSearch('');
              onchangeBranch(item.value);
              setloginloading(true);
            }}
          />
        </View> */}

        {!loginloading ? (
          <>
            {alldoctors?.length === 0 ? (
              <View style={{ justifyContent: 'center', flex: 1 }}>
                <Text
                  style={{
                    fontFamily: fontFamily.medium,
                    fontSize: fontSize.medium,
                    color: colors.black,
                    alignSelf: 'center',
                    marginTop: -50
                  }}>
                  Exciting Developments Underway 🚀
                </Text>
              </View>
            ) : !alldoctors ? (
              <Text
                style={{
                  alignSelf: 'center',
                  fontSize: 18,
                  marginTop: 15,
                  fontFamily: fontFamily.regular
                }}>
                No any Doctors Available
              </Text>
            ) : (
              <FlatList
                data={alldoctors}
                renderItem={({
                  item: {
                    doctor_name,
                    profile_pic,
                    specialities,
                    avg_rating,
                    rating_count,
                    _id
                  }
                }) => (
                  <RenderItem
                    doctor_name={doctor_name || 'Doctor'}
                    profile_pic={profile_pic}
                    name={specialities[0]?.name || 'No any Specialities'}
                    avg_rating={avg_rating || '0'}
                    rating_count={rating_count || '0'}
                    _id={_id}
                  />
                )}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item: any) => item.id}
                contentContainerStyle={styles.contentContainerStyle}
              />
            )}
          </>
        ) : (
          <ActivityIndicator
            style={{ justifyContent: 'center', top: responsiveHeight(30) }}
            size="large"
            color={colors.simplegreen}
          />
        )}
      </LinearGradient>
    </View>
  );
};

export default Doctor;
