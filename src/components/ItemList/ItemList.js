import React from 'react';
import Item from '../Item/items.js';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';
import styles from './ItemList.module.css'

const ItemList = ({items}) => (
  <div>
    <List>{items.map( item => (
      <ListItem className={styles.itm} key={item.value} dense button>
        <Checkbox
          disableRipple
        />
        <ListItemText> <Item value={item.value} isDone={item.isDone}/></ListItemText>
        <ListItemSecondaryAction className={styles.delete}>
        <IconButton aria-label="Comments">
          <DeleteForeverRoundedIcon />
        </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    ))}
    </List>
  </div>);


	export default ItemList;