import React from 'react';
import TextField from '@material-ui/core/TextField';

const InputItems = () => (<div>
	<TextField
	    id="standard-number"
	    label="Напиши что нибудь для меня"
	    InputLabelProps={{
	    shrink: true,
	    }}
    />
</div>);

export default InputItems;