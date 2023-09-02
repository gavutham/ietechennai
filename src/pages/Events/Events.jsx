import Chencon from "../../components/Chencon/Chencon";
import Webinar from "../../components/Webinar/Webinar";
import "./Events.scss";
import events from "../../utils/events";
import { Text } from "@mantine/core";
import EventCard from "../../components/EventCard/EventCard";
import { motion } from "framer-motion";
import { textVariant2 } from "../../utils/motion";

const Events = () => {
  const eventList = events;
  eventList.sort((a, b) => b.date.getTime() - a.date.getTime());

  return (
    <div className="events">
      <Webinar />
      <Chencon />
      <div className="recentEvents">
        <div className="heading">
          <Text className="title">Recent Events</Text>
        </div>

        <motion.div
          className="eventList"
          variants={textVariant2}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
        >
          {eventList.map((e) => (
            <EventCard event={e} key={e.name} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Events;
