import { Button, createStyles, Text, rem, Grid } from "@mantine/core";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import { members, links } from "../../utils/membership";
import MembershipCard from "../../components/MembershipCard/MembershipCard";
import { motion } from "framer-motion";
import "./Membership.scss";
import { textVariant, textVariant2 } from "../../utils/motion";

const useStyles = createStyles((theme) => ({
  Container: {
    minHeight: `calc(100vh - 75px)`,
    maxHeight: `max-content`,
    padding: `0 50px`,
    [theme.fn.smallerThan("lg")]: {
      padding: `50px 50px`,
    },
    [theme.fn.smallerThan("md")]: {
      padding: `50px 20px`,
    },
    [theme.fn.smallerThan("sm")]: {
      padding: `50px 20px`,
    },
  },

  formContainer: {
    borderTop: `1px solid rgba(207,207,207,0.8)`,
    paddingTop: `40px`,
    [theme.fn.smallerThan("sm")]: {
      paddingTop: `calc{100vh - 10px}`,
      paddingLeft: `40px`,
      paddingRight: `40px`,
    },
  },

  content: {
    maxWidth: `60%`,
    [theme.fn.smallerThan("sm")]: {
      maxWidth: `100%`,
    },
    [theme.fn.smallerThan("lg")]: {
      maxWidth: `100%`,
    },
  },

  title: {
    fontSize: `38px`,
    fontWeight: 600,
    marginBottom: `32px`,
  },

  membershipTitle: {
    marginTop: `50px`,
    fontSize: `38px`,
    fontWeight: "bolder",
    marginBottom: `32px`,
    [theme.fn.smallerThan("sm")]: {
      marginTop: `10px`,
    },
    [theme.fn.smallerThan("lg")]: {
      marginTop: `10px`,
    },
  },

  subtitle: {
    fontSize: `30px`,
    fontWeight: `500`,
    marginBottom: `30px`,
  },

  link: {
    textDecoration: "underline",
  },

  description: {
    fontSize: `19px`,
    marginBottom: `24px`,
    lineHeight: `40px`,
    color: `rgb(53, 53, 53)`,
    textAlign: "justify",
    [theme.fn.smallerThan("sm")]: {
      fontSize: `17px`,
      lineHeight: `30px`,
    },
  },

  picture: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
    [theme.fn.smallerThan("lg")]: {
      display: "none",
    },
  },

  mobilePicture: {
    display: "none",
    [theme.fn.smallerThan("sm")]: {
      display: "block",
      height: "auto",
      width: `90%`,
      margin: "auto",
      marginBottom: `50px`,
    },
    [theme.fn.smallerThan("lg")]: {
      display: "block",
      height: "auto",
      width: `90%`,
      margin: "auto",
      marginBottom: `50px`,
    },
  },

  cards: {
    display: "flex",
    gap: `10%`,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: `40px`,
    marginTop: `40px`,
    [theme.fn.smallerThan("md")]: {
      flexDirection: "column",
      gap: rem(35),
      marginTop: `50px`,
    },
  },

  forms: {
    display: "flex",
    justifyContent: "space-around",
    gap: rem(15),
    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
      gap: rem(3),
    },
  },
}));

const Membership = () => {
  const { classes } = useStyles();

  return (
    <div className="membership">
      <motion.div
        className={classes.Container}
        id="whyJoinUs"
        variants={textVariant(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <div className={classes.content}>
          <Text className={classes.title}>Why Join Us?</Text>
          <img
            src="/membership.jpg"
            alt="membership-pic"
            className={classes.mobilePicture}
          />
          <Text className={classes.description}>
            IETE Student Forum arranges frequent meetings of student members
            together with experts / academic / R & D / industry leaders as well
            as IETE centre’s executive committee members. Programmers of common
            interest may also be arranged involving students forum at many
            institutions in a city, region etc. Students after completeing their
            degrees will become proud corporate members of IETE and can write
            after their name BE. AMIETE, with less fees (deducting the fee paid
            for the forum).
          </Text>
        </div>
        <img
          src="/membership.jpg"
          alt="membership-pic"
          className={classes.picture}
        />
      </motion.div>
      <motion.div
        className={classes.Container}
        id="membership"
        variants={textVariant2}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <Text className={classes.membershipTitle}>MEMBERSHIP</Text>
        <Text className={classes.description}>
          The IETE membership is available at different levels based on the
          applicants’ academic qualifications and practical experience in
          electronics, telecommunications, computers, information technology and
          related areas. Applicants are invited to seek the highest membership
          grade they are qualified for. The membership categories are:
        </Text>
        <div className={classes.cards}>
          {members.map((m) => (
            <MembershipCard key={m} membership={m} />
          ))}
        </div>
        <Button
          className="button"
          variant="white"
          rightIcon={<BsBoxArrowInUpRight stroke="4" />}
          onClick={() =>
            window.open("https://iete.org/index111.html", "_blank")
          }
        >
          Click to know about Eligibility Criteria and More
        </Button>
      </motion.div>
      <div className="formContainer">
        <div className={classes.formContainer}>
          <Text className={classes.subtitle}>Application Forms</Text>
          <Grid className={classes.forms} grow>
            {links.map((e) => (
              <Grid.Col
                md={3}
                lg={1}
                sm={3}
                className="formButton"
                key={e}
                onClick={() => window.open(e.link, "_blank")}
              >
                {e.label}
              </Grid.Col>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Membership;
