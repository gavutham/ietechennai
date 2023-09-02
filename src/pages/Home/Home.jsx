/* eslint-disable react/no-unescaped-entities */
import { Button, Text } from "@mantine/core";
import "./Home.scss";
import ParticlesBackground from "../../components/Particles/ParticlesBackground";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import { useNavigate } from "react-router";
import events from "../../utils/events";
import EventCard from "../../components/EventCard/EventCard";
import { Carousel } from "@mantine/carousel";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import {
  fadeIn,
  slideIn,
  staggerContainer,
  textVariant,
  textVariant2,
} from "../../utils/motion";

const Home = () => {
  const navigate = useNavigate();

  events.sort((a, b) => b.date.getTime() - a.date.getTime());
  const reqEvents = events.slice(0, 4);
  const autoplay = useRef(Autoplay({ delay: 2000 }));

  return (
    <div>
      <div className="home">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="landing"
        >
          <div style={{ position: "absolute" }}>
            <ParticlesBackground />
          </div>
          <motion.span variants={fadeIn("right", "tween", 0.2, 1)}>
            <Text className="motto">Learning Today, Leading Tomorrow</Text>
          </motion.span>
          <motion.img
            variants={fadeIn("left", "tween", 0.2, 1)}
            src="/iete.jpg"
            height={150}
            width={150}
            className="logo"
          />
        </motion.div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="quote"
        >
          <img src="/modi.png" alt="pm-modi-img" />
          <motion.div variants={textVariant(0.2)} className="quoteContent">
            <Text className="quoteText">
              "INNOVATION FOR THE PEOPLE AND BY THE PEOPLE IS THE REACTION OF
              OUR NEW INDIA"
            </Text>
            <Text className="author">
              - NARENDRA MODI, HON’BLE PRIME MINISTER OF INDIA.
            </Text>
          </motion.div>
        </motion.div>
        <motion.div
          className="about"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <motion.div className="contents" variants={textVariant2}>
            <Text className="heading">What we Do?</Text>
            <Text className="desc">
              Chennai Centre of IETE is committed to attain commanding heights
              and achieve the status of “Centre of Excellence” in Technical,
              Engineering & Management education by harnessing the best
              practices in educational innovation and through its concerted
              endeavors like quality teaching, industrial consultancy and
              training to the aspirants including corporate training.
            </Text>
            <Button
              variant="white"
              rightIcon={<BsBoxArrowInUpRight stroke="4" />}
              onClick={() => navigate("/about")}
            >
              Know more
            </Button>
          </motion.div>
          <img
            src="/discussion.jpeg"
            alt="discussion-pic"
            className="picture"
          />
        </motion.div>
        <div className="events">
          <div className="heading">
            <Text className="title">Recent Events</Text>
            <Button
              variant="white"
              rightIcon={<BsBoxArrowInUpRight stroke="4" />}
              onClick={() => navigate("/events")}
            >
              All Events
            </Button>
          </div>

          <div className="eventList">
            <Carousel
              maw="100%"
              plugins={[autoplay.current]}
              onMouseEnter={autoplay.current.stop}
              onMouseLeave={autoplay.current.reset}
              loop
              dragFree
              withIndicators
              styles={{
                control: {
                  "&[data-inactive]": {
                    opacity: 0,
                    cursor: "default",
                  },
                },
                indicator: {
                  backgroundColor: "gray",
                  transition: "width 250ms ease",
                },
              }}
            >
              {reqEvents.map((e) => (
                <Carousel.Slide key={e.name}>
                  <EventCard event={e} />
                </Carousel.Slide>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
