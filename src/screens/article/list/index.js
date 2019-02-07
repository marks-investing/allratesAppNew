import React from "react";
import Service from "service/articleService"

import Style from "style"

import {
    Button, Content, Text,
    View
} from "native-base";

import {ScrollView,Image} from "react-native"




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
                <Text style={Style.text.h1}>test</Text>
                <ScrollView>
                    {this.state.articles.map(article=>
                        <View style={Style.view.box} key={article.id} onStartShouldSetResponder={(evt) => true}  onResponderRelease={()=>{console.log('You tapped the button!');}}>
                            <View style={Style.view.row}>
                                <View style={Style.view.col1}>
                                  <Image style={{width:"100%",height:100}} resizeMode={"cover"} source={{uri:article.image}}></Image>
                                </View>
                                <View style={Style.view.col3}>
                                    <Text style={Style.text.h2}>{article.title}</Text>
                                    <Text style={Style.text.paragraph}>{article.subtitle}</Text>
                                </View>
                            </View>
                        </View>
                    )}
                </ScrollView>
            </View>
        );
    }
}

