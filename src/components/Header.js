import Link from 'next/link';
import {useRouter} from 'next/router';
import styled, {css} from 'styled-components';

const StyledNavLink = styled.a`
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 20px;
	${({active}) =>
		active &&
		css`
			background: blue;
			color: white;
		`};
`;

function NavLink({path, children}) {
	const {asPath} = useRouter();
	return (
		<Link href={path}>
			<StyledNavLink active={asPath === path}>{children}</StyledNavLink>
		</Link>
	);
}

export default function Header() {
	return (
		<header>
			<nav>
				<NavLink path="/">
					<svg style={{width: '24px', height: '24px'}} viewBox="0 0 24 24">
						<path
							fill="currentColor"
							d="M13 2C11.9 2 11 2.9 11 4C11 5.11 11.9 6 13 6C14.11 6 15 5.11 15 4C15 2.9 14.11 2 13 2M4 7V9H10V15L4.93 20.07L6.34 21.5L13.06 14.77L17 17.13V21H19V16.57C19 16.21 18.82 15.89 18.5 15.71L15 13.6V9H21V7H4Z"
						/>
					</svg>
					Home
				</NavLink>
				<NavLink path="/about">About</NavLink>
			</nav>
		</header>
	);
}
