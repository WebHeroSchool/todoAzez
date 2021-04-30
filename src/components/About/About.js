import React from 'react';
import styles from './About.module.css';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Octokit } from '@octokit/rest';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Repositories from '../Repositories/Repositories';
import emailImg from './img/email.svg';
import telegramImg from './img/telegram.svg';
import githubImg from './img/github.svg';
import vkImg from './img/vk.svg';

const octokit = new Octokit();

class About extends React.Component {
	state = {
		isLoading: true,
		isError: false,
		error: 'Возникла ошибка при получении данных',
		user: []
	}

	componentDidMount() {
		octokit.users.getByUsername({
      username: 'AzezAeksandrChernilevskiy'
    }).then(({ data }) => {
			this.setState({
				user: data,
        isLoading: false
			});
		})
		.catch(err => 
			this.setState({
				err: this.state.error,
        isError: true,
        isLoading: false
			})
		);
	}

	render() {
    const { isLoading, isError, error, user} = this.state;

    return (
      <div className={styles.wrap}>
        <Card className={styles.user_card}>
          { isLoading ? <CircularProgress className={styles.preloader} /> :
            <div>
              { isError ? <div className={styles.error}>{error}</div> :
                <div className={styles.inner}>
                  <img src={user.avatar_url} className={styles.avatar} alt='Avatar'></img>
                  <div className={styles.info}>
                    <div className={styles.description}>
                      <p className={styles.name}>{user.login}</p>
                      <p className={styles.bio}>{user.bio}</p>
                      <a className={styles.contact} href='mailto: aleksanderterar@gmail.com'>
                        <img className={styles.contact__img} src={ emailImg } alt='Email'></img>
                        aleksanderterar@gmail.com
                      </a>
                      <a className={styles.contact} href='tg://resolve?domain='>
                        <img className={styles.contact__img} src={ telegramImg } alt='Telegram'></img>
                        @azez_chern
                      </a>
                    </div>
                    <div className={styles.social_networks}>
                      <a href='https://github.com/AzezAeksandrChernilevskiy' target='_blank' rel='noopener noreferrer'>
                          <img src={ githubImg } alt='Github' className={styles.social_networks__img}></img>
                      </a>
                      <a href='https://vk.com/azez1991' target='_blank' rel='noopener noreferrer'>
                          <img src={ vkImg } alt='VK' className={styles.social_networks__img}></img>
                      </a>
                    </div>
                  </div>
                </div>
              }
            </div>
          }
        </Card>
        {<Repositories />}
      </div>
    );
  }
} 

export default About;