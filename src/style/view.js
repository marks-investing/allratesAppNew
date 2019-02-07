import {StyleSheet} from "react-native";

export default StyleSheet.create(
    {
        "box": {
            backgroundColor: "#eee",
            borderWidth: 0.5,
            borderRadius: 4,
            borderColor: "#ccc",
            margin: 5,
            padding: 10
        },



        "row": {
            flexDirection: 'row',
            marginLeft:-20
        },

        "col1": {
            flex: 1,
            paddingLeft:20,
        },
        "col2": {
            flex: 2,
            paddingLeft: 20
        },
        "col3": {
            flex: 3,
            paddingLeft: 20,
        },
        "col4": {
            flex: 4,
            paddingLeft:20
        }


    }
);
