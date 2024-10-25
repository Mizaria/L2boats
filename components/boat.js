import { View, Text, Image,StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";
import AllBoats from "../App";
// Boat Component
const Boat = ({ title, description,icon_name,poster }) => {
    return (
        <View>

            <Text style={styles.title}>
                <Icon name={icon_name} size ={40} color= "#0c3dc4"/>{title}
            </Text>
            <Text style={styles.description}>
                {description}
            </Text>

            <Image source={poster} style={{width:420, height: 500}}/>
        </View>
    );
};

const styles = StyleSheet.create({
    title:{
        fontSize: 24,
        fontWeight: "bold",
        color: "#3894c9"
    },
    description:{
        color:"#2edce8",
        backgroundColor:"black",
    }


})

export default Boat;
