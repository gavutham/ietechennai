import { Button, createStyles, Text, rem } from "@mantine/core";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import { members, links } from "../../utils/membership";
import MembershipCard from "../../components/MembershipCard/MembershipCard";

import "./Membership.scss";

const useStyles = createStyles((theme) => ({
  Container: {
    minHeight: `calc(100vh - 75px)`,
    maxHeight: `max-content`,
    padding: `0 5%`,
    [theme.fn.smallerThan("sm")]: {
      paddingTop: `calc{100vh - 10px}`,
      paddingLeft: `40px`,
      paddingRight: `40px`,
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
  },

  title: {
    fontSize: `36px`,
    fontWeight: `500`,
    marginBottom: `55px`,
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
    fontSize: `20px`,
    marginBottom: `50px`,
    lineHeight: `36px`,
    textAlign: "justify",
  },

  picture: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  cards: {
    display: "flex",
    gap: `10%`,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: `40px`,
    [theme.fn.smallerThan("md")]: {
      flexDirection: "column",
      gap: rem(25),
    },
  },

  forms: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    gap: rem(5),
    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
    },
  },

  formButton: {
    width: `calc((100% - 100px) / 5)`,
    height: `40px`,
    color: `#333333`,
    marginBottom: `16px`,
    fontSize: `18px`,
    border: `1px solid lightgrey`,
    borderRadius: `5px`,
    boxShadow: `0px 0px 20px -13px rgba(0, 0, 0, 0.75)`,
    [theme.fn.smallerThan("sm")]: {
      width: `100%`,
    },
  },
}));

const Membership = () => {
  const { classes } = useStyles();

  return (
    <>
      <div className={classes.Container} id="whyJoinUs">
        <div className={classes.content}>
          <Text className={classes.title}>Why Join Us?</Text>
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
          src="/discussion.jpeg"
          alt="discussion-pic"
          className={classes.picture}
        />
      </div>
      <div className={classes.Container} id="membership">
        <Text className={classes.title} id="membershipTitle">
          MEMBERSHIP
        </Text>
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
      </div>
      <div className="formContainer">
        <div className={classes.formContainer}>
          <Text className={classes.subtitle}>Application Forms</Text>
          <div className={classes.forms}>
            {links.map((e) => (
              <Button
                variant="white"
                className={classes.formButton}
                key={e}
                onClick={() => window.open(e.link, "_blank")}
              >
                {e.label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Membership;
