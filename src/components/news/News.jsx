import m from './News.module.css'
const News = () => {
    return (
        <div className={m.container}>
            <h2 className={m.title}>
                We are living in the world, where any dreams can come true
            </h2>
            <article className={m.article} >
                Dreams can come true, and this was Oliver's day.
                The 12-year-old boy has a rare CHRNA7 duplication.
                He finds happiness in his toy school buses, but he's never been inside a real one.
                Each morning on his way to school, he points out each bus he sees with utter excitement.
                With the help and enthusiasm of his family and friends, Oliver's parents were able to arrange
                for their son to climb aboard and experience a ride for himself.
                
                <a className={m.link} href="https://www.youtube.com/embed/5X5ZLWdAnt4"> Watch this video</a>
            </article>
           
        </div>
    )
}
export default News