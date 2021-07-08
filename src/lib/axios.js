import axios from 'axios'

const AUTH_TOKEN =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Y2FiY2YyZmMzMTRmZDYyYzI1NjA0YWMyMzc0ZGNmNyIsInN1YiI6IjVmZGMxYTIwMGYyYWUxMDAzY2RmNmFmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.44RBtjNpot5pmUlrbCRVFULt8PWCECJE5P5VKELxUhg'

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    Authorization: AUTH_TOKEN,
  },
})

export default instance
