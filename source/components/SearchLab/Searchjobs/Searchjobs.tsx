import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import Dropdowns from '../../Dropdowns';
import{search_jobs,Pending_dropdow} from '../../../data/data';
import {styles} from './SearchJobsStyles';

const Searchjobs = () => {
  const [pressId, setPressId]: any = useState('');
  const [selected, setSelected]: any = useState('Pending');

  const renderItem = ({item}: any) => (
    <View style={styles.renderContainer}>
      <View style={styles.renderItem}>
        <View style={styles.renderContain}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.priorty}>
            Job ID:
            <Text style={styles.priortyText}> {item.JobID}</Text>{' '}
          </Text>
        </View>
        <TouchableOpacity onPress={() => renderPress(item)}>
          {item.id == pressId.id ? (
            <Image
              source={require('../../../assets/images/up.png')}
              style={styles.arrowIcon}
            />
          ) : (
            <Image
              source={require('../../../assets/images/down.png')}
              style={styles.arrowIcon}
            />
          )}
        </TouchableOpacity>
      </View>
      {item.id == pressId.id ? (
        <View style={styles.renderDetails}>
          <View style={[styles.details, styles.bg]}>
            <Text style={styles.branchTitle}>Date</Text>
            <Text style={styles.branchdetails}>10 June,2022</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.branchTitle}>Test ID</Text>
            <Text style={styles.branchdetails}>T_1</Text>
          </View>

          <View style={[styles.details, styles.bg]}>
            <Text style={styles.branchTitle}>Test Group </Text>
            <Text style={styles.branchdetails}>-</Text>
          </View>

          <View style={styles.details}>
            <Text style={styles.branchTitle}>Result Status</Text>
            <View>
              <Dropdowns
                data={Pending_dropdow}
                dropdownStyle={styles.dropdownStyle}
                selectedTextStyle={styles.selectedTextStyle}
                value={selected}
                onChange={(item: any) => {
                  setSelected(item);
                }}
              />
            </View>
          </View>
          <View style={[styles.details, styles.bg]}>
            <Text style={styles.branchTitle}>Price</Text>
            <Text style={styles.branchdetails}>$100</Text>
          </View>
        </View>
      ) : (
        <></>
      )}
    </View>
  );

  const renderPress = (item: any) => {
    if (item == pressId) {
      setPressId('');
    } else {
      setPressId(item);
    }
  };
  return (
    <View style={{flex:1}}>
      <FlatList
        data={search_jobs}
        renderItem={renderItem}
        keyExtractor={(item: any) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </View>
  );
};

export default Searchjobs;