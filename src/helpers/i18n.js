import { DangerZone } from 'expo';

export default new (class I18N {
    language;
    strings;


    constructor() {
        async ()=>{
            this.language = await Expo.DangerZone.Localization.getCurrentLocaleAsync();
            //load strings
            let resource=require("resources/text");
            let strings=resource.en;
            if(this.language!="en" && resource[this.language]!="undefined"){
                strings=Object.assign(strings,resource[this.language]);
            }
            this.strings = strings;
        }
    }

    getText(string) {
        if (this.strings[string] != undefined) {
            return this.strings[string];
        } else {
            return "{" + string + "}";

        }

    }
});


