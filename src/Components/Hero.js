import { useGlobalContext } from "../Context";
import phone from "../images/phone.svg";
const Hero = () => {
  const { closeSubmenu } = useGlobalContext();

  return (
    <section className="hero" onMouseOver={closeSubmenu}>
      <div className="hero-center">
        <article className="hero-info">
          <h1>Payments Infrastructure for the Interner</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
            saepe veniam similique voluptatem dolores officia odit delectus
            incidunt. Consequuntur officiis sed, magnam quos hic eligendi sequi.
            Id voluptatem at dolorum?
          </p>
          <button className="btn">Start</button>
        </article>
        <article className="hero-images">
          <img src={phone} alt="phone" className="phone-img" />
        </article>
      </div>
    </section>
  );
};
export default Hero;
