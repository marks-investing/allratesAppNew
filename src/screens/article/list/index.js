import React from "react";
import Service from "service/articleService"

import TextStyles from "style/text"

import {
    Button, Content, Text,
    View
} from "native-base";




export default class Index extends React.Component {
    constructor(props){
        super(props);

        this.state={articles:[]};

        Service.getLatestArticles().then(
            response=>this.setState({articles:response})

        );

    }

    render() {
        const {navigate} = this.props.navigation;

        return (
            <View>
                <Text style={TextStyles.h1}>{this.state.number}</Text>
                    {this.state.articles.map(article=>
                        <Text key={article.id}>{article.title}</Text>
                    )}
            </View>
        );
    }
}

