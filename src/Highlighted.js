import { Box, Text, Tooltip } from '@chakra-ui/react';

const sentimentColor = {
  POSITIVE: 'Lightgreen',
  NEGATIVE: 'pink',
  NEUTRAL: 'Lightgray',
};

export default function Highlighted({ text, sentiment }) {
  return <Box as="mark" bg={sentimentColor[sentiment]} mr = "1">{text}</Box>;
}
