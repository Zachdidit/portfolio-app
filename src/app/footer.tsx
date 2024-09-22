import {Text, Flex, Button} from '@/once-ui/components';

export default function Footer() {
	return (
		<Flex
			as="footer"
			position="relative"
			fillWidth paddingX="l" paddingY="m"
			alignItems='center'
			justifyContent="space-between">
			<Text
				variant="body-default-s" onBackground="neutral-weak">
				© 2024 Zachary White
			</Text>
			<Flex alignItems="center"
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
	);
}