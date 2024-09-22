"use client";

import React from 'react';

import { Heading, Text, Flex, Button, Grid, Icon, Background, Avatar, LetterFx } from '@/once-ui/components';
import Image from 'next/image'
import Link from 'next/link';

export default function Home() {
	const links = [
		{
			href: "/projects",
			title: "Projects",
			description: "What I've worked on",
		},
		{
			href: "mailto:zachdidit@gmail.com",
			title: "Hire Me",
			description: "Let's make something great",
		},
		{
			href: "https://drive.google.com/drive/folders/17nWA6gL9AuTV6rEOZpj9Gxzc1nPEoGPP?usp=sharing",
			title: "Resume",
			description: "",
		}

	];

	return (
		<Flex
			fillWidth paddingTop="l" paddingX="l"
			direction="column" alignItems="center" flex={1}>
			<Background
				dots={false}
				gradient={true}
				lines={false}/>
			<Flex
				position="relative"
				as="section" overflow="hidden"
				fillWidth minHeight="0" maxWidth={85}
				direction="column" alignItems="center" flex={1}>
				<Flex
					as="main"
					direction="column" justifyContent="center"
					fillWidth fillHeight padding="l" gap="l">
					<Flex
						mobileDirection="column"
						fillWidth gap="24">
						<Flex
							position="relative"
							flex={2} paddingTop="0" paddingX="xl">
							 <Avatar
								size="xl"
								src="/images/zachheadshot.png"
								/>
						</Flex>
						<Flex
							position="relative"
							flex={4} gap="24" marginBottom="104"
							direction="column">
							<Heading
								wrap="balance"
								variant="display-strong-s">
								<span className="font-code">
									<LetterFx
										trigger="instant">
										Your vision, perfectly coded
									</LetterFx>
								</span>
							</Heading>
							<Text style={{flex: 1, flexWrap: 'wrap'}}>
							With over a decade of experience in web development, I specialize in creating and optimizing robust e-commerce solutions for high-profile clients. I have a proven track record in managing and leading development teams, enhancing legacy systems, and streamlining release processes. My expertise spans across platforms like Shopify & Salesforce Commerce Cloud, with a strong command of JavaScript, Node.js, React, and more. I excel at solving complex technical challenges and delivering seamless digital experiences that drive business success. Let's collaborate to elevate your online presence with precision and innovation.
							</Text>
						</Flex>
					</Flex>
					<Grid
						radius="l"
						border="neutral-medium"
						borderStyle="solid-1"
						columns="repeat(3, 1fr)"
						tabletColumns="1col"
						mobileColumns="1col"
						fillWidth>
						{links.map((link) => (
							<Link
								target="_blank"
								style={{ padding: 'var(--responsive-space-l)' }}
								key={link.href}
								href={link.href}>
								<Flex
									fillWidth paddingY="8" gap="8"
									direction="column">
									<Flex
										fillWidth gap="12"
										alignItems="center">
										<Text
											variant="body-strong-m" onBackground="neutral-strong">
											{link.title}
										</Text>
										<Icon size="s" name="arrowUpRight" />
									</Flex>
									<Text
										variant="body-default-s" onBackground="neutral-weak">
										{link.description}
									</Text>
								</Flex>
							</Link>
						))}
					</Grid>
				</Flex>
			</Flex>
			<Flex
				as="footer"
				position="relative"
				fillWidth paddingX="l" paddingY="m"
				justifyContent="space-between">
				<Text
					variant="body-default-s" onBackground="neutral-weak">
					© 2024 Zachary White
				</Text>
				<Flex
					gap="12">
					<Button
						href="https://github.com/Zachdidit"
						prefixIcon="github" size="s" variant="tertiary">
						GitHub
					</Button>
					<Button
						href="https://www.linkedin.com/in/zach-white-7a96106/"
						prefixIcon="linkedin" size="s" variant="tertiary">
						Linkedin
					</Button>
				</Flex>
			</Flex>
		</Flex>
	);
}
