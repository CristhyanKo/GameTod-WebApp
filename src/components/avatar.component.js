import React, { Component } from 'react'
import { Avatar } from 'antd'
import localStorageVariables from '../localstorage-variables'

var stringToColour = function (str) {
    var hash = 0;
    for (var item = 0; item < str.length; item++) {
        hash = str.charCodeAt(item) + ((hash << 5) - hash);
    }
    var colour = '#';
    for (var itemColor = 0; itemColor < 3; itemColor++) {
        var value = (hash >> (itemColor * 8)) & 0xFF;
        colour += ('00' + value.toString(16)).substr(-2);
    }
    return colour;
}

class AvatarUser extends Component {
    render() {
        return (
            <Avatar size={this.props.size}
                src={(localStorage.getItem(localStorageVariables.avatar) !== 'undefined' && this.props.imageSrc === 'undefined') ? localStorage.getItem(localStorageVariables.avatar) : (this.props.imageSrc === 'undefined') ? '' : this.props.imageSrc}
                style={{ display: (!!localStorage.getItem(localStorageVariables.email)) ? '' : 'none', background: (!!localStorage.getItem(localStorageVariables.nick) ? stringToColour(localStorage.getItem(localStorageVariables.nick)) : ''), fontSize: this.props.fontSize }}
            >
                {((localStorage.getItem(localStorageVariables.avatar) === 'undefined' && this.props.imageSrc === 'undefined') && (!!localStorage.getItem(localStorageVariables.email))) && localStorage.getItem(localStorageVariables.firstName).substring(0, 1).toUpperCase() + localStorage.getItem(localStorageVariables.secondName).substring(0, 1).toUpperCase()}
            </Avatar>
        )
    }
}

export default AvatarUser