import React from 'react';
import classnames from 'classnames';
import styles from '../Item/item.module.css';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';

const Item = ({ value, isDone, onClickDone, id }) => (
	<ListItem className={
		classnames({
			[styles.item]: false,
			[styles.done]: isDone
		})
	}>
		<Checkbox
			onClick={() => onClickDone(id)} 
		/>
		<ListItemText> {value}</ListItemText>
    <ListItemSecondaryAction className={styles.delete}>
      <IconButton aria-label="Comments">
        <DeleteForeverRoundedIcon />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
  );

export default Item;