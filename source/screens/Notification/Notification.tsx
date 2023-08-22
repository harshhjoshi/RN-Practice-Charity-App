import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import HeaderArrow from '../../components/HeaderArrow/HeaderArrow';
import { notification_data } from '../../data/data';
import { styles } from './Notificationstyles';

const Notification = () => {
  const renderItem = ({ item: { date, subdata } }: any) => (
    <View style={styles.renderItem}>
      <Text style={styles.date}>{date}</Text>
      <View style={styles.renderInsideItem}>
        {subdata.map((i: any) => {
          return (
            <View>
              <View style={styles.renderInside}>
                <View style={[styles.iconsection, { backgroundColor: i.bg }]}>
                  <Image
                    source={i.icon}
                    style={styles.icon}
                    resizeMode="contain"
                  />
                </View>
                <View style={styles.descSection}>
                  <Text style={styles.name}>{i.name}</Text>
                  <Text style={styles.desc}>{i.desc}</Text>
                </View>
              </View>
              {subdata.length !== i.id ? <View style={styles.hr}></View> : null}
            </View>
          );
        })}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#F6F2F1', '#E0F0EC']}>
        <HeaderArrow title={'Notification'} />
        <View style={styles.mainContainer}>
          <FlatList
            data={notification_data}
            renderItem={renderItem}
            keyExtractor={(item: any) => item.id}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.contentContainerStyle}
          />
        </View>
      </LinearGradient>
    </View>
  );
};

export default Notification;
