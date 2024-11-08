import React from 'react';
import { View, Text,StyleSheet, Image,ScrollView } from 'react-native';
import Boat from './components/boat';
const styles = StyleSheet.create({
    title:{
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
        backgroundColor: 'gray',
        color:'white',
        borderWidth:2,
        borderColor: 'black'
    },
    container: {
        flex: 1,
        backgroundColor: 'white', // Setting the main background color
        paddingTop: 20,
    },

    part:{
        backgroundColor: "gray",
        marginLeft:18,
        margin: 10,
        alignContent: "center",
        width:380,
        borderWidth:4,
        borderColor:'black',

    }
})
// AllBoats Component
const AllBoats = () => {
  return (
      <ScrollView style={styles.container}>
        <Text></Text>
        <Text></Text>
        <Text style = {styles.title}>
            GETABOAT-FOR-SALE!
        </Text>
          <View>
              <View style={styles.part}>
                  <Boat title="SEA RAY 500 SUNDANCER" description="Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breathe away." icon_name="sailboat" poster = {require('./img/sea_ray.jpg')} />
              </View>
              <View style={styles.part}>
                  <Boat title="FOUR WINNS HORIZON 180" description={"A Sporty look and refined details truly set the Horizon 180 above the others."} icon_name="sailboat" poster = {require('./img/four_winns.jpg')} />
              </View>
              <View style={styles.part}>
                  <Boat title="Flipper 640 ST" description={"A modern take on the classic, traditional hardtop and perfect for a family picnic."} icon_name="sailboat" poster = {require('./img/flipper.jpg')} />

              </View>
              <View style={styles.part}>
                  <Boat title="Princess V48" description={"There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior."} icon_name="sailboat" poster = {require('./img/princess.jpg')} />
              </View>
              <View style={styles.part}>
                  <Boat title="Bayliner 175 Bowrider" description={"Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance."} icon_name="sailboat" poster = {require('./img/bayliner.jpg')} />
              </View>
              <View style={styles.part}>
                  <Boat title="Fairline Targa 47" description={"Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit."} icon_name="sailboat" poster = {require('./img/fairline.jpg')} />
              </View>
          </View>

      </ScrollView>
  );
};

// Exporting AllBoats as the Parent Component
export default AllBoats;
