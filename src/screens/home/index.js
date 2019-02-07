import React from "react";

import TextStyles from "style/text"

import {
    Button, Content, Text,
    View
} from "native-base";




export default class Index extends React.Component {
    render() {
        const {navigate} = this.props.navigation;

        return (
            <View>
                <Text style={TextStyles.h1}>Bye</Text>
                <Button rounded danger onPress={()=>navigate('home2')}>
                    <Text>Danger</Text>
                </Button>
            </View>
        );
    }
}

