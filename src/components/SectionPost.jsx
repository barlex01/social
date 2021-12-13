import p from './SectionPost.module.css';


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
            <div className={p.posts}>
              <div className={p.circle}>
                <div className={p.circle2}></div>
                <div className={p.circle3}></div>
              </div>
              <div className="posts__inner">
                <p className={p.posts__text}>What's happend there??</p>
              </div>
            </div>
            <div className={p.posts}>
              <div className={p.circle}>
                <div className={p.circle2}></div>
                <div className={p.circle3}></div>
              </div>

              <div className="posts__inner">
                <p className={p.posts__text}>That's all right))</p>
              </div>
            </div>
          </section>
    )
}


export default Post;