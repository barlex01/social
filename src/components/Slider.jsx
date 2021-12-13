import nature from "../nature.jpeg";
import sl from './Slider.module.css';

const Slider = () => {
    return (
        <section className="slider">
            <div className={sl.content__img}>
            <img src={nature} alt="" />
          </div>
        </section>
    )
}
export default Slider;