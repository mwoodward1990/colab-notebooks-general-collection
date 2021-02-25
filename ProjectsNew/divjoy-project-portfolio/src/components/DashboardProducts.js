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
import EditProductModal from "./EditProductModal";
import { useAuth } from "../util/auth.js";
import { updateProduct, deleteProduct, useProductsByOwner } from "../util/db.js";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paperItems: {
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

function DashboardProducts(props) {
  const classes = useStyles();

  const auth = useAuth();

  const {
    data: products,
    status: productsStatus,
    error: productsError,
  } = useProductsByOwner(auth.user.uid);

  const [creatingProduct, setCreatingProduct] = useState(false);

  const [updatingProductId, setUpdatingProductId] = useState(null);

  const productsAreEmpty = !products || products.length === 0;

  const canUseStar =
    auth.user.planIsActive &&
    (auth.user.planId === "pro" || auth.user.planId === "business");

  const handleStarProduct = (product) => {
    if (canUseStar) {
      updateProduct(product.id, { featured: !product.featured });
    } else {
      alert("You must upgrade to the pro or business plan to use this feature");
    }
  };

  return (
    <>
      {productsError && (
        <Box mb={3}>
          <Alert severity="error">{productsError.message}</Alert>
        </Box>
      )}

      <Paper className={classes.paperItems}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          padding={2}
        >
          <Typography className={classes.text} variant="h5">
            Products CMS UI
          </Typography>
          <Button
            variant="contained"
            size="medium"
            color="primary"
            onClick={() => setCreatingProduct(true)}
          >
            Add Product
          </Button>
        </Box>
        <Divider />

        {(productsStatus === "loading" || productsAreEmpty) && (
          <Box py={5} px={3} align="center">
            {productsStatus === "loading" && <CircularProgress size={32} />}

            {productsStatus !== "loading" && productsAreEmpty && (
              <>Nothing yet. Click the button to add your first product.</>
            )}
          </Box>
        )}

        {productsStatus !== "loading" && products && products.length > 0 && (
          <List disablePadding={true}>
            {products.map((product, index) => (
              <ListItem
                key={index}
                divider={index !== products.length - 1}
                className={product.featured && classes.featured}
              >
                <ListItemText>{product.name}</ListItemText>
                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    aria-label="star"
                    onClick={() => handleStarProduct(product)}
                    className={product.featured && classes.starFeatured}
                  >
                    <StarIcon />
                  </IconButton>
                  <IconButton
                    edge="end"
                    aria-label="update"
                    onClick={() => setUpdatingProductId(product.id)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => deleteProduct(product.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        )}
      </Paper>

      {creatingProduct && <EditProductModal onDone={() => setCreatingProduct(false)} />}

      {updatingProductId && (
        <EditProductModal
          id={updatingProductId}
          onDone={() => setUpdatingProductId(null)}
        />
      )}
    </>
  );
}

export default DashboardProducts;
