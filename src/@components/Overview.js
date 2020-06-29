import React, {  } from 'react';
import TextMultiLine from "@components/formBase/TextMultiLine";
import { Box } from "@material-ui/core";

const Overview = (props) => {
  return (
    <Box width={1} className="p-12">
      <TextMultiLine
        {...props}       
      />
    </Box>
);
}

export default React.memo(Overview);