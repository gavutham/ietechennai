import Chencon from "../../components/Chencon/Chencon";
import Webinar from "../../components/Webinar/Webinar";
import "./Events.scss";
import events from "../../utils/events";
import { Text } from "@mantine/core";
import EventCard from "../../components/EventCard/EventCard";

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

        <div className="eventList">
          {eventList.map((e) => (
            <EventCard key={e.name} event={e} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
