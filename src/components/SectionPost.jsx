


const Post = () => {
    return (
        <section className="post">
            <div className="my-post">
              <h3 className="title__post">My posts</h3>
              <div className="wrapper__textarea">
                <textarea
                  className="textarea"
                  name=""
                  id="send"
                  cols="30"
                  rows="10"
                  placeholder="Your post..."
                ></textarea>
                <button className="btn__textarea" id="btnSend" type="submit">
                  Send
                </button>
              </div>
            </div>
            <div className="posts">
              <div className="circle">
                <div className="circle2"></div>
                <div className="circle3"></div>
              </div>
              <div className="posts__inner">
                <p className="posts__text">What's happend there??</p>
              </div>
            </div>
            <div className="posts">
              <div className="circle">
                <div className="circle2"></div>
                <div className="circle3"></div>
              </div>

              <div className="posts__inner">
                <p className="posts__text">That's all right))</p>
              </div>
            </div>
          </section>
    )
}


export default Post;