import React from 'react';
import styles from './About.module.css';
import CardContent from '@material-ui/core/CardContent';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Octokit } from '@octokit/rest';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

const octokit = new Octokit();

class About extends React.Component {
	state = {
		isLoading: true,
		repoList: [],
		hasError: false
	}

	componentDidMount() {
		octokit.repos.listForUser({
  		username: 'AzezAeksandrChernilevskiy'
		}).then(({ data }) => {
			this.setState({
				repolist: data,
				isLoading: false,
				avatarUrl: data[0].owner.avatar_url,
				login: data[0].owner.login
			});
		})
		.catch(err => 
			this.setState({
				hasError: true,
				error:  err,
				isLoading: false
			})
		);
	}

	render() {
		const { isLoading, repolist } = this.state;
		if (this.state.hasError) {
      return (
        <div className={styles.wrap}>
          <h3>{this.state.error.name}</h3>
          <p>{this.state.error.message}</p>
        </div>
      );
    }
		return(
			<CardContent className={styles.wrap}>
				<div>{ isLoading ? <CircularProgress /> : (
					<div>
            <div className={styles.info}>
              <Avatar
                className={styles.avatar}
                alt={this.state.repoList.username}
                src={this.state.avatarUrl}
              />
              <h5 className={styles.login}>{this.state.login}</h5>
            </div>
            <h2 className={styles.title}>Мои Репозитории</h2>
            <ol>
							{this.state.repolist.map(repo => (
								<li key={repo.id}>
									<a href={repo.html_url} className={styles.link}>
										{repo.name}
									</a>
							</li>))}
						</ol>
					</div>
				)}	
        </div>
			</CardContent>
		);
	}
} 

export default About;