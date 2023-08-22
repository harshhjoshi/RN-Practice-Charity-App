import moment from 'moment';
import React, { useEffect, useRef, useState } from 'react';
import {
  ActivityIndicator,
  Animated,
  FlatList,
  Image,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { io } from 'socket.io-client';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
  colors,
  fontFamily,
  fontSize,
  responsiveWidth
} from '../../styles/variables';
import { styles } from './ChatScreenstyles';
import { Socket_BaseUrl } from '../../utils/URls';

const ChatScreen = ({ navigation, route }: any) => {
  const params = route.params;
  const id = params.chatId;
  const username = params.username;
  const profile_pic = params.profile_pic;
  const scrollViewRef: any = useRef(null);
  const [chatData, setChatData]: any = useState([]);
  const flatListRef = useRef(null);
  const [message, setMessage] = useState('');
  const [loader, setLoader] = useState(false);
  const [onlinestatus, setOnlineStatus] = useState(false);
  const animatedTranslateY = useRef(new Animated.Value(0)).current;
  const [isJoined, setIsJoined] = useState(false);

  const socket = io(Socket_BaseUrl, {
    transports: ['websocket'],
    reconnectionDelayMax: 10000,
    withCredentials: true
  });

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      handleKeyboardShow
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      handleKeyboardHide
    );

    // Clean up the event listeners
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const handleKeyboardShow = () => {
    Animated.timing(animatedTranslateY, {
      toValue: 0, // Adjust the value according to your UI requirements
      duration: 0,
      useNativeDriver: true
    }).start();
  };

  const handleKeyboardHide = () => {
    Animated.timing(animatedTranslateY, {
      toValue: 0,
      duration: 0,
      useNativeDriver: true
    }).start();
  };

  const handleReceiveMessage = async (res: any) => {
    await setChatData((previousChatData: any) => {
      if (previousChatData) {
        return [res, ...previousChatData];
      } else {
        return [res];
      }
    });
  };

  useEffect(() => {
    socket.on('connect', async () => {
      if (!isJoined) {
        socket.emit('join', {}, async (isJoined: any) => {
          if (isJoined) {
            setIsJoined(true);
            socket.emit(
              'getMessageThreadDetail',
              {
                to_user_id: id,
                page: 1,
                pageSize: 10
              },
              (messageThreadDetails: any) => {
                if (messageThreadDetails) {
                  scrollViewRef.current?.scrollToEnd({ animated: true });
                  setChatData(messageThreadDetails?.msgThreadDetail?.data);
                }
              }
            );
          } else {
            console.log('failure');
          }
        });
      }
    });

    const getMessageThreadDetails = () => {};

    socket.on('reciveMessage', handleReceiveMessage);

    getMessageThreadDetails();

    // Clean up the event listener when the component unmounts
    return () => {
      socket.off('userOnline', handleUserOnline);

      socket.off('userOffline', handleUserOffline);
    };
  }, []);

  const handleUserOnline = (resOnline: any) => {
    setOnlineStatus(resOnline?.isOnline);
  };

  const handleUserOffline = (resOffline: any) => {
    setOnlineStatus(resOffline?.isOnline);
  };

  const scrollToBottom = () => {
    if (flatListRef.current) {
      flatListRef.current.scrollToEnd({ animated: true });
    }
  };

  const sendMessage = async (message: string) => {
    setLoader(true);
    await socket.emit(
      'sendMessage',
      {
        to_user_id: id,
        body: message?.replace(/\s+/g, ' ').trim()
      },
      async (res: any) => {
        handleReceiveMessage(res.data);
        setMessage('');
        Keyboard.dismiss();

        setLoader(false);
        scrollToBottom();
      }
    );
  };

  const RenderItem = ({ index, body, createdAt, to_user_id }: any) => (
    <View style={styles.chatView} key={index}>
      {id !== to_user_id ? (
        <TouchableOpacity
          activeOpacity={0.7}
          style={[styles.sender, styles.chatUser]}>
          <Image
            style={styles.image}
            source={
              profile_pic
                ? { uri: profile_pic }
                : require('../../assets/images/profiledetails.png')
            }
          />

          <Text style={[styles.senderMsg, styles.userMsg]}>
            {body} {'  '}
            <Text style={{ fontSize: 10 }}>{createdAt}</Text>
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          activeOpacity={0.7}
          style={[styles.receiver, styles.chatUser]}>
          <Text style={[styles.receiverMsg, styles.userMsg]}>
            {body}
            {'  '}
            <Text style={{ fontSize: 10 }}>{createdAt}</Text>
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );

  useEffect(() => {
    if (chatData?.length > 0) {
      flatListRef.current.scrollToEnd({ animated: true });
    }
  }, [chatData]);

  return (
    <View style={styles.container}>
      <View style={styles.headerComponent}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.iconContainer}>
          <Image
            style={styles.backIcon}
            resizeMode="contain"
            source={require('../../assets/images/Back.png')}
          />
        </TouchableOpacity>
        <Image
          style={[styles.image, { left: 10 }]}
          source={
            profile_pic
              ? { uri: profile_pic }
              : require('../../assets/images/profiledetails.png')
          }
        />
        <View style={{ left: 10 }}>
          <Text
            numberOfLines={1}
            style={{
              fontFamily: fontFamily.medium,
              fontSize: fontSize.normal,
              color: colors.black,
              width: responsiveWidth(60)
            }}>
            {username}
          </Text>
          <Text
            style={{
              fontFamily: fontFamily.medium,
              fontSize: fontSize.small,
              bottom: 5,
              color:
                onlinestatus === true
                  ? colors.simplegreen
                  : colors.forgotpassgray
            }}>
            {/* {onlinestatus === true ? 'online' : 'offline'} */}
          </Text>
        </View>
      </View>
      <KeyboardAwareScrollView>
        <View style={{ flex: 1 }}>
          <Animated.View
            style={[
              styles.mainContainer,
              { transform: [{ translateY: animatedTranslateY }] }
            ]}>
            <FlatList
              ref={flatListRef}
              data={chatData}
              renderItem={({
                item: { body, createdAt, from_user_id, to_user_id, is_read },
                index
              }) => (
                <RenderItem
                  index={index}
                  body={body}
                  createdAt={moment.utc(createdAt).local().format('hh:mm A')}
                  from_user_id={from_user_id}
                  to_user_id={to_user_id}
                  is_read={is_read}
                />
              )}
              showsVerticalScrollIndicator={false}
              inverted={true}
              keyExtractor={(item): any => item.id}
              contentContainerStyle={{
                alignSelf: 'center'
              }}
            />
          </Animated.View>

          <View style={styles.bottomView}>
            <TextInput
              style={styles.input}
              onChangeText={(value: any) => setMessage(value)}
              value={message}
              multiline={true}
              placeholder="Message..."
              placeholderTextColor={colors.white}
              onFocus={() => handleKeyboardShow()} // Adjust the padding when TextInput is focused
              onBlur={() => handleKeyboardHide()} // Reset the padding when TextInput is blurred
            />
            {loader === false ? (
              <TouchableOpacity
                onPress={() => (message ? sendMessage(message) : null)}>
                <Image
                  source={require('../../assets/images/Send.png')}
                  style={styles.sendIcon}
                />
              </TouchableOpacity>
            ) : (
              <ActivityIndicator color={colors.white}></ActivityIndicator>
            )}
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default ChatScreen;
