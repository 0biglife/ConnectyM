import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native';
import styled from 'styled-components/native';
import IonIcon from 'react-native-vector-icons/Ionicons';

const Container = styled.View`
  background-color: #fff;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

const Card = styled.View`
  background-color: #f8f8f8;
  width: 100%;
  margin-bottom: 20px;
  border-radius: 10px;
`;

const UserInfo = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  padding: 15px;
`;

const UserImg = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

const UserName = styled.Text`
  font-size: 14px;
  font-weight: bold;
  /* font-family: ; */
`;

const UserInfoText = styled.View`
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
`;

const PostTime = styled.Text`
  font-size: 12px;
  color: #666;
`;

const PostText = styled.Text`
  font-size: 14px;
  padding-left: 15px;
  padding-right: 15px;
`;

const PostImg = styled.Image`
  width: 100%;
  height: 250px;
  margin-top: 15px;
`;

const HomeView = () => {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    fetch(
      'https://newsapi.org/v2/top-headlines?country=us&apiKey=14940aa1b8064dd1826db04e061120b2',
    )
      .then(re => re.json())
      .then(re => {
        setFeed(re.articles);
      });
    // .catch(function (error) {
    //   console.log(error.message);
    //   throw error;
    // });
  }, []);

  return (
    <Container>
      <Card>
        <UserInfo>
          <UserImg
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/2017_%EA%B8%B0%EB%A6%AC%EB%B3%B4%EC%9D%B4.jpg',
            }}
          />
          <UserInfoText>
            <UserName>Giriboy</UserName>
            <PostTime>4 hours ago</PostTime>
          </UserInfoText>
        </UserInfo>
        <PostImg
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/2017_%EA%B8%B0%EB%A6%AC%EB%B3%B4%EC%9D%B4.jpg',
          }}
        />
        <PostText>Hello! I'm new in here!</PostText>
      </Card>
    </Container>
    // <View style={styles.mainView}>
    //   <View style={styles.mainPostView}>
    //     {feed.length < 1 ? (
    //       <ActivityIndicator size={'large'} color={'#2FBBF0'} />
    //     ) : (
    //       <FlatList
    //         data={feed}
    //         kayExtractor={item => {
    //           return item.toFixed();
    //         }}
    //         renderItem={({item}) => (
    //           <View style={styles.postView}>
    //             <View style={styles.postTitle}>
    //               <View stlye={styles.ImageView}>
    //                 <Image
    //                   style={styles.profileImgae}
    //                   source={{uri: item.urlToImage}}
    //                 />
    //                 <View style={styles.titleView}>
    //                   <Text style={styles.artist_name}>{item.author}</Text>
    //                 </View>
    //               </View>
    //               <View>
    //                 <IonIcon
    //                   name="ellipsis-vertical"
    //                   color="gray"
    //                   size={16}
    //                 />
    //               </View>
    //             </View>
    //             <Image
    //               stlye={styles.postImage}
    //               source={{ uri: item.urlToImage }}
    //             />
    //           </View>
    //         )}
    //       />
    //     )}
    //   </View>
    // </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  mainPostView: {
    width: '100%',
    // marginBottom: 200,
  },
  postView: {
    width: '90%',
    alignItems: 'center',
    marginTop: 40,
    backgroundColor: 'gray',
  },
  postTitle: {
    width: '90%',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: 'pink',
    alignItems: 'center',
  },
  ImageView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImgae: {
    backgroundColor: 'rgba(0,0,0,0.06)',
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  artist_name: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  titleView: {
    marginLeft: 15,
    justifyContent: 'center',
  },
  postImage: {
    width: '90%',
    height: 200,
    backgroundColor: 'red',
    marginTop: 20,
    borderRadius: 10,
  },
});

export default HomeView;



