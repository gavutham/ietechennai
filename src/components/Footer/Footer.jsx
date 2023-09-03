import {
  createStyles,
  Text,
  ActionIcon,
  Group,
  rem,
  TextInput,
  useMantineTheme,
} from "@mantine/core";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import footerGroups from "../../utils/footerGroups";
import footerUsefulLinksItems from "../../utils/footerUsefulLinksItems";
import { useNavigate } from "react-router-dom";
import "./Footer.scss";
import { motion } from "framer-motion";
import { footerVariants } from "../../utils/motion";

const useStyles = createStyles((theme) => ({
  footer: {
    position: "relative",
    height: `calc(100vh - 75px - (${theme.spacing.xl} * 4))`,
    bottom: 0,
    padding: `calc(${theme.spacing.xl} * 2) 8%`,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
    [theme.fn.smallerThan("md")]: {
      paddingTop: `68px`,
    },
    [theme.fn.smallerThan("sm")]: {
      padding: `calc(${theme.spacing.xl} * 2) 8%`,
    },
  },

  logo: {
    maxWidth: rem(200),

    [theme.fn.smallerThan("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },

  description: {
    marginTop: rem(5),
    marginBottom: rem(20),
    lineHeight: rem(28),

    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
      textAlign: "center",
    },
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "24px",

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },

  groups: {
    display: "flex",
    flexWrap: "wrap",

    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  wrapper: {
    width: rem(160),
  },

  link: {
    display: "block",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[1]
        : theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
    paddingTop: rem(3),
    paddingBottom: rem(3),

    "&:hover": {
      textDecoration: "underline",
    },
  },

  title: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: `1.5rem`,
    marginTop: `1rem`,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
      textAlign: "center",
    },
    [theme.fn.smallerThan("md")]: {
      marginBottom: `1rem`,
    },
  },

  tabletAddress: {
    display: "none",
    marginTop: `40px`,
    [theme.fn.smallerThan("md")]: {
      display: "block",
    },
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  address: {
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
    [theme.fn.smallerThan("sm")]: {
      display: "block",
    },
  },

  newsletter: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    width: `650px`,
    marginBottom: rem(40),
    [theme.fn.smallerThan("md")]: {
      width: `100%`,
    },
  },

  newsletterInput: {
    marginTop: "24px",
    width: `450px`,
    [theme.fn.smallerThan("md")]: {
      width: `100%`,
    },
  },

  afterFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "auto",
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
    },
  },

  social: {
    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
    },
  },
}));

const Footer = () => {
  const { classes } = useStyles();
  const navigate = useNavigate();
  const theme = useMantineTheme();

  const openEmail = () => {
    window.location.href = "mailto:ietechennai@gmail.com";
  };

  const groups = footerGroups.map(() => {
    const links = footerUsefulLinksItems.map((link, index) => (
      <>
        <Text
          key={index}
          className={classes.link}
          component="a"
          href={link.link}
          onClick={(event) => {
            event.preventDefault();
            navigate(link.link);
          }}
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
      <motion.footer
        className={`footer ${classes.footer}`}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.00000000000000000001 }}
        variants={footerVariants}
      >
        <div className={classes.inner}>
          <div className={classes.logo}>
            <Text className={classes.title} id="title">
              IETE Chennai
            </Text>
            <Text
              size="sm"
              color="dimmed"
              className={`description ${classes.description}`}
            >
              Phone: 044 2835 0773
              <br />
              <span onClick={openEmail}>Email: ietechennai@gmail.com</span>
            </Text>
            <div className={classes.tabletAddress}>
              <Text className={classes.title}>Address</Text>
              <Text size="sm" color="dimmed" className={classes.description}>
                IETE Chennai centre,
                <br />
                No: 37, Tamil Nadu 600086
                <br />
                Conran Smith Road Entrance Peters Road,
                <br />
                Gopalapuram,Chennai
              </Text>
            </div>
          </div>
          <div className={classes.address}>
            <Text className={classes.title}>Address</Text>
            <Text size="sm" color="dimmed" className={classes.description}>
              IETE Chennai centre,
              <br />
              No: 37, Tamil Nadu 600086
              <br />
              Conran Smith Road Entrance Peters Road,
              <br />
              Gopalapuram,Chennai
            </Text>
          </div>
          <div className={classes.groups}>{groups}</div>
        </div>
        <div className={classes.newsletter}>
          <Text className={classes.title} id="newsletterTitle">
            Join our Newsletter
          </Text>
          <TextInput
            className={classes.newsletterInput}
            radius="xl"
            size="sm"
            rightSection={
              <ActionIcon
                size={32}
                radius="xl"
                color={theme.primaryColor}
                variant="filled"
              >
                {theme.dir === "ltr" ? (
                  <AiOutlineArrowRight />
                ) : (
                  <AiOutlineArrowRight size="1.1rem" stroke={1.5} />
                )}
              </ActionIcon>
            }
            placeholder="Enter your email"
            rightSectionWidth={42}
          />
        </div>
        <div className={classes.afterFooter}>
          <Text color="dimmed" size="sm">
            © Copyright IETE Chennai. All rights reserved.
          </Text>

          <Group spacing={0} className={classes.social} position="right" noWrap>
            <ActionIcon size="lg">
              <BsInstagram
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/iete_chennai/",
                    "_blank"
                  )
                }
              />
            </ActionIcon>
            <ActionIcon size="lg">
              <BiLogoLinkedin
                size="1.05rem"
                stroke={1.5}
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/iete-chennai",
                    "_blank"
                  )
                }
              />
            </ActionIcon>
          </Group>
        </div>
      </motion.footer>
    </>
  );
};

export default Footer;
