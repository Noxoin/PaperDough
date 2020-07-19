import React from 'react';
import { BrowserRouter as Router, NavLink, Link, Route, Switch } from 'react-router-dom';
import { Button, Container, Icon, Image, Menu, Segment } from 'semantic-ui-react';
import logo from './logo.svg';
import './PaperDough.css';

import CashflowPage from './cashflow/CashflowPage';
import TransactionsPage from './transactions/TransactionsPage';

function Index() {
	return (
		<header className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
			<p>
				Edit <code>src/App.tsx</code> and save to reload.
			</p>
			<a
				className="App-link"
				href="https://reactjs.org"
				target="_blank"
				rel="noopener noreferrer"
			>
				Learn React
			</a>
		</header>
	);
}

function Header() {
	return (
		<Segment vertical aligned='center' inverted>
			<Container>
				<Menu size="large" inverted pointing secondary className="Menu">
					<Menu.Item as={Link} exact to='/'>
						<Image size='mini' src='https://www.noxoin.com/assets/images/solid-logo.png' alt='logo' />
					</Menu.Item>
					<Menu.Item name='Overview' as={NavLink} to='/overview' />
					<Menu.Item name='Balance' as={NavLink} to='/balance' />
					<Menu.Item name='Cashflow' as={NavLink} to='/cashflow' />
					<Menu.Item name='Transactions' as={NavLink} to='/transactions' />
					{ProfileMenu()}
				</Menu>
			</Container>
		</Segment>
	);
}

function ProfileMenu() {
	return (
		<Menu.Menu
			name='Login and Signup'
			position='right'>
			<Menu.Item name='Log In' />
			<Menu.Item>
				<Button primary>Sign Up</Button>
			</Menu.Item>
		</Menu.Menu>
	);
}

function Footer() {
	return (
		<Segment vertical inverted>
			<Container>
				<Menu inverted secondary>
					<Menu.Item>
						© 2020 Dixon Cheung
					</Menu.Item>
					<Menu.Item position="right">
						<a href="https://ca.linkedin.com/in/dixon-cheung-42472b37">
							<Icon size="large" name="linkedin square" color='grey'></Icon>
						</a>
						<a href="http://www.github.com/Noxoin">
							<Icon size="large" name="github square" color='grey'></Icon>
						</a>
						<a href="http://stackoverflow.com/users/2969219/noxoin">
							<Icon size="large" name="stack overflow" color='grey'></Icon>
						</a>
						<a href="https://open.spotify.com/user/12154825434">
							<Icon size="large" name="spotify" color='grey'></Icon>
						</a>
					</Menu.Item>
				</Menu>
			</Container>
		</Segment>
	);
}

const PaperDough: React.FC = () => {
  return (
    <div id="PaperDough">
			<Router>
				{Header()}
				<Segment vertical>
					<Switch>
						<Route path="/cashflow" component={CashflowPage} />
						<Route path="/transactions" component={TransactionsPage} />
						<Route path="/" component={Index} />
					</Switch>
				</Segment>
				{Footer()}
			</Router>
    </div>
  );
}

export default PaperDough;
