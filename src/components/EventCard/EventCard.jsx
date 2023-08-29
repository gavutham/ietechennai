/* eslint-disable react/prop-types */
import { Card, Modal, Text } from "@mantine/core";
import "./EventCard.scss";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import EventModal from "../EventModal/EventModal";

const EventCard = ({ event }) => {
  var date = `${event.date.getDate()}/${event.date.getMonth()}/${event.date.getFullYear()}`;

  if (event.toDate) {
    date += ` - ${event.toDate.getDate()}/${event.toDate.getMonth()}/${event.toDate.getFullYear()}`;
  }

  const [opened, { open, close }] = useDisclosure(false);
  const isMobile = useMediaQuery("(max-width: 50em)");

  return (
    <Card shadow="sm" m={0} radius="md" withBorder className="eventCard">
      <Modal
        fullScreen={isMobile}
        transitionProps={{ transition: "fade", duration: 500 }}
        opened={opened}
        onClose={close}
        title="About the Event"
        centered
      >
        <EventModal event={event} date={date} />
      </Modal>
      <img src={event.img} alt="event-banner" onClick={open} />

      <div className="content" onClick={open}>
        <Text weight={500}>{event.name}</Text>
        <Text fz={14} color="dimmed">
          {date}
        </Text>

        <Text size="sm" color="gray" mt={5}>
          {event.desc}
        </Text>
      </div>
    </Card>
  );
};

export default EventCard;
