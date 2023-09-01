import { Button, Text } from "@mantine/core";
import "./Chencon.scss";
import { BsBoxArrowInUpRight, BsTelephone } from "react-icons/bs";
import { TbDeviceLandlinePhone, TbWorldWww } from "react-icons/tb";
import { AiOutlineMail } from "react-icons/ai";

const Chencon = () => {
  return (
    <div className="chenconPage">
      <section className="lander">
        <div className="top">
          <div className="left">
            <Text className="title">IETE CHENCON 2022 - Call for Papers</Text>
            <Text className="date">Hybrid Mode- MAY 20 & 21, 2022</Text>

            <img
              src="/chencon/chencon22.jpeg"
              alt="chencon-img"
              className="mobileImg"
            />
            <Text className="desc">
              International Conference on Power of Artificial Intelligence and
              Machine Learning for Human Empowerment
            </Text>
          </div>
          <div className="right">
            <img src="/chencon/chencon22.jpeg" alt="chencon-img" />
          </div>
        </div>
        <div className="bottom">
          <span className="title">Important Documents Link: </span>
          <Button
            rightIcon={<BsBoxArrowInUpRight />}
            className="link"
            component="a"
            target="_blank"
            href="/files/CHENCON2022.pdf"
          >
            PDF Brochure
          </Button>
          <Button
            rightIcon={<BsBoxArrowInUpRight />}
            className="link"
            component="a"
            target="_blank"
            href="/files/chencon_invitation.pdf"
          >
            Inaugrual Session Programme
          </Button>
          <Button
            rightIcon={<BsBoxArrowInUpRight />}
            className="link"
            component="a"
            target="_blank"
            href="/files/chencon2022_proceedings.pdf"
          >
            Chencon 2022 Proceedings
          </Button>
        </div>
      </section>
      <section className="second">
        <Text className="title">Scope of the Conference</Text>
        <Text className="desc">
          Recently, the use of AI/ML technology has been exponentially
          increasing in our daily lives. AI/ML applications represent an
          important evolution in computer science and data processing that is
          quickly transforming a vast array of domains. IETE CHENCON 2022
          provides vibrant opportunities for the delegates to exchange new
          ideas, applications, practical challenges encountered and to leverage
          AI and ML technologies. The technical program of the conference will
          consist of invited key note talks and paper presentations. IETE
          CHENCON 2022 accepts technical paper presentation from research
          scholars, faculty, students and industry professionals in emerging
          areas of AI and ML applications but not limited to:
        </Text>
        <img src="/chencon/chencon22list.jpeg" alt="topics-list" />
      </section>

      <section className="third">
        <Text className="title">Submission Guidelines</Text>
        <Text className="desc">
          Prospective authors are invited to submit full papers describing
          original, previously unpublished, complete work in four pages in A4
          IEEE double column conference template, including figure, results and
          references. Submitted papers will be reviewed by two to three
          technical committee or reviewers. Accepted and registered papers of
          IETE CHENCON 2022 will be published in the conference proceedings.
        </Text>
        <Text className="desc">
          Extended versions of the accepted and presented papers will be
          recommended for publication in IETE Journals, SCOPUS, SCI and other
          indexed journals. Authors must submit the papers through their Easy
          chair account using the following link:
          <a href="https://easychair.org/conferences/?conf=ietechencon2022">
            https://easychair.org/conferences/?conf=ietechencon2022
          </a>{" "}
          or submit the papers to the Email ID:{" "}
          <a href="mailto:chencon2022@gmail.com">chencon2022@gmail.com</a>
        </Text>
        <Text className="note">
          <span>Note: </span>
          Selected and presented papers will be published in the Journal of
          Science and Technology (ISSN 2456–5660)
        </Text>
      </section>

      <section className="fourth">
        <div className="container">
          <div className="title">Registration & Fee Details</div>
          <div className="desc">
            At least one author for each paper should register for the
            conference. If an author has more than one accepted paper,
            registration fee has to be paid for each Paper ID.
          </div>
          <div className="list">
            <Text>
              IETE members including ISF : <br />
              <span>Rs. 1500 + GST</span>
            </Text>
            <Text>
              NON IETE participants : <br />
              <span>Rs. 2000 + GST</span>
            </Text>
            <Text>
              International Participants : <br />
              <span>$50</span>
            </Text>
          </div>
        </div>
        <div className="container">
          <div className="title">Important Dates</div>
          <div className="list">
            <Text>
              Last date for paper Submission : <br />
              <span>06.05.2022</span>
            </Text>
            <Text>
              Notification of Acceptance : <br />
              <span>10.05.2022</span>
            </Text>
            <Text>
              Registration on or before : <br />
              <span>15.05.2022</span>
            </Text>
            <Text>
              Conference Date : <br />
              <span>20.05.2022 & 21.05.2022</span>
            </Text>
          </div>
        </div>
      </section>

      <section className="fifth">
        <Text className="title">Event Organizers</Text>
        <div className="cheif">
          <div>
            <div className="heading">Patron</div>
            <div className="name">Prof Wg Cdr P. Prabhakar</div>
          </div>
          <div>
            <div className="heading">Organizing Chair</div>
            <div className="name">Dr. N. Venkateswaran</div>
          </div>
          <div>
            <div className="heading">Conference Co-Chairs</div>
            <div className="name">Mrs. T.J. Jeyaprabha</div>
            <div className="name">Mr. Arun</div>
          </div>
        </div>
        <hr />
        <div className="others">
          <Text className="title">Advisory Committee</Text>
          <div>
            <Text className="name">Dr. J.W. Bakal</Text>
            <Text className="name">Dr. K.T.V Reddy</Text>
            <Text className="name">Dr. Surendra Pal</Text>
            <Text className="name">Prof. K.K. Aggarwal</Text>
            <Text className="name">Dr. M.H. Kori</Text>
            <Text className="name">Dr. Shiv Kumar</Text>
            <Text className="name">Dr. K. Jaya Shankar</Text>
            <Text className="name">Col. (Retd) K.S. Chakravarthi</Text>
            <Text className="name">Shri. S. Ramaswamy</Text>
            <Text className="name">Dr. Swarna Ravindra Babu</Text>
            <Text className="name">Dr. Tata Sudhakar</Text>
          </div>
        </div>
      </section>

      <section className="contact">
        <Text className="title">Having Further Queries? Contact us on</Text>
        <div>
          <div>
            <BsTelephone size={20} />
            <Text className="title">Mobile: </Text>
            <Text className="desc">72000 96048</Text>
          </div>
          <div>
            <TbDeviceLandlinePhone size={20} />
            <Text className="title">Phone: </Text>
            <Text className="desc">044-28350773</Text>
          </div>
          <div>
            <AiOutlineMail size={20} />
            <Text className="title">Email: </Text>
            <Text
              component="a"
              href="mailto:chencon2021@gmail.com"
              target="_blank"
              className="desc link"
            >
              chencon2021@gmail.com
            </Text>
          </div>
          <div>
            <TbWorldWww size={20} />
            <Text className="title">Website: </Text>
            <Text
              component="a"
              href="http://ietechennai.in"
              target="_blank"
              className="desc link"
            >
              http://ietechennai.in
            </Text>
          </div>
        </div>
      </section>

      <section className="chencon1">
        <Text className="title">Chencon 2021</Text>
        <div className="desc">
          Download the proceedings of Chencon 2021{" "}
          <a target="_blank" href="/files/chencon2021_proceedings.pdf">
            here
          </a>
        </div>
      </section>
    </div>
  );
};

export default Chencon;
