import React from 'react';
import classnames from 'classnames';
import styles from '../Item/item.module.css';
import deleteImg from './img/delete.svg';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
// import ListItemText from '@material-ui/core/ListItemText';
// import Checkbox from '@material-ui/core/Checkbox';
// import IconButton from '@material-ui/core/IconButton';
// import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';
// import PropTypes from 'prop-types';

class Item extends React.Component {

  render() {
    const { value, isDone, id, onClickDone, onClickDelete } = this.props;
    return (
      <div className={styles.wrap}>
        <input 
          type='checkbox'
          checked={isDone}
          className={styles.checkbox}/>
        <label 
          htmlFor='checkbox'
          onClick={() => onClickDone(id)}
          className={styles.checkbox_label}
        >
          <div
            className={classnames({
                [styles.item]:true,
                [styles.done]: isDone
            })}
          >
            { value }
          </div>
        </label>
        <button className={styles.btn_delete} onClick={() => onClickDelete(id)}>
          <img src={deleteImg} alt='Delete'/>
        </button>
      </div>);
}
};

export default Item;