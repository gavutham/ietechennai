import { Button, Text } from "@mantine/core";
import "./Chencon.scss";
import { BsBoxArrowInUpRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Chencon = () => {
  const navigate = useNavigate();

  return (
    <div className="chencon">
      <div className="top">
        <div className="left">
          <img src="/chencon/chencon22.jpeg" alt="chenon-img" />
        </div>
        <div className="right">
          <Text className="eventTitle">
            IETE CHENCON 2022 - Call for Papers
          </Text>
          <Text className="date">Hybrid Mode- MAY 20 & 21, 2022</Text>
          <Text className="desc">
            International Conference on Power of Artificial Intelligence and
            Machine Learning for Human Empowerment
          </Text>
        </div>
      </div>
      <div className="bottom">
        <Text className="note">
          <span>Note: </span>
          Selected and presented papers will be published in the Journal of
          Science and Technology (ISSN 2456–5660)
          <Button
            rightIcon={<BsBoxArrowInUpRight />}
            onClick={() => navigate("/chencon")}
            className="redirect"
          >
            Know more
          </Button>
        </Text>
      </div>
    </div>
  );
};

export default Chencon;
