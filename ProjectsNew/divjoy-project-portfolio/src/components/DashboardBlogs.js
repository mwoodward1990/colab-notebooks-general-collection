import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Alert from "@material-ui/lab/Alert";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import CircularProgress from "@material-ui/core/CircularProgress";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import StarIcon from "@material-ui/icons/Star";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import EditBlogModal from "./EditBlogModal";
import { useAuth } from "../util/auth.js";
import { updateBlog, deleteBlog, useBlogsByOwner } from "../util/db.js";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paperBlogs: {
    minHeight: "300px",
  },
  featured: {
    backgroundColor:
      theme.palette.type === "dark" ? theme.palette.action.selected : "#fdf8c2",
  },
  starFeatured: {
    color: theme.palette.warning.main,
  },
}));

function DashboardBlogs(props) {
  const classes = useStyles();

  const auth = useAuth();

  const {
    data: blogs,
    status: blogsStatus,
    error: blogsError,
  } = useBlogsByOwner(auth.user.uid);

  console.info(blogs)
  const [creatingBlog, setCreatingBlog] = useState(false);

  const [updatingBlogId, setUpdatingBlogId] = useState(null);

  const blogsAreEmpty = !blogs || blogs.length === 0;

  const canUseStar =
    auth.user.planIsActive &&
    (auth.user.planId === "pro" || auth.user.planId === "business");

  const handleStarBlog = (blog) => {
    if (canUseStar) {
      updateBlog(blog.id, { featured: !blog.featured });
    } else {
      alert("You must upgrade to the pro or business plan to use this feature");
    }
  };

  return (
    <>
      {blogsError && (
        <Box mb={3}>
          <Alert severity="error">{blogsError.message}</Alert>
        </Box>
      )}

      <Paper className={classes.paperBlogs}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignBlogs="center"
          padding={2}
        >
          <Typography className={classes.text} variant="h5">
            Blog CMS Admin
          </Typography>
          <Button
            variant="contained"
            size="medium"
            color="primary"
            onClick={() => setCreatingBlog(true)}
          >
            Add Post
          </Button>
        </Box>
        <Divider />

        {(blogsStatus === "loading" || blogsAreEmpty) && (
          <Box py={5} px={3} align="center">
            {blogsStatus === "loading" && <CircularProgress size={32} />}

            {blogsStatus !== "loading" && blogsAreEmpty && (
              <>Nothing yet. Click the button to add your first blog.</>
            )}
          </Box>
        )}

        {blogsStatus !== "loading" && blogs && blogs.length > 0 && (
          <List disablePadding={true}>
            {blogs.map((blog, index) => (
              <ListItem
                key={index}
                divider={index !== blogs.length - 1}
                className={blog.featured && classes.featured}
              >
                <ListItemText>{blog.name}</ListItemText>
                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    aria-label="star"
                    onClick={() => handleStarBlog(blog)}
                    className={blog.featured && classes.starFeatured}
                  >
                    <StarIcon />
                  </IconButton>
                  <IconButton
                    edge="end"
                    aria-label="update"
                    onClick={() => setUpdatingBlogId(blog.id)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => deleteBlog(blog.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        )}
      </Paper>

      {creatingBlog && <EditBlogModal onDone={() => setCreatingBlog(false)} />}

      {updatingBlogId && (
        <EditBlogModal
          id={updatingBlogId}
          onDone={() => setUpdatingBlogId(null)}
        />
      )}
    </>
  );
}

export default DashboardBlogs;
