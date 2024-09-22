"use client";

import React from 'react';

import { Heading, Text, Flex, Button, Grid, Icon, Background, Avatar, LetterFx } from '@/once-ui/components';
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
				position="relative"
				as="section" overflow="hidden"
				fillWidth minHeight="0"
				direction="row" alignItems="center" flex={1}>
				<Flex
					as="main"
					direction="column" justifyContent="center"
					fillWidth fillHeight padding="l" gap="l">
					<Flex
						mobileDirection="column" direction='row'
						fillWidth gap="24" alignItems='center' align='center'>
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
				</Flex>
			</Flex>

	);
}
