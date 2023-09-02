import { Center, Loader as MLoader } from "@mantine/core";

const Loader = () => {
  return (
    <Center h="50vh">
      <MLoader color="#010066" size="xl" variant="bars" />
    </Center>
  );
};

export default Loader;
