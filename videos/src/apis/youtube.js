import axios from 'axios';

const KEY = 'AIzaSyD51Vlpj7PmPXqmnkx1MsBDifVy_8aoXc4';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: KEY
    }
});