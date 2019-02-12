import React from "react";
import {Text} from "native-base";
import I18n from "helpers/i18n";

class LText extends React.Component {

    construct() {

    }

    render() {
        var props = Object.assign({}, this.props);
        let text = I18n.getText(props.children);
        return (<Text {...props}>{text}</Text>)
    }

}

export default LText;

