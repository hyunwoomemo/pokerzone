const BASE_URL = 'https://www.pokerplus.co.kr'

export const resourceApi = {
  posters: () => fetch(`${BASE_URL}/resource/posters`).then((res) => res.json())
}