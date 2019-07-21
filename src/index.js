// import axios here
const axios = require('axios')
const config = require('../config')

console.log(config.API_KEY)


// Please note that it is normally not considered best practice to commit 
// api keys to github as it presents a security risk. It is done here only 
// for practice purposes as we are sharing the same account

const discoverMovie = () => {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${config.API_KEY}`
  return axios(url)
  .then(response => response)
  .catch(function(error) {
    console.log(error)
  })
}
discoverMovie()



const getMovieById = (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${config.API_KEY}`
  return axios(url)
  .then(response => response.data) 
    console.log(response)
}
getMovieById()



const getMovieByIdFailure = () => {
  const fakeId = 5783
  const url = `https://api.themoviedb.org/3/movie/${fakeId}?api_key=${config.API_KEY}`
  return axios(url)
  .then(response => response.status)
  .catch(err => err.response.status)
}
getMovieByIdFailure()



module.exports = {
  discoverMovie,
  getMovieById,
  getMovieByIdFailure
}