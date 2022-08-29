import Link from 'next/link';
import {useRouter} from 'next/router';
import styled, {css} from 'styled-components';

const StyledNavLink = styled.a`
	cursor: pointer;
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
				<NavLink path="/">Home</NavLink>
				<NavLink path="/about">About</NavLink>
			</nav>
		</header>
	);
}
