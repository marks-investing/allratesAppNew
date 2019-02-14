import I18n from "helpers/i18n";
import {StyleSheet} from "react-native";

function getTextStyle() {
    let style = require("./text");
    if (I18n.getDirection() == I18n.directions.rtl) {
        let rtlStyle = require("./text_rtl");
        style = merge(style, rtlStyle);
    }
    console.log("text", style);
    return StyleSheet.create(style);
}

function getViewStyle() {
    let style = require("./view");
    if (I18n.getDirection() == I18n.directions.rtl) {
        let rtlStyle = require("./view_rtl");
        style = merge(style, rtlStyle);
    }
    console.log("view", style);
    return StyleSheet.create(style);
}

function merge(style1, style2) {
    let newStyle = {};
    for (let key in style1) {
        if (style2[key] != undefined) {
            newStyle[key] = Object.assign(style1[key], style2[key]);
        } else {
            newStyle[key] = style1[key];
        }
    }

    for (let key in style2) {
        if (newStyle[key] == undefined) {
            newStyle[key] = style2[key];
        }
    }

    return newStyle;
}

module.exports = {
    text: getTextStyle(),
    view: getViewStyle(),
}
