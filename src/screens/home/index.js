import React from "react";
import LText from "components/LText"
import Style from "style"

import {
    Button, Content, Text,
    View
} from "native-base";


export default class Index extends React.Component {
    render() {
        const {navigate} = this.props.navigation;

        return (
            <View style={Style.view.content}>
                <Text style={Style.text.h1}> works <LText>bla</LText></Text>
                <View style={Style.view.box}>
                    <Text style={Style.text.h1}> works <LText>bla</LText></Text>
                </View>
            </View>
        );
    }
}

