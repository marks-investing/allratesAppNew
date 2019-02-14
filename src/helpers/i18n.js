import {Localization} from 'expo-localization';

export default new (class I18N {

    directions={
        ltr:"ltr",
        rtl:"rtl",
    }

    constructor() {

        this.language = Localization.locale.substr(0, 2);
        let resource = require("i18n");
        let strings = resource.en.strings;

        if (this.language != "en" && resource[this.language] != undefined) {
            strings = Object.assign(strings, resource[this.language].strings);
        }

        if (resource[this.language]) {
            this.settings = resource[this.language].settings;
        } else {
            this.settings = resource.en.settings;
        }

        this.strings = strings;
    }

    getDirection(){
        if(this.settings.direction!=undefined){
            return this.settings.direction;
        }
        return this.directions.ltr;
    }

    getText(string) {
        if (this.strings != null && this.strings[string] != undefined) {
            return this.strings[string];
        } else {
            return "{" + string + "}";
        }

    }
});


