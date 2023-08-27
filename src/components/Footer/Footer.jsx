import { createStyles, Text, Container, ActionIcon, Group, rem } from '@mantine/core';
import { IconBrandLinkedin, IconBrandInstagram } from '@tabler/icons-react';
import footerGroups from '../../utils/footerGroups';
import footerUsefulLinksItems from '../../utils/footerUsefulLinksItems';
import { useNavigate } from "react-router-dom";
import "./Footer.scss";


const useStyles = createStyles((theme) => ({
  footer: {
    position: "relative",
    bottom: 0,
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  logo: {
    maxWidth: rem(200),

    [theme.fn.smallerThan('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },

  description: {
    marginTop: rem(5),

    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xs,
      textAlign: 'center',
    },
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },

  groups: {
    display: 'flex',
    flexWrap: 'wrap',

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  wrapper: {
    width: rem(160),
  },

  link: {
    display: 'block',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
    paddingTop: rem(3),
    paddingBottom: rem(3),

    '&:hover': {
      textDecoration: 'underline',
    },
  },

  title: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: `calc(${theme.spacing.xs} / 2)`,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },

  afterFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },

  social: {
    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xs,
    },
  },
}));



const Footer = () => {
  const { classes } = useStyles();
  const navigate = useNavigate(); 

  const groups = footerGroups.map(() => {
    const links = footerUsefulLinksItems.map((link, index) => (
      <>
        <Text
          key={index}
          className={classes.link}
          component="a"
          href={link.link}
          onClick={(event) => {event.preventDefault(); navigate(link.link);}}
        >
          {link.label}
        </Text>
      </>
    ));

    return (
      <div className={classes.wrapper} key={footerGroups}>
        <Text className={classes.title}>{footerGroups}</Text>
        {links}
      </div>
    );
  });

  return (
    <>
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <Text className="logoName">IETE Chennai</Text>
          <Text size="xs" color="dimmed" className={classes.description}>
            Phone: 044 2835 0773<br/>
            Email: ietechennai@gmail.com
          </Text>
        </div>
        <div className="address">
          <Text className={classes.title}>Address</Text>
          <Text size="xs" color="dimmed" className={classes.description}>
          IETE Chennai centre,<br/>
          No: 37, Tamil Nadu 600086<br/>
          Conran Smith Road Entrance Peters Road,<br/>
          Gopalapuram,Chennai
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text color="dimmed" size="sm">
          © Copyright IETE Chennai. All rights reserved.
        </Text>

        <Group spacing={0} className={classes.social} position="right" noWrap>

          <ActionIcon size="lg">
            <IconBrandInstagram size="1.05rem" stroke={1.5} onClick={() => window.location.replace("https://www.instagram.com/iete_chennai/")}/>
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandLinkedin size="1.05rem" stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
    </>
  );
}

export default Footer;