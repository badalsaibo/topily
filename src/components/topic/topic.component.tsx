import Tag from './tag';
import { Sheet, Stack, Typography } from '@mui/joy';

type TopicProps = {
  title: string;
  tags: string[];
};

const Topic = ({ title, tags }: TopicProps) => {
  return (
    <Sheet component={Stack} gap={1}>
      <Typography>{title}</Typography>
      <Stack direction="row" gap={1}>
        {tags.map((tag: string) => (
          <Tag name={tag} key={tag} />
        ))}
      </Stack>
    </Sheet>
  );
};

export default Topic;
