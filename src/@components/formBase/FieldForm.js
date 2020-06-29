import React from 'react';

import { TextFieldFormsy } from '@fuse';

import { Grid } from '@material-ui/core';
import styled from 'styled-components';

const StyledField = styled(TextFieldFormsy)`
	border-color: transparent;
	width: calc(100% - 24px);
	margin: 12px;
	// .MuiInputBase-root {
	// 	border-radius: 4px;
	// 	&:before {
	// 		border-bottom: none;
	// 	}
	// }
	.MuiInputLabel-filled {
		font-size: medium;
		font-weight: 500;
	}
`;

/**
 * 
 * @param {name} String nombre del campo
 * @param {required} Boolean si es requerido
 * @param {label} String texto que despliega
 * @param {minLengh} Number cantidad minima de caracteres
 * @param {value} String valor del string, al manejar dentro de fomsy apuntar a su respectivo valor en el form  
 * 
 * Ejemplo Implementacion 
 *          
 *          const campo=
  *          {name:"primer_nombre",
              required:true,
              label:"Primer Nombre",
              minLength:2,
              value:values.primer_nombre,
            }
          ...
           <FieldForm  {...campo} onChange={handleChange}/>
 */
const FieldForm = props => {
	return (
		<Grid item xs={props.xs || 12} sm={props.sm || 6} md={props.md || 4}>
			<StyledField
				{...props}
				{...(props.mensajeError
					? {
							validations: {
								isTrue: true
							},
							validationErrors: {
								isTrue: props.mensajeError
							}
					  }
					: {})}
				//  onChange={props.onChange(props.name)}
				onChange={event =>
					props.onChange &&
					props.onChange({
						target: { value: event.target.value, name: props.name }
					})
				}
				variant="filled"
			/>
		</Grid>
	);
};
export default React.memo(FieldForm);
