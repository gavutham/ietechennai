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

const About = () => {
  return (
    <div className="about">
      <section className="first">
        <div className="">
          <Text className="title">About IETE</Text>
          <img className="mobileImg" src="/about.jpeg" alt="" />
          {IETE.map((e) => (
            <Text className="desc" key={e}>
              {e}
            </Text>
          ))}
        </div>
        <div className="">
          <img src="/about.jpeg" alt="" />
        </div>
      </section>
      <section className="second">
        <div className="left">
          <Text className="title">IETE - Chennai Centre</Text>
          <img src="/chennai.jpg" alt="chennai-img" />
        </div>
        <div className="right">
          {CHENNAI_CENTER.map((e) => (
            <Text className="desc" key={e}>
              {e}
            </Text>
          ))}
        </div>
      </section>
      <section className="third">
        {GOALS.map((e) => (
          <GoalCard key={e.img} goal={e} />
        ))}
      </section>
      <section className="fourth">
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
      </section>
      <section className="fifth">
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
              {e}
            </List.Item>
          ))}
        </List>
      </section>
    </div>
  );
};

export default About;
