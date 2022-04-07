import p from './SectionPost.module.css';
import Posts from './post/Post'

const Post = () => {
  let postMessage = [

    { id: 0,message:"Hello, what's happend here?",likesCount:'0' },
    { id: 1,message:"Don't worry, thats all right)", likesCount:'23' }
   
]
  let postElements = postMessage.map(p =>  <Posts message={p.message} likesCount = {p.likesCount}/>)
  return (
    <section className={p.post}>
      <div className="my-post">
        <h3 className={p.title__post}>My posts</h3>
        <div className="wrapper__textarea">
          <textarea
            className={p.textarea}
            name=""
            id="send"
            cols="30"
            rows="10"
            placeholder="Your post..."
          ></textarea>
          <button className={p.btn__textarea} id="btnSend" type="submit">
            Send
          </button>
        </div>
      </div>

      {postElements}

    </section>
  )
}


export default Post;