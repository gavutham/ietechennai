/* eslint-disable react/no-unescaped-entities */
import { Button, Text } from "@mantine/core";
import "./Home.scss";
import ParticlesBackground from "../../components/Particles/ParticlesBackground";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import { useNavigate } from "react-router";
import events from "../../utils/events";
import EventCard from "../../components/EventCard/EventCard";

const Home = () => {
  const navigate = useNavigate();

  events.sort((a, b) => b.date.getTime() - a.date.getTime());
  const reqEvents = events.slice(0, 4);

  return (
    <div>
      <ParticlesBackground />
      <div className="home">
        <div className="landing">
          <Text className="motto">Learning Today, Leading Tomorrow</Text>
          <img src="/iete.jpg" height={150} width={150} className="logo" />
        </div>
        <div className="quote">
          <img src="/modi.png" alt="pm-modi-img" />
          <div className="quoteContent">
            <Text className="quoteText">
              "INNOVATION FOR THE PEOPLE AND BY THE PEOPLE IS THE REACTION OF
              OUR NEW INDIA"
            </Text>
            <Text className="author">
              - NARENDRA MODI, HON’BLE PRIME MINISTER OF INDIA.
            </Text>
          </div>
        </div>
        <div className="about">
          <div className="contents">
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
          </div>
          <img
            src="/discussion.jpeg"
            alt="discussion-pic"
            className="picture"
          />
        </div>
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
            {reqEvents.map((e) => (
              <EventCard key={e.name} event={e} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
