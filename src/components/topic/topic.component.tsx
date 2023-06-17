import Tag from './tag';
import { Button, IconButton, Sheet, Stack, Typography } from '@mui/joy';
import { PencilSquareIcon } from '@heroicons/react/24/outline';
import WriteIcon from '@/icons/write.icon';

type TopicProps = {
  title: string;
  tags: string[];
};

const Topic = ({ title, tags }: TopicProps) => {
  return (
    <Sheet
      component={Stack}
      // variant="outlined"
      sx={{ py: 2 }}
      direction="row"
      alignItems="center"
      justifyContent="space-between"
    >
      <Stack gap={1}>
        <Typography>{title}</Typography>
        <Stack direction="row" gap={1}>
          {tags.map((tag: string) => (
            <Tag name={tag} key={tag} />
          ))}
        </Stack>
      </Stack>
      <IconButton variant="soft" color="warning">
        <WriteIcon />
      </IconButton>
    </Sheet>
  );
};

export default Topic;
