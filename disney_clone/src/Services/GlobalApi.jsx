import axios from 'axios'


const movieBaseUrl = 'https://api.themoviedb.org/3'
const api_key = 'bba97dda397fe253b1b92186c*******'

//https://api.themoviedb.org/3/trending/all/day?api_key=bba97dda397fe2**************

const getTrendingVideo = axios.get(movieBaseUrl +'/trending/all/day?api_key='+ api_key)

export default {
    getTrendingVideo
}