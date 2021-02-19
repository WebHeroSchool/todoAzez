import React from 'react';
import styles from './Footer.module.css';

const Footer = ({ count }) => (<div className={styles.span}>Мне необходимо выполнить ещё { count } задачи!</div>);

export default Footer;