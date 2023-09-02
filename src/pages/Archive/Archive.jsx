import { List, Text } from "@mantine/core";
import "./Archive.scss";
import { SlEnvolopeLetter } from "react-icons/sl";
import { GrDocumentText } from "react-icons/gr";

const Archive = () => {
  return (
    <div className="archive">
      <Text className="title">Archive</Text>
      <div className="newsletter">
        <Text className="title">Chenlink Newsletter</Text>
        <Text className="desc">Download the previous newsletters below</Text>
        <List
          spacing="md"
          className="list"
          withPadding
          icon={<SlEnvolopeLetter />}
        >
          <List.Item className="item">
            <a target="_blank" href="/files/newsletter/chenlink1_1.pdf">
              Volume 1, No. 1
            </a>
          </List.Item>
          <List.Item className="item">
            <a target="_blank" href="/files/newsletter/chenlink1_2.pdf">
              Volume 1, No. 2
            </a>
          </List.Item>
          <List.Item className="item">
            <a target="_blank" href="/files/newsletter/chenlink1_3.pdf">
              Volume 1, No. 3
            </a>
          </List.Item>
        </List>
      </div>
      <div className="chencon">
        <Text className="title">Chencon</Text>
        <div className="chencon22">
          <Text className="desc">
            Download the documents of Chencon 2022 below
          </Text>
          <List
            spacing="md"
            className="list"
            icon={<GrDocumentText />}
            withPadding
          >
            <List.Item className="item">
              <a target="_blank" href="/files/CHENCON2022.pdf">
                PDF Brochure
              </a>
            </List.Item>
            <List.Item className="item">
              <a target="_blank" href="/files/chencon_invitation.pdf">
                Inaugural Session Programme
              </a>
            </List.Item>
            <List.Item className="item">
              <a target="_blank" href="/files/chencon2022_proceedings.pdf">
                ChenCon 2022 Proceedings
              </a>
            </List.Item>
          </List>
        </div>
        <div className="chencon21">
          <Text className="desc">
            Download the documents of Chencon 2021 below
          </Text>
          <List
            spacing="md"
            className="list"
            icon={<GrDocumentText />}
            withPadding
          >
            <List.Item className="item">
              <a target="_blank" href="/files/chencon2021_proceedings.pdf">
                Chencon 2021 Proceedings
              </a>
            </List.Item>
          </List>
        </div>
      </div>
    </div>
  );
};

export default Archive;
