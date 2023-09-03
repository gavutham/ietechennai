import {
  Text,
  TextInput,
  Title,
  Button,
  Group,
  Box,
  Textarea,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import DETAILS from "../../utils/contactDetails";
import "./Contact.scss";
import { motion } from "framer-motion";
import { fadeIn, textVariant2 } from "../../utils/motion";

const Contact = () => {
  const form = useForm({
    initialValues: {
      email: "",
      fullName: "",
      subject: "",
      message: "",
    },
    validate: {
      email: (value) =>
        /^\S+@\S+$/.test(value) ? null : "Please enter a valid email",
      fullName: (value) =>
        value.length < 4 ? "Your name must have at least 4 characters" : null,
      subject: (value) =>
        value.length < 8 ? "Subject must have atleast 8 characters" : null,
      message: (value) =>
        value.length < 1 ? "This field should not be left empty" : null,
    },
  });

  return (
    <>
      <div className="contacts">
        <div className="lr">
          <div className="right">
            <div className="title">
              <Title>Contact us for more details</Title>
            </div>
            <Box className="box " mx="auto">
              <motion.form
                onSubmit={form.onSubmit((values) => console.log(values))}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                variants={fadeIn("right", "tween", 0.2, 0.7)}
              >
                <div className="one">
                  <TextInput
                    className="input"
                    withAsterisk
                    label="Email"
                    placeholder="Your Email"
                    {...form.getInputProps("email")}
                  />
                  <TextInput
                    className="input"
                    width="100%"
                    withAsterisk
                    label="Full name"
                    placeholder="Your Name"
                    {...form.getInputProps("fullName")}
                  />
                </div>
                <TextInput
                  withAsterisk
                  width="100%"
                  label="Subject"
                  placeholder="Subject"
                  {...form.getInputProps("subject")}
                />

                <Textarea
                  className="message"
                  width="100%"
                  height="200px"
                  withAsterisk
                  label="Message"
                  placeholder="Type a message"
                  {...form.getInputProps("message")}
                />
                <Group position="right" mt="md">
                  <Button className="button" type="submit">
                    Send a message
                  </Button>
                </Group>
              </motion.form>
            </Box>
          </div>

          <motion.div
            className="left"
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            variants={textVariant2}
          >
            {DETAILS.map((e) => (
              <div key={e} className="details">
                <div className="detailsTitle">
                  {
                    <e.icon
                      className="icon"
                      size={30}
                      onClick={() => (window.location.href = e.link)}
                    />
                  }
                  <Title className="detitle">{e.title}</Title>
                </div>

                <Text className="detailsDescription">{e.description}</Text>
              </div>
            ))}
          </motion.div>
        </div>
        <div className="mapContainer">
          <Text className="title">Find us live here</Text>
          <iframe
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.7079564886867!2d80.25558021413603!3d13.054252116592973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52663edc820433%3A0x9d3202883a213b07!2sInstitute%20of%20Electronics%20and%20Telecommunication%20Engineers!5e0!3m2!1sen!2sin!4v1609237251098!5m2!1sen!2sin"
            allowfullscreen="false"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Contact;
