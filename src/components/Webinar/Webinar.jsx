import { Button, Text } from "@mantine/core";
import "./Webinar.scss";

const Webinar = () => {
  return (
    <div className="webinar">
      <Text className="title">Upcoming Event</Text>
      <div className="top">
        <div className="left">
          <Text className="eventTitle">Webinar on IoT Security(WISE-2022)</Text>
          <Text className="date">on 30th May, 2022</Text>
          <Text className="by">
            SETS Chennai & C-DAC Hyderabad in collaboration with ISEA
          </Text>
        </div>
        <div className="right">
          <img src="/event/iotsec.jpg" alt="event-img" />
        </div>
      </div>
      <div className="bottom">
        <Text className="info">
          All interested members are requested to register at the following link
          to participate in the webinar 👉
        </Text>
        <Button
          className="register"
          color="dark"
          onClick={() =>
            window.open("https://infosecawareness.in/wise2022", "_blank")
          }
        >
          Register Here
        </Button>
        <Text className="note">
          <span>Note: </span>
          Participation certificate will be issued to all the registered
          participants after attending all the sessions.
        </Text>
      </div>
    </div>
  );
};

export default Webinar;
