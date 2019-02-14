import React from "react";
import {Text} from "native-base";
import I18n from "helpers/i18n";

class LText extends React.Component {



    render() {
        var props = Object.assign({}, this.props);

        return (<Text {...props}>{I18n.getText(props.children)}</Text>)
    }

}

export default LText;

