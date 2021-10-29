import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';

const UserData = [
  {
    id: '1',
    name: 'Giriboy1',
    profileImage:
      'https://upload.wikimedia.org/wikipedia/commons/9/9d/2017_%EA%B8%B0%EB%A6%AC%EB%B3%B4%EC%9D%B4.jpg',
    postImage:
      'https://ko.wikipedia.org/wiki/%EC%A1%B8%EC%97%85%EC%8B%9D_(%EA%B8%B0%EB%A6%AC%EB%B3%B4%EC%9D%B4%EC%9D%98_%EC%9D%8C%EB%B0%98)#/media/%ED%8C%8C%EC%9D%BC:%EA%B8%B0%EB%A6%AC%EB%B3%B4%EC%9D%B4_-_%EC%A1%B8%EC%97%85%EC%8B%9D.jpg',
  },
  {
    id: '2',
    name: 'CJAMM1',
    profileImage:
      'https://ko.wikipedia.org/wiki/%EC%94%A8%EC%9E%BC#/media/%ED%8C%8C%EC%9D%BC:2017_%EC%94%A8%EC%9E%BC.jpg',
    postImage:
      'https://ko.wikipedia.org/wiki/%EA%B3%B5%EC%83%81%EA%B3%BC%ED%95%99%EC%9D%8C%EC%95%85#/media/%ED%8C%8C%EC%9D%BC:%EA%B8%B0%EB%A6%AC%EB%B3%B4%EC%9D%B4_-_%EA%B3%B5%EC%83%81%EA%B3%BC%ED%95%99%EC%9D%8C%EC%95%85.jpg',
  },
  {
    id: '3',
    name: 'Giriboy2',
    profileImage:
      'https://upload.wikimedia.org/wikipedia/commons/9/9d/2017_%EA%B8%B0%EB%A6%AC%EB%B3%B4%EC%9D%B4.jpg',
    postImage:
      'https://ko.wikipedia.org/wiki/%EC%84%B1%EC%9D%B8%EC%8B%9D_(%EA%B8%B0%EB%A6%AC%EB%B3%B4%EC%9D%B4%EC%9D%98_%EC%9D%8C%EB%B0%98)#/media/%ED%8C%8C%EC%9D%BC:%EA%B8%B0%EB%A6%AC%EB%B3%B4%EC%9D%B4_-_%EC%84%B1%EC%9D%B8%EC%8B%9D.jpg',
  },
  {
    id: '4',
    name: 'CJAMM2',
    profileImage:
      'https://ko.wikipedia.org/wiki/%EC%94%A8%EC%9E%BC#/media/%ED%8C%8C%EC%9D%BC:2017_%EC%94%A8%EC%9E%BC.jpg',
    postImage:
      'https://ko.wikipedia.org/wiki/%EA%B3%B5%EC%83%81%EA%B3%BC%ED%95%99%EC%9D%8C%EC%95%85#/media/%ED%8C%8C%EC%9D%BC:%EA%B8%B0%EB%A6%AC%EB%B3%B4%EC%9D%B4_-_%EA%B3%B5%EC%83%81%EA%B3%BC%ED%95%99%EC%9D%8C%EC%95%85.jpg',
  },
];

class HomeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this._addDatatoList(UserData),
    };
  }

  _renderItem = ({item}) => {
    return <HomeItem />;
  };

  _addDatatoList = datas => {
    return datas.map(data => {
      // return Object.assign(data, {key: data.})
    });
  };

  render() {
    return (
      <View>
        <FlatList data={this.state.data.id} _renderItem={this._renderItem} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignCItems: 'center',
    row: {
      flex: 1,
      fontSize: 30,
      padding: 20,
      borderWidth: 1,
      borderColor: 'gray',
    },
  },
});

export default HomeList;
