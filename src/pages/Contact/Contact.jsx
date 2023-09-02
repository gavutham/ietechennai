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

/* import { IoCall } from "react-icons/io"; */

import "./Contact.scss";

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
        <div className="title">
          <Title>Contact us for more details</Title>
        </div>
        <div className="lr">
          <div className="left">
            {DETAILS.map((e) => (
              <div key={e} className="details">
                <div className="detailsTitle">
                  {<e.icon className="icon" size={30} />}
                  <Title>{e.title}</Title>
                </div>

                <Text className="detailsDescription">{e.description}</Text>
              </div>
            ))}
          </div>
          <div className="right">
            <Box className="box " mx="auto">
              <form onSubmit={form.onSubmit((values) => console.log(values))}>
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
                  width="100%"
                  withAsterisk
                  label="Message"
                  placeholder="Message"
                  {...form.getInputProps("message")}
                />
                <Group position="right" mt="md">
                  <Button className="button" type="submit">
                    Send a message
                  </Button>
                </Group>
              </form>
            </Box>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
