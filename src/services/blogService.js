import * as tokenService from '../services/tokenService'
const BASE_URL = `${process.env.REACT_APP_API_URL}/api/blogs/`

function createBlog (blog) {
    return fetch(BASE_URL, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${tokenService.getToken()}`,
      },
      body: JSON.stringify(blog)
    })
    .then(res => res.json())
  }

const getAll = async () => {
    try {
        const res = await fetch(`${BASE_URL}`)
        return await res.json()
    } catch (error) {
        throw error
    }
  }

export {
    createBlog,
    getAll
}

