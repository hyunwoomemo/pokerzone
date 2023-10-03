const BASE_URL = 'https://www.pokerplus.co.kr'

export const resourceApi = {
  posters: () => fetch(`${BASE_URL}/resource/posters`).then((res) => res.json())
}

export const authApi = {
  login: (data) => fetch(`${BASE_URL}/account/login`, {
    method: 'post',
    body: JSON.stringify({
      email: data.email,
      password: data.password
    })
  }).then((res) => res.json())
}