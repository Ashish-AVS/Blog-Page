import classes from "./Hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <section>
      <div className={classes.header}>
        <div className={classes.sides}>
        </div>
        <div className={classes.sides}>
        </div>
        <div className={classes.info}>
          <h1>Chemazines</h1>
          <div className={classes.meta}>
            <a
              href="https://www.facebook.com/bits.alchemy/"
              target="_b"
              className={classes.author}
            ></a>
            <br />
            {/* <Image src="/images/site/profileimg.jpg" layout="fill"/> */}
            By
            <a href="https://www.facebook.com/bits.alchemy/" target="_b">
               {" "}Alchemy BPHC
            </a>{" "}
            on 2021
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
