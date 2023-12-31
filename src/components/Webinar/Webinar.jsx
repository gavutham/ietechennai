import { Button, Text } from "@mantine/core";
import "./Webinar.scss";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";

const Webinar = () => {
  return (
    <motion.div
      className="webinar"
      variants={fadeIn("left", "tween", 0.2, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <Text className="title">Upcoming Event</Text>
      <div className="top">
        <div className="left">
          <Text className="eventTitle">Webinar on IoT Security(WISE-2022)</Text>
          <Text className="date">on 30th May, 2022</Text>

          <motion.img
            variants={textVariant(1.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            src="/event/iotsec.jpg"
            alt="event-img"
            className="mobileImg"
          />
          <Text className="by">
            SETS Chennai & C-DAC Hyderabad in collaboration with ISEA
          </Text>
          <Text className="info">
            All interested members are requested to register at the following
            link to participate in the webinar 👉
            <Button
              className="register"
              color="dark"
              ml={12}
              onClick={() =>
                window.open("https://infosecawareness.in/wise2022", "_blank")
              }
            >
              Register Here
            </Button>
          </Text>
        </div>
        <div className="right">
          <img src="/event/iotsec.jpg" alt="event-img" />
        </div>
      </div>
      <div className="bottom">
        <Text className="note">
          <span>Note: </span>
          Participation certificate will be issued to all the registered
          participants after attending all the sessions.
        </Text>
      </div>
    </motion.div>
  );
};

export default Webinar;
