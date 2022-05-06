import axios from "axios"
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

const github = axios.create({
  baseURL: GITHUB_URL,
  headers: { Authorization: `token ${GITHUB_TOKEN}` },
})

// Get search results
export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  })

  const response = await github.get(`/search/users?${params}`)
  return response.data.items
}

// Get user and repos
export const getUserAndRepos = async (login) => {
  const [user, repos] = await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos`),
  ])

  return { user: user.data, repos: repos.data }
}

// *******Getting initial users (testing purposes)****************

// const fetchUsers = async () => {
//   setLoading()
//   try {
//     const response = await Axios.get(`${GITHUB_URL}/users`, {
//       headers: {
//         Accept: "application/vnd.github.v3+json",
//         Authorization: `token ${GITHUB_TOKEN}`,
//       },
//     })

//     const { data } = await response

//     console.log(data)

//     dispatch({
//       type: "GET_USERS",
//       payload: data,
//     })
//   } catch (e) {
//     console.log({ e })
//   }
// }
