import { List, Text } from "@mantine/core";
import {
  CHENNAI_CENTER,
  COLLEGES,
  COUNTS,
  GOALS,
  IETE,
} from "../../utils/about";
import CountUp from "react-countup";
import "./About.scss";
import GoalCard from "../../components/GoalCard/GoalCard";
import { BiBuilding } from "react-icons/bi";
import { motion } from "framer-motion";
import {
  fadeIn,
  staggerContainer,
  textVariant,
  textVariant2,
  zoomIn,
} from "../../utils/motion";

const About = () => {
  return (
    <div className="about">
      <motion.section
        className="first"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <motion.div className="" variants={textVariant(0.1)}>
          <Text className="title">About IETE</Text>
          <motion.img
            className="mobileImg"
            src="/about.jpeg"
            alt=""
            variants={fadeIn("left", "tween", 0.2, 1)}
          />
          {IETE.map((e) => (
            <Text className="desc" key={e}>
              {e}
            </Text>
          ))}
        </motion.div>
        <div className="">
          <motion.img
            src="/about.jpeg"
            alt=""
            variants={fadeIn("left", "tween", 0.2, 1)}
          />
        </div>
      </motion.section>
      <motion.section
        className="second"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <motion.div className="left" variants={textVariant2}>
          <Text className="title">IETE - Chennai Centre</Text>
          <img src="/chennai.jpg" alt="chennai-img" />
        </motion.div>
        <motion.div className="right" variants={textVariant2}>
          {CHENNAI_CENTER.map((e) => (
            <Text className="desc" key={e}>
              {e}
            </Text>
          ))}
        </motion.div>
      </motion.section>
      <motion.section
        className="third"
        variants={fadeIn("right", "tween", 0.1, 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        {GOALS.map((e) => (
          <GoalCard key={e.img} goal={e} />
        ))}
      </motion.section>
      <motion.section
        className="fourth"
        variants={fadeIn("left", "tween", 0.1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        {COUNTS.map((e) => (
          <div key={e.count}>
            {<e.icon size={75} stroke={3} className="icon" />}
            <div key={e[1]} className="wrapper">
              <Text className="title">{e.title}</Text>
              <Text className="count">
                {<CountUp end={e.count} start={0} enableScrollSpy />}
              </Text>
            </div>
          </div>
        ))}
      </motion.section>
      <motion.section
        className="fifth"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <Text className="title">List of Colleges</Text>
        <List
          className="list"
          spacing="xs"
          size="sm"
          center
          icon={<BiBuilding />}
        >
          {COLLEGES.map((e) => (
            <List.Item className="items" key={e}>
              <motion.span
                variants={zoomIn(0.1, 0.5)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
              >
                {e}
              </motion.span>
            </List.Item>
          ))}
        </List>
      </motion.section>
    </div>
  );
};

export default About;
