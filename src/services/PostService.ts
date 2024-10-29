import { ref,Ref } from "vue"
import IPost from "@/interfaces/IPost"

class PostService {

  // attribute IS LIKE JAVAA!
  private postsList:Ref< Array<IPost> >

  constructor() {
    // init postsList
    this.postsList = ref< Array<IPost> >([])
  }

  getPostsList():Ref< Array<IPost> > {
    return this.postsList
  }

  async fetchAll(): Promise<void> {
    try {
      // define url
      const URL = 'https://jsonplaceholder.typicode.com/posts'
      // get data
      const RESPONSE = await fetch(URL)
      // get json
      const DATA = await RESPONSE.json()
      // set data to posts
      this.postsList.value = await DATA
    } catch (error) {
      // display error
      console.error(error)
    }
  }
}

// export this class
export default PostService