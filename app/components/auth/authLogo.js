import React from 'react';
import {View, Image} from 'react-native';

import LogoImage from '../../assets/images/Connecty_logo.png';

const LogoComponent = () => {
  return (
    <View style={{alignItems: 'center', marginBottom: 30}}>
      <Image
        source={LogoImage}
        resizeMode={'contain'} //가로세로 비율 유지. 꽉 채워지도록.
        style={{
          width: 300,
          height: 88,
        }}
      />
    </View>
  );
};

export default LogoComponent;
