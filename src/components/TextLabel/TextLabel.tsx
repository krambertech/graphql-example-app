import { FC, ReactNode } from 'react';
import { HStack, Text } from '@chakra-ui/react';

type TextLabelProps = {
  icon: ReactNode;
  label?: string;
  children: ReactNode;
};

const TextLabel: FC<TextLabelProps> = ({ icon, label, children }) => {
  return (
    <HStack spacing={1}>
      {icon}
      {label && (
        <Text as="span" fontWeight="bold" mr={2}>
          {label}
        </Text>
      )}
      <Text>{children}</Text>
    </HStack>
  );
};

export default TextLabel;
