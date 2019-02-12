import React from "react";
import LText from "components/LText"
import TextStyles from "style/text"

import {
    Button, Content, Text,
    View
} from "native-base";




export default class Index extends React.Component {
    render() {
        const {navigate} = this.props.navigation;

        return (
                <LText style={TextStyles.h1}>bla</LText>
        );
    }
}

