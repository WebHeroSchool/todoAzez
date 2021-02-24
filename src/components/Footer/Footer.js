import React from 'react';
import styles from './Footer.module.css';

const Footer = ({ count }) => (<div className={styles.span}>Количество задач, которые необходимо выполнить: { count }</div>);

export default Footer;