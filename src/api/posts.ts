import axios from "axios"

const getPosts = async () => {
  try {
    const posts = axios.get('https://portfolio-be-n946.onrender.com/posts');
    return posts;
  }
  catch(e) {
    console.log(e);
  }
}

const createPost = async (data: any) => {
  try {
    const post = axios.post('https://portfolio-be-n946.onrender.com/posts', data);
    return post;
  }
  catch(e) {
    console.log(e);
  }
}

export { getPosts, createPost };