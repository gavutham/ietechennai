/* eslint-disable react/prop-types */
import { Badge, Card, Group, Image, Text } from "@mantine/core";
import "./EventModal.scss";

const EventModal = ({ event, date }) => {
  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      className="eventModal"
    >
      <Card.Section>
        <Image src={event.img} alt="event-banner" />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>{event.name}</Text>
        <Badge color="indigo" variant="light">
          {date}
        </Badge>
      </Group>

      <Text size="sm" color="dimmed">
        {event.desc}
      </Text>
    </Card>
  );
};

export default EventModal;
