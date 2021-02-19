import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const InputItems = () => (<div>
 	<TextField
          id="standard-full-width"
          style={{ margin: 8 }}
          placeholder="Добавить задание"
          margin="normal"
          InputLabelProps={{
            shrink: true,
        }}
    />
</div>);

export default InputItems;