import { Flex, Text } from "@mantine/core";
import MemberCard from "../../components/MemberCard/MemberCard";
import team from "../../utils/team";
import "./Team.scss";

const Team = () => {
  return (
    <Flex className="team">
      <Text className="title">Meet our Executive Committee</Text>
      <div className="container">
        {team.map((mem) => (
          <MemberCard key={mem.email} member={mem} />
        ))}
      </div>
    </Flex>
  );
};

export default Team;
