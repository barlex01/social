import p from './SectionPost.module.css';
import Posts from './post/Post'

const Post = () => {




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
          <Posts message ="Hello, what's happend here?"/>
          <Posts message ="Don't worry, thsts all right)"/>
          <Posts/>
          <Posts/>
            
          </section>
    )
}


export default Post;