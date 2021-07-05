import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Image,
} from 'react-vr';

export default class NewProject extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('14.jpg')}/>
        <Image
         style={{
           height: 1.5,
            width: 1.8,
            layoutOrigin: [0.5, 0.5],
           transform: [{translate: [0, 0, -3]}]
          }}
         source={asset('sitting lady.png')}
       />

        <Image
         style={{
           height: 1.9,
            width: 1.6,
            layoutOrigin: [-0.5, 1.5],
           transform: [{translate: [0, -0.5, -5]}]
          }}
         source={asset('img2.png')}
       />
         
        <Image
         style={{
           height: 1.6,
            width: 1.4,
            layoutOrigin: [0.3, 4.5],
           transform: [{translate: [1, -1, -10]}]
          }}
         source={asset('Bubble.png')}
       />

         <Image
         style={{
           height: 2,
            width: 2,
            layoutOrigin: [1.5, 3.5],
           transform: [{translate: [0, -1, -5]}]
          }}
         source={asset('cashier.png')}
       />

       <Image
         style={{
           height: 2.6,
            width: 2.5,
            layoutOrigin: [-1.5, 3.5],
           transform: [{translate: [0, -1, -5]}]
          }}
         source={asset('loan.png')}
       />

    
       {/* <Image
         style={{
           height: 2.2,
            width: 2,
            layoutOrigin: [3, 2.5],
           transform: [{translate: [0, 0, -3]}]
          }}
         source={asset('talk.png')}
       /> */}
    
      
      


        {/* <Text
          style={{
            backgroundColor: '#777879',
            fontSize: 0.8,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 0, -3]}],
          }}>
          Welcome
        </Text> */}
      </View>
    );
  }
};

AppRegistry.registerComponent('NewProject', () => NewProject);
