import React, { useState, useEffect, useRef } from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import { TextFieldFormsy, } from "@fuse";
// import { withFormsy } from "formsy-react";
/**
 * Campo de Texto multilineas con contador de palabras que limita la cantidad escrita en funcion a maxCount
 * 
 * @param {String} label etiqueta 
 * @param {String} rows cantidad de lineas
 * @param {String} value valor o variable de valor 
 * @param {maxCount} string cantidad maxima de palabras en STRING (importante)
 * @param {bool} required parámetro obligatorio
 * 
 * ejemplo de implementacion
 *  const narracion = {
        id: "opcional",
        name: "opcional",
        label: "Narracion detallada",
        rows:"19",
        value: valuesFormDetalleExpediente.narracion,
        maxCount:2,
  };} 
 */
const useStyles = makeStyles((theme) => ({
  wordCount: {
    // color: theme.palette.black.mediumEmphasis,
    zIndex: 10,
    position: "absolute",
    right: 18,//28,
    bottom: 8,//24,
  },
}));
const TextMultiLIne = ({ maxCount, textError, emptyError, ...props }) => {
  const [palabrasCount, setPalabrasCount] = useState(0);

  const textFieldRef = useRef({});

  const handleChange = (e) => {
    const val = e.target.value;
    const palabras = val.length;
    setPalabrasCount(palabras);
    props.onChange && props.onChange(val);
  };

  useEffect(() => {
    const element = textFieldRef.current ||{}

    if (props.value) setPalabrasCount(props.value.length)
    else if (element.value) setPalabrasCount(element.value.length)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [textFieldRef, props.value]);

  const classes = useStyles();
  return (
    <div className="relative" >
      <Box width={1}>
        <TextFieldFormsy
          {...props}
          variant="filled"
          inputRef={textFieldRef}
          multiline={true}
          fullWidth={true}
          // onBlur={props.onBlur}
          onBlur={(event) =>
            props.onBlur &&
            props.onBlur({
              target: { value: event.target.value, name: props.name },
            })
          }
          onChange={handleChange}
          // {...(textError ? { error: true, helperText: textError } : {})}
          // {...(emptyError && !palabrasCount
          //   ? { error: true, helperText: emptyError }
          //   : {})}
          {...(maxCount ? { inputProps: { maxLength: maxCount } } : {})}
        />
      </Box>
      <Typography
        className={classes.wordCount}
        // style={
        //   textError || (!palabrasCount && emptyError) ? { bottom: 46 } : {}
        // }
        variant="caption"
      >
        {palabrasCount}/{maxCount}
      </Typography>
    </div>
  );
};
export default React.memo(/* withFormsy */(TextMultiLIne));
