import p from './Post.module.css'


const Post = (props) => {
  
  return (
    <div className={p.posts}>
      <div className={p.circle}>
        <div className={p.circle2}></div>
        <div className={p.circle3}></div>
      </div>
      <div className={p.posts__inner}>
        <p className={p.posts__text}>{props.message}</p>
        <span className={p.like}>Like</span>{props.likesCount}
      </div>
    </div>
  );
};

export default Post;