/* eslint-disable react/prop-types */
import { Card, Group, Text } from "@mantine/core";
import "./MemberCard.scss";
import { GoMail } from "react-icons/go";
import { motion } from "framer-motion";
import { textVariant2 } from "../../utils/motion";

const MemberCard = ({ member }) => {
  const mailTo = (email) => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      className="memberCard"
    >
      <motion.img
        variants={textVariant2}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="image"
        src={member.img}
        alt="profile-img"
      />

      <Group position="apart" mt="md" mb="xs">
        <Text size="lg" weight={400}>
          {member.name}
        </Text>
      </Group>

      <Text size="md" color="dimmed" weight={500} mb={10}>
        {member.position}
      </Text>

      {member.desc && (
        <Text size="sm" color="dimmed" mb={20}>
          {member.desc}
        </Text>
      )}

      <Group className="email" onClick={() => mailTo(member.email)}>
        <GoMail size={15} className="icon" />
        <Text size="sm" color="dimmed" className="address">
          {member.email}
        </Text>
      </Group>
    </Card>
  );
};

export default MemberCard;
