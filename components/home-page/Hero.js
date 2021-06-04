import classes from "./Hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/max.png"
          alt="Image of Ashish"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Ashish</h1>
      <p>I blog about Web Development especially about React and NextJs</p>
    </section>
  );
};

export default Hero;
