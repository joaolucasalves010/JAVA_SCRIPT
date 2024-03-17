// 7 - custom instace

// não é recomendado utilizar global instace e custom instace

const postsFetch = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    Accept: "application/json",
    Authorization: "MeuNovoToken",
  },
})
