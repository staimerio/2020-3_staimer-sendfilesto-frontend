import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import LinearProgress from "@material-ui/core/LinearProgress";
import { makeStyles } from "@material-ui/styles";

/**
 * @param cards numero de barritas de eskeleto que necesita mostrar.
   @param width ancho que tendran en general.
   @param height alto que tendran en general.
   
   NOTA: SE PUEDEN AGREGAR MAS PROPIEDADES O CLASSNAME CON 'IMPORTANT' PARA SOBRE ESCRIBIR 
   PROPIEDADES POR DEFECTO O ASIGNAR PROPIEDADES EXTRA QUE PUEDAN DARSE A UN SKELETON.
 */

const useStyles = makeStyles((theme) => ({
  skeletonColor: {
    backgroundColor: theme.palette.skeleton,
  },
  skeletonLineColor: {
    backgroundColor: theme.palette.skeleton,
    marginBottom: "32px",
  },
}));

export default function SkeletonCards({ linearProgress = true, ...props }) {
  const classes = useStyles();

  const getKeys = () => {
    let Keys = [];
    for (let index = 0; index < props.cards; index++) {
      Keys[index] = `SkeletonCard-${index}`;
    }
    return Keys;
  };

  const defaultProps = {
    animation: "wave",
    variant: "text",
    className: classes.skeletonColor,
  };

  return (
    <div className="p-24">
      {linearProgress && <LinearProgress className={classes.skeletonLineColor} />}
      {getKeys().map((e) => {
        return <Skeleton {...defaultProps} key={e} {...props} />;
      })}
    </div>
  );
}
