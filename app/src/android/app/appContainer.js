'use strict';

import React, {Component} from 'react';

/*
import {
    Navigator
} from 'react-native';
*/

import NavigationExperimental from 'react-native-deprecated-custom-components';

import ScrollableTabView, {DefaultTabBar} from 'react-native-scrollable-tab-view';

import Search from '../search/search';
import SearchResults from '../search/searchResults';
import SearchDetails from '../search/searchDetails';
import SearchIMDB from '../search/searchIMDB';
import SearchTrack from '../search/searchTrack';

class AppContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ScrollableTabView
                renderTabBar={() => <DefaultTabBar backgroundColor='white'/>}
            >
                <SearchTab tabLabel="Search"/>
                <Logout tabLabel="Logout"/>
            </ScrollableTabView>
        );
    }
}

class Logout extends Component {
    constructor(props) {
        super(props);

        //appConfig.onLogOut();
    }

    render() {
        return null;
    }
}

class SearchTab extends Component {
	constructor(props) {
		super(props);
		this.routes = [
			{title: 'Search', index: 0},
			{title: 'Search Results', index: 1},
			{title: 'Search Details', index: 2},
			{title: 'Search Track', index: 3}
		];
	}
		  
	renderScene(route, navigator) {
		switch (route.index) {
			case 0: return <Search routes={this.routes} navigator={navigator} />
					break;			
			case 1: return <SearchResults data={route.data} routes={this.routes} navigator={navigator} />
					break;			
			case 2: return <SearchDetails data={route.data} routes={this.routes} navigator={navigator} />
					break;	
			case 3: return <SearchIMDB data={route.data} routes={this.routes} navigator={navigator} />
					break;
			case 4: return <SearchTrack data={route.data} routes={this.routes} navigator={navigator} />
					break
 		}
 	}

    render() {
        return (
            <NavigationExperimental.Navigator
                initialRoute={this.routes[0]}
                initialRouteStack={this.routes}
                renderScene={this.renderScene.bind(this)}
                configureScene={(route, routeStack) =>
                    NavigationExperimental.Navigator.SceneConfigs.PushFromRight}
            />
        )
    }
}

export default AppContainer;