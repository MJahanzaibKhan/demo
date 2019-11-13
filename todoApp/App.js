import React, { Component } from 'react';
import { View, Image, Text, Slider } from 'react-native';
import { Header, Title, Button, Left, Right, Body, Icon, Footer, FooterTab, Container } from 'native-base';
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      itemValue: 2,
      value: 50
    };
  }
  change(value) {
    this.setState(() => {
      return {
        value: parseFloat(value),
      };
    });
  }



  render() {
    return (
      <View style={{ flex: 4 }}>
        <View style={{ flex: 1.3 }}>
          <Header>
            <Left>
              <Button transparent>
                <Icon name='menu' />
              </Button>
            </Left>
            <Body>
              <Title>Header</Title>
            </Body>
            <Right />
          </Header>
          <View style={{ flexDirection: 'row', flex: 1, borderBottomColor: "blue" }}>
            <View style={{ flex: 0.7 }}>
              <Image source={{ uri: "https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg" }} style={{ width: 150, height: 150 }} />
            </View>
            <View style={{ flex: 0.9 }}>
              <Text style={{ fontWeight: "bold", fontSize: 20 }}>Ipsum dolor sit amet, Lorem, dummy text</Text>
            </View>
          </View>
        </View>
        <View style={{ flex: 2.7 }}>
          <View style={{ flexDirection: 'row', flex: 0.2 }}>
            <Left>
              <Text style={{ fontWeight: "bold" }}>Product Id</Text>
            </Left>
            <Right>
              <Text style={{ fontWeight: "bold" }}>5456646</Text>
            </Right>
          </View>
          <View style={{ flexDirection: 'row', flex: 0.3, alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Button danger style={{ width: 70, height: 70 }}>
                <Icon style={{ fontSize: 35 }} name="trash" />
              </Button>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontSize: 36, fontWeight: "bold", padding: 10 }}>{this.state.itemValue}</Text>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center' }} >
              <Button success style={{ width: 70, height: 70 }}>
                <Icon style={{ fontSize: 35 }} name='add' />
              </Button>
            </View>
          </View>
          <View style={{ flexDirection: 'row', flex: 0.2 }}>
            <Text style={{ fontWeight: "bold" }}>Date:  </Text>
            <Text style={{ fontWeight: "bold", color: "red", padding: 0 }}>02/Nov/2019</Text>
          </View>
          <View>
            <Slider
              minimumValue={-10}
              maximumValue={42}
              minimumTrackTintColor='#1fb28a'
              maximumTrackTintColor='#d3d3d3'
              thumbTintColor='#1a9274'
            />
          </View>
          <View style={{ flexDirection: 'row', flex: 0.2, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>$5,445,22.00</Text>
          </View>
          <View style={{ flexDirection: 'row', flex: 0.1 }}>
            <Left>
              <Button style={{ width: 300, alignItems: 'center', justifyContent: 'center' }} success>
                <Text>Apply</Text>
              </Button>
            </Left>
            <Right>
              <Button danger>
                <Icon name='trash' />
              </Button>
            </Right>
          </View>
        </View >
      </View>

    );
  }
}
