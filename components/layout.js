import Head from 'next/head';
import Link from 'next/link';

import styled from 'styled-components';

const Sandwich = styled.div`

`

const Sand = styled.div`
	display: flex;
  	flex-wrap: wrap;
  	width: 100%;
  	font-family:'verdana';
`

const Top = styled.div`
  	margin: 0 auto;
  	text-align:center;
  	display:block;
  	font-family:'verdana';
	font-size:20px;
`



const Layout = (props) => (
	<div>
	<Head>
		<title>Hotel App</title>
		<link rel='icon' type='image/png' href='https://i.imgur.com/f0vIMQs.png' />

	</Head>

		<Sandwich>
			<Top>Hotel App</Top>
			<Sand>
				{props.children}
			</Sand>
		</Sandwich>

	</div>
);

export default Layout;

