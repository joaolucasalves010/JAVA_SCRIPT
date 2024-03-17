// 1 - instalação axios
console.log(axios) // Return axios function
// 2 - first request
const getData = async () => {
  try {
    const response = await postsFetch.get(
      "/users",
      // 4 - definindo headers
      {
        headers: {
          "Content-Type": "application/json",
          custon: "header",
        },
      }
    )

    console.log(response)

    return response.data
  } catch (error) {
    console.log(error)
  }
}

getData()

// 3 - imprimindo elementos na tela

const container = document.querySelector("#user-container") // Selecionando container

const printData = async () => {
  const data = await getData()

  data.forEach((user) => {
    const div = document.createElement("div")

    const nameElement = document.createElement("h2")

    nameElement.innerText = user.name

    div.appendChild(nameElement)

    const usernameElement = document.createElement("p")

    usernameElement.innerText = user.username

    div.appendChild(usernameElement)

    container.appendChild(div)
  })
}

printData()

// 5 - requisição post
const form = document.querySelector("#form-post")
const titleInput = document.querySelector("#title")
const bodyInput = document.querySelector("#body")

form.addEventListener("submit", (e) => {
  e.preventDefault()

  postsFetch.post("/posts", {
    body: { title: titleInput.value, body: bodyInput.value, userId: 1 },
  })
})
