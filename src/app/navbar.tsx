import { Text, Flex, Grid, Icon } from "@/once-ui/components";
import Link from "next/link";

export default function Navbar() {
  const links = [
    {
      href: "/",
      title: "Home",
      description: "",
    },
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
    },
  ];

  return (
    <Flex
      position="relative"
      as="nav"
      overflow="hidden"
      fillWidth
      direction="row"
      alignItems="start"
      flex={1}
    >
      <Grid
        radius="l"
        border="neutral-medium"
        borderStyle="solid-1"
        columns="repeat(4, 1fr)"
        tabletColumns="1col"
        mobileColumns="1col"
        fillWidth
      >
        {links.map((link) => (
          <Link
            target={link.title == "Resume" ? "_blank" : ""}
            style={{ padding: "var(--responsive-space-l)" }}
            key={link.href}
            href={link.href}
          >
            <Flex fillWidth gap="8" direction="column">
              <Flex fillWidth gap="12" alignItems="center">
                <Text variant="body-strong-m" onBackground="neutral-strong">
                  {link.title}
                </Text>
                <Icon size="s" name="arrowUpRight" />
              </Flex>
              <Text variant="body-default-s" onBackground="neutral-weak">
                {link.description}
              </Text>
            </Flex>
          </Link>
        ))}
      </Grid>
    </Flex>
  );
}
