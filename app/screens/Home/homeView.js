import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';

const HomeView = () => {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    fetch(
      'https://newsapi.org/v2/top-headlines?country=us&apiKey=14940aa1b8064dd1826db04e061120b2',
    )
      .then(re => re.json())
      .then(re => {
        setFeed(re.articles);
        console.log(re.articles);
      });
  }, []);

  // componentDidMount() {
  //   this.props.navigation.setOptions({
  //     headerRight: () => (
  //       <IonIcon
  //         name="add"
  //         size={26}
  //         color="black"
  //         style={{
  //           marginRight: 11,
  //         }}
  //         onPress={() => alert('pressed!')}
  //       />
  //     ),
  //   });
  // }

  return (
    <View style={styles.mainView}>
      <View style={styles.mainPostView}>
        {feed.length < 1 ? (
          <ActivityIndicator size={'large'} color={'#2FBBF0'} />
        ) : (
          <FlatList
            data={feed}
            kayExtractor={(item, index) => {
              return item.author.toFixed();
            }}
            renderItem={({item, index}) => (
              <View style={styles.postView}>
                <Text>{item.author}</Text>
              </View>
            )}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  mainPostView: {
    width: '90%',
  },
});

export default HomeView;
