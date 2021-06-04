import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  skeletonColor: {
    backgroundColor: "rgba(20, 38, 103, 0.12)",
  },
}));

export default function SkeletonForm({ variant, size, ...props }) {
  const classes = useStyles();

  const renderSkeletonSM = () => (
    <>
    <Skeleton
        animation="wave"
        variant="text"
        style={{ height: 48, maxWidth: 500 }}
        className={classes.skeletonColor}
      />
      <Skeleton
        animation="wave"
        variant="text"
        style={{ height: 130 }}
        className={classes.skeletonColor}
      />
    </>
  );

  const renderSkeleton = () => (
    <>
      <Skeleton
        animation="wave"
        variant="text"
        style={{ height: 48, maxWidth: 500 }}
        className={classes.skeletonColor}
      />
      <Skeleton
        animation="wave"
        variant="text"
        style={{ height: 130 }}
        className={classes.skeletonColor}
      />
      <br />
      <Skeleton
        animation="wave"
        variant="text"
        style={{ height: 48, maxWidth: 500 }}
        className={classes.skeletonColor}
      />
      <Skeleton
        animation="wave"
        variant="text"
        style={{ height: 130 }}
        className={classes.skeletonColor}
      />
      <br />
      <Skeleton
        animation="wave"
        variant="text"
        style={{ height: 48, maxWidth: 500 }}
        className={classes.skeletonColor}
      />
      <Skeleton
        animation="wave"
        variant="text"
        style={{ height: 130 }}
        className={classes.skeletonColor}
      />
    </>
  );

  return size === "SM" ? renderSkeletonSM() : renderSkeleton();
}
