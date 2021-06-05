import classes from "./Hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    // <section className={classes.hero}>
    //   <div className={classes.image}>
    //     <Image
    //       src="/images/site/hero.jpg"
    //       alt="Image of Ashish"
    //       width={300}
    //       height={300}
    //       quality={100}
    //     />
    //   </div>
    //   <h1>Hi, I'm Ashish</h1>
    //   <p>I blog about Web Development especially about React and NextJs</p>
    // </section>
    // <section>
    //    <Image
    //       src="/images/site/hero.jpg"
    //       alt="Image of Ashish"
    //       width={100}
    //       height={40}
    //       quality={100}
    //       layout="responsive"
    //       objectFit="cover"
    //     />
    // </section>
    <section>
      <div className={classes.header}>
        <div className={classes.sides}>
          {/* <a href="#" className={classes.logo}>
            BLOG
          </a> */}
        </div>
        <div className={classes.sides}>
          {" "}
          {/* <a href="#" className={classes.menu}>
            {" "}
          </a> */}
        </div>
        <div className={classes.info}>
          {/* <h4>
            <a href="#category">All Blogs</a>
          </h4> */}
          <h1>Chemistry Blog</h1>
          <div className={classes.meta}>
            <a
              href="https://www.facebook.com/bits.alchemy/"
              target="_b"
              className={classes.author}
            ></a>
            <br />
            By{" "}
            <a href="https://www.facebook.com/bits.alchemy/" target="_b">
              Ashish AVS
            </a>{" "}
            on 2021
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
