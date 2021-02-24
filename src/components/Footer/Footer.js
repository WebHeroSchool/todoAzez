import React from 'react';
import styles from './Footer.module.css';

const Footer = ({ count }) => (<div className={styles.span}>Количество задач, которые необходимо выполнить: { count }</div>);

Footer.defaultProps = {
	count: 0
};

export default Footer;