import "@/once-ui/styles/index.scss";
import "@/once-ui/tokens/index.scss";

import { Flex, Background } from '@/once-ui/components'
import classNames from 'classnames';
import { Inter } from 'next/font/google'
import { Source_Code_Pro } from 'next/font/google';

import Navbar from './navbar'
import Footer from './footer'

const primary = Inter({
	variable: '--font-primary',
	subsets: ['latin'],
	display: 'swap',
})

type FontConfig = {
    variable: string;
};

/*
	Replace with code for secondary and tertiary fonts
	from https://once-ui.com/customize
*/
const secondary: FontConfig | undefined = undefined;
const tertiary: FontConfig | undefined = undefined;
/*
*/

const code = Source_Code_Pro({
	variable: '--font-code',
	subsets: ['latin'],
	display: 'swap',
});

export default function RootLayout({
  	children,
}: Readonly<{
  	children: React.ReactNode;
}>) {
	return (
		<Flex
			as="html" lang="en"
			fillHeight background="page"
			data-theme="dark"
			data-brand="blue"
			data-accent="cyan"
			data-neutral="slate"
			data-border="playful"
			data-solid="contrast"
			data-solid-style="flat"
			data-surface="filled"
			data-transition="all"
			className={classNames(
				primary.variable,
				secondary ? secondary.variable : '',
				tertiary ? tertiary.variable : '',
				code.variable,
				'root')}>

			<Flex
				as="body"
				fillWidth fillHeight margin="0" padding="0">
			<Flex
			fillWidth paddingTop="l" paddingX="l"
			direction="column" alignItems="center" flex={1}>
			<Background
				dots={false}
				gradient={true}
				lines={false}/>
				<Navbar />
				<Flex
					flex={1} direction="row">
					{children}
				</Flex>
				<Footer />
				</Flex>
			</Flex>
		</Flex>
	);
}