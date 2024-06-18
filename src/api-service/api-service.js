export default class ApiService {
  constructor() {
    this.getId = async () => {
      const url = new URL('search', 'https://aviasales-test-api.kata.academy/')
      const responce = await fetch(url)

      if (responce.ok) {
        const result = responce.json()
        return result
      }

      throw new TypeError(responce.status)
    }

    this.getTickets = async (id) => {
      const url = new URL('tickets', 'https://aviasales-test-api.kata.academy/')
      url.searchParams.set('searchId', id)
      const responce = await fetch(url)

      if (responce.ok) {
        const result = responce.json()
        return result
      }

      throw new TypeError(responce.status)
    }
  }
}
