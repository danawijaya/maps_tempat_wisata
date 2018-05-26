import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
export default class App extends Component {

  state = {
    region: {
      latitude: -8.149407,
      longitude: 115.216667,
      latitudeDelta: 0.8922,
      longitudeDelta: 0.8421,
    },
    markers : [
      {
        key:1,
        latlng: {
          latitude:-8.489876,
          longitude: 115.263250
        },
        title: 'Desa Visesa Ubud',
        subtitle: 'Salah satu tempat wisata yang berada di Ubud.'
      },
      {
        key:2,
        latlng: {
          latitude:-8.29274,
          longitude: 115.150160
        },
        title: 'Agro Puncak Bedugul',
        subtitle: 'Tempat wisata yang menawarkan keindahan alam dan udara yang segar.'
      },
      {
        key:3,
        latlng: {
          latitude:-8.621202,
          longitude: 115.086803
        },
        title: 'Tanah Lot',
        subtitle: 'Pura tradisional Bali yang terletak di sebuah pulau kecil berbatu & menawarkan pemandangan laut dan bisa sekalian berwisata kesana.'
      }
      ,
      {
        key:4,
        latlng: {
          latitude:-8.275056,
          longitude: 115.166927
        },
        title: 'Danau Beratan',
        subtitle: 'Danau terkenal di tengah alam yang tenang dan menghijau, dengan pura air bersejarah & pemandangan gunung, jadi pas banget berwisata kesini.'
      }
   ]
  };

  render() {
    return (
      <View style={styles.contMain}>
        <View style={styles.contHeader}>
            <Text style={styles.textHeader}>
              Peta Tempat Wisata di Bali
            </Text>
        </View>
        <View style={styles.contMaps}>
              <MapView
                style={styles.map}
                region={this.state.region}
              >
              {this.state.markers.map(mark => (
              <Marker
                  key = {mark.key}
                  coordinate={mark.latlng}
                  title={mark.title}
                  description={mark.subtitle}
                />
              ))}
              </MapView>
        </View>
        <View style={styles.contFooter}>
           <Text style={styles.textFooter}> http://www.dana0302.com </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  contMain: {
      flex : 1
  },
  contHeader: {
    backgroundColor: '#8B0000',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  contMaps : {
    flex : 10
  },
  textHeader: {
    fontSize: 20,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contFooter: {
    backgroundColor: '#8B0000',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  textFooter: {
    fontSize: 16,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }

});