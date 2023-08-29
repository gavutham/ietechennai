/* eslint-disable react/prop-types */
import { Card, Text, List } from "@mantine/core";
import "./MembershipCard.scss";

const MembershipCard = ({ membership }) => {
  return (
    <Card shadow="sm" radius="md" withBorder className="membersCard">
      <Text className="title">{membership.classification}</Text>
      <List type="order">
        {membership.members.map((m) => (
          <List.Item key={m} className="item">{m}</List.Item>
        ))}
      </List>
    </Card>
  );
};

export default MembershipCard;
