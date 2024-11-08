import { View, Text, Image,StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";
import AllBoats from "../App";
// Boat Component
const Boat = ({ title, description,icon_name,poster }) => {
    return (
        <View>

            <Text style={styles.title}>
                <Icon name={icon_name} size ={40} color= "lightgray"/>{title}
            </Text>
            <Text style={styles.description}>
                {description}
            </Text>

            <Image source={poster} style={{width:360, height: 450, alignContent: "center", margin: 6.5, borderColor:"black",borderWidth:2}}/>
        </View>
    );
};

const styles = StyleSheet.create({
    title:{
        fontSize: 24,
        fontWeight: "bold",
        color: "white",
        marginLeft:10,
        textAlignVertical:"center",
    },
    description:{
        color:"yellow",
        backgroundColor:"black",
    },



})

export default Boat;
