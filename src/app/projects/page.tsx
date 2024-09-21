// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
import { Heading, Text, Flex, Button, Grid, Icon, Background, Avatar, LetterFx } from '@/once-ui/components';
import Image from 'next/image'
import Link from 'next/link';

export default function Page() {
	const projects = [
		{
			href: "https://www.netgear.com",
			img: "/images/projects/netgear.png",
			title: "Netgear",
			description: "I served as a Senior Consultant for the Netgear brand, where I supported the daily operations of their website and ensured they remained at the forefront of Salesforce Commerce Cloud (SFCC) technology. My responsibilities included integrating and maintaining payment processors within their checkout system, as well as leveraging Salesforce Open Commerce API (OCAPI) to enhance and support their headless sister site.",
		},
		{
			href: "https://www.vince.com",
			img: "/images/projects/vince.png",
			title: "Vince",
			description: "I provided two years of continuous support and expertise to the Vince brand, focusing on enhancing their e-commerce platform. During this time, I developed a custom blogging system called Our Story, upgraded their homepage to support wide-frame responsive videos, and refactored the entire site to ensure full ADA compliance.",
		},
		{
			href: "https://www.newbalance.com",
			img: "/images/projects/newbalance.png",
			title: "New Balance",
			description: "I collaborated with New Balance to support their legacy e-commerce site, leading the release management process. This involved maintaining GitHub and Bitbucket repositories, structuring release branches, and overseeing the build process for test and production environments using Jenkins.",
		},
		{
			href: "https://www.brookstone.com",
			img: "/images/projects/brookstone.png",
			title: "Brookstone",
			description: "I collaborated with New Balance to support their legacy e-commerce site, leading the release management process. This involved maintaining GitHub and Bitbucket repositories, structuring release branches, and overseeing the build process for test and production environments using Jenkins.",
		},
		{
			href: "https://www.timex.com",
			img: "/images/projects/timex.png",
			title: "Timex",
			description: "With Timex, I led a team of developers, providing ongoing support and consulting expertise to ensure the continuous improvement and success of their projects."
		},
		{
			href: "https://thecincinnatiherald.com/",
			img: "/images/projects/cincyherald.png",
			title: "The Cincinnati Herald",
			description: "I manage the Cincinnati Herald's WordPress site, ensuring it stays updated and accessible to thousands of readers in the Cincinnati area. Additionally, I oversee their social media presence to maintain high levels of engagement with their audience.",
		},

	];
	return (
	<Grid
		radius="l"
		border="neutral-medium"
		borderStyle="solid-1"
		columns="repeat(3, 1fr)"
		tabletColumns="2col"
		mobileColumns="2col"
		fillWidth>
		{projects.map((link) => (
			<Flex direction="row">
				<Flex
					maxWidth={80}  gap="8"
					direction="column">
						<Link
						target="_blank"
						style={{ padding: 'var(--responsive-space-l)' }}
						key={link.href}
						href={link.href}>
						<Image
							src={link.img}
							width={324}
							height={243}
							alt="Picture of the Project"
						/>
						<Flex
							fillWidth gap="12"
							alignItems="center">
							<Text
								variant="body-strong-m" onBackground="neutral-strong">
								{link.title}
							</Text>
							<Icon size="s" name="arrowUpRight" />
						</Flex>
					</Link>
				</Flex>
				<Flex
					maxWidth={30} gap="12"
					alignItems="right">
					<Text
						variant="body-strong-m" onBackground="neutral-strong"  style={{ display: 'none' }}>
						{link.description}
					</Text>
				</Flex>
			</Flex>
		))}
	</Grid>


	);
  }