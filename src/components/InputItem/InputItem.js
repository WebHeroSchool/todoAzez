import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import styles from './InputItem.module.css';

class InputItems extends React.Component {
	state = {
		value:'',
		buttonSent: false
	};

	buttonSend = (event) => {
		this.setState({
			value: event.target.value,
			buttonSent: event.target.value.length > 0
		});
	}
	
	render() {
		const { onClickAdd } = this.props;

		return (<Grid>
		 	<Input
		    id="standard-full-width"
		    style={{ margin: 8 }}
		    placeholder="Добавить задание"
		    margin="normal"
		    fullWidth
		    value={this.state.value}
		    onChange={this.buttonSend}
		  />
		  <Button 
		    noSent={!this.state.buttonSent}
		    variant='contained'
		    color='primary'
		    fullWidth
		    onClick={() => {
		    	if (this.state.value !== '') {
		    		onClickAdd(this.state.value);
		    		this.setState({value: '',
		    			buttonSent: false})}
		    	}
		    }
		  >
		    Жмякай
		  </Button>
		</Grid>);
	}
}

export default InputItems;