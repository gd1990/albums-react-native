import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail'
class AlbumList extends Component {
    state = { albums:[]}
    // AlbumList.state: {
    //     [x: string]: any;
    //     albums: any[];
    // }
    componentWillMount(){
            axios.get('http://postalpincode.in/api/pincode/400072')
            .then(response => this.setState({albums:response.data.PostOffice}))
    }
    renderAlbumName(){
        return this.state.albums.map(album => 
            <AlbumDetail key={album.Name} album={album} />
        // <Text key={album.Name}>{album.Name}</Text>
    )
    }
    render() {
        console.log(this.state.albums)
        return (
            <View>

                {this.renderAlbumName()/* <Text>AlbumList</Text> */}
            </View>
        );
    }
}

export default AlbumList