import Link from "next/link";
import Image from "next/image";
// import classes from "./posts-item.module.css";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff",
  },
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80')`,
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",
    [theme.breakpoints.down("sm")]: {
      height: 300,
      fontSize: "3em",
    },
  },
  blogsContainer: {
    paddingTop: theme.spacing(3),
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3),
  },
  card: {
    maxWidth: "100%",
  },
  media: {
    height: 240,
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between",
  },
  author: {
    display: "flex",
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "center",
  },
}));

export default function PostItem(props) {
  const { title, image, excerpt, slug, date } = props.post;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const imagePath = `/images/posts/${image}`;
  const linkPath = `/posts/${slug}`;

  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card}>
      <Link href={linkPath}>
        <CardActionArea>
          <CardMedia>
          {console.log(imagePath)}
            <Image
              src={imagePath}
              // src="/images/posts/test.jpg"
              alt={title}
              width={300}
              height={220}
              layout="responsive"
            />
          </CardMedia>

          <CardContent>
            <Typography gutterBottom variant="h5" component="h4">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {excerpt}
            </Typography>
          </CardContent>
        </CardActionArea>
        </Link>
        <CardActions className={classes.cardActions}>
          <Box className={classes.author}>
            <Avatar src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
            <Box ml={2}>
              <Typography variant="subtitle2" component="p">
                Ashish
              </Typography>
              <Typography
                variant="subtitle2"
                color="textSecondary"
                component="p"
              >
                {formattedDate}
              </Typography>
            </Box>
          </Box>
          <Box>
            <BookmarkBorderIcon />
          </Box>
        </CardActions>
      </Card>
    </Grid>
    // <li className={classes.post}>
    //   <Link href={linkPath}>
    //     <a>
    //       <div className={classes.image}>
    //         <Image
    //           // src={imagePath}
    //           src="/images/posts/test.jpg"
    //           alt={title}
    //           width={390}
    //           height={220}
    //           layout="responsive"
    //         />
    //       </div>
    //       <div className={classes.content}>
    //         <h3>{title}</h3>
    //         <p>{excerpt}</p>
    //         <time>{formattedDate}</time>
    //         <p>Ashish</p>
    //       </div>
    //     </a>
    //   </Link>
    // </li>
  );
}
