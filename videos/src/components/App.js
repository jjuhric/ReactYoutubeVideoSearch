import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import youtube from '../apis/youtube';


class App extends React.Component {
    state = { videos: [], selectedVideo: null };

    onVideoSelect = video => {
        this.setState({ selectedVideo: video });
    }

    onFormSubmit = async term => {
        const response = await youtube.get(
            '/search', {
            params: {
                q: term,
            }
        });

        this.setState({ videos: response.data.items });
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar onSubmit={this.onFormSubmit} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
            </div>
        )
    };
}

export default App;