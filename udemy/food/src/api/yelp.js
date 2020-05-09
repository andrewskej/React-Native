import axios from 'axios'

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 'Bearer 59gbs5bNHI4nCRlIW0BYNRAvQw0gNNrZ_P_-sVSHk0PAPLr4If7p0qnCOaIrAZjL7JgSnsP2-IbnxuVjvQwMkZ14pD3N6MbnYr6bqoNPgykcGy553aPjJgNf12yzXnYx'
    }
});

