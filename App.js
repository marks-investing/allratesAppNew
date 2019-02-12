import {createAppContainer} from 'react-navigation';
import Navigator from 'navigation/navigator'
import React from "react";

import {Provider} from 'react-redux';
import store from 'helpers/store';

const AppContainer = createAppContainer(Navigator.getNavigator())

class App extends React.Component {

    construct() {

    }

    render() {
        return <Provider store={store}><AppContainer></AppContainer></Provider>

    }

}

export default App;
