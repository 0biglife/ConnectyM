import React, {useState, useEffect} from 'react';
import {StyleSheet, View, FlatList, ActivityIndicator} from 'react-native';
import styled from 'styled-components/native';
import PostCard from '../../components/PostCard';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding: 10px;
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
      <View>
        <FlatList
          data={feed}
          renderItem={({item}) => <PostCard item={item} />}
          keyExtractor={item => item.articles}
          showsVerticalScrollIndicator={false}
        />
      </View>
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

export default HomeView;
