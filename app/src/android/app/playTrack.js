'use strict';

import React, {Component} from 'react';
import {
    WebView
} from 'react-native';

class PlayTrack extends Component {
    constructor(props) {
        super(props);
		
		this.state = {
			url: ''
		};
		
		if (props.data) {
			this.state = {
				url: props.data.url,
				html: 'https://p.scdn.co/mp3-preview/bc8b828e25f52b7ce6b29837870f9c0beec7fe15?cid=null'
			}
		}
    }

    render() {
        return (
            <WebView
                source={{uri: this.state.url}}
				mediaPlaybackRequiresUserAction={false}
            />
        )
    }
}

export default PlayTrack;