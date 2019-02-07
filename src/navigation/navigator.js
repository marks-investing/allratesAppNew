import {createStackNavigator,createDrawerNavigator} from "react-navigation";

import Items from "./items"

export default new(class Navigator {
    getNavigator(){

        var drawer = createDrawerNavigator(
            Items.menu
            ,  {
                initialRouteName: "home",
                contentOptions: {
                    activeTintColor: "#e91e63"
                },

            }
        );


        return createStackNavigator(
            Object.assign({drawer: {screen: drawer}},Items.screens),
            {
                initialRouteName: "drawer",
                headerMode: "none"
            }

        );
    }
})();
