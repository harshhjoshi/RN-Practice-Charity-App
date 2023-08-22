import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { marginHorizontal, spaceVertical } from '../../styles/variables';
import { styles } from './Audiostyles';
import { audiocall } from '../../data/data';

const Audio = () => {
  type PropsItem = {
    image: any;
    name: any;
    phoneno: any;
    date: any;
    status: any;
    timing: any;
    color: any;
    id: any;
    bgcolor: any;
    calander: any;
    type: any;
  };
  const RenderItem = ({
    image,
    phoneno,
    status,
    date,
    timing,
    bgcolor,
    calander,
    color,
    name,
    id,
    type
  }: PropsItem) => (
    <TouchableOpacity activeOpacity={0.7} style={styles.listview}>
      <Image style={styles.image} source={image} />
      <View
        style={{ alignSelf: 'center', marginLeft: marginHorizontal.semiSmall }}>
        <View style={styles.textview}>
          <View style={{ flexDirection: 'row' }}>
            <Image style={styles.calander} source={calander} />
            <Text style={styles.type}>{date}</Text>
          </View>
          <View style={[styles.flinnerview, { backgroundColor: bgcolor }]}>
            <Text style={[styles.status, { color: color }]}>{status}</Text>
          </View>
        </View>
        <View style={styles.textview}>
          <View>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.time}>
              {phoneno} | {timing}
            </Text>
          </View>
          <Image style={styles.typeimg} source={type} />
        </View>
      </View>
    </TouchableOpacity>
  );
  return (
    <View>
      <FlatList
        data={audiocall}
        renderItem={({
          item: {
            image,
            timing,
            name,
            phoneno,
            date,
            calimage,
            status,
            color,
            id,
            bgcolor,
            type
          }
        }) => (
          <RenderItem
            image={image}
            timing={timing}
            name={name}
            phoneno={phoneno}
            date={date}
            calander={calimage}
            status={status}
            color={color}
            id={id}
            bgcolor={bgcolor}
            type={type}
          />
        )}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item: any) => item.id}
        contentContainerStyle={{
          marginTop: spaceVertical.small,
          alignSelf: 'center',
          paddingBottom: spaceVertical.extraLarge
        }}
      />
    </View>
  );
};

export default Audio;
