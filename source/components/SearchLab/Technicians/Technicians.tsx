import { View, Text, FlatList, Image } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { technicians } from '../../../data/data';
import { styles } from './TechniciansStyles';

const Technicians = () => {
  const renderItem = ({ item: { name, jobsCompleted } }: any) => (
    <View>
      <View style={styles.renderItem}>
        <View style={styles.renderContain}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.priorty}>
            Jobs Completed:
            <Text style={styles.priortyText}> {jobsCompleted}</Text>
          </Text>
        </View>
      </View>
    </View>
  );

  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Technician details</Text>
        <TouchableOpacity>
          <Image
            source={require('../../../assets/images/edit.png')}
            resizeMode="contain"
            style={styles.selectIcon}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        data={technicians}
        renderItem={renderItem}
        keyExtractor={(item: any) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </View>
  );
};

export default Technicians;