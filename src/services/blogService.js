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

function update(blog, blogID) {
    return fetch(`${BASE_URL}update/${blogID}`, {
      method: 'PATCH',
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


function createComment (comment) {
  console.log('about to send new comment to backend...comment: ', comment)
    return fetch(`${BASE_URL}${comment.blog_id}/comment/new/`, {
      method: 'PUT',
      headers: {
        // "Access-Control-Allow-Origin":"*",
        // "mode":"cors",
        "Content-Type": "application/json",
        'Authorization': `Bearer ${tokenService.getToken()}`,
      },
      body: JSON.stringify(comment)
    })
    .then(res => res.json())
  }

function deleteBlog(id) {
    return fetch(`${BASE_URL}${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
      },
    })
    .then(res => res.json())
  }
export {
    createBlog,
    getAll,
    createComment,
    update,
    deleteBlog as delete
}

