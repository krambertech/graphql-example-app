import { Heading, Icon, Text, Stack } from '@chakra-ui/react';
import { HiOutlineEmojiSad } from 'react-icons/hi';

type ErrorMessageProps = {
  title: string;
  message: string;
};

const ErrorMessage: React.FC<ErrorMessageProps> = ({ title, message }) => {
  return (
    <Stack maxWidth="md" mx="auto" spacing={4} p={12} align="center" borderRadius="lg" bg="red.100">
      <Icon as={HiOutlineEmojiSad} w={12} h={12} color="red.500" />
      <Heading as="h3" size="md">
        {title}
      </Heading>
      <Text size="lg">{message}</Text>
    </Stack>
  );
};

export default ErrorMessage;
