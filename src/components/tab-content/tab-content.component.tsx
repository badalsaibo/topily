import { useId } from 'react';
import Topic from '@/components/topic/topic.component';
import { Stack } from '@mui/joy';

type TabContentProps = {
  topics: TopicI[];
  visible: boolean;
};

interface TopicI {
  title: string;
  tags: string[];
}

const TabContent = ({ topics, visible }: TabContentProps) => {
  const id = useId();
  if (!visible) return null;
  return (
    <Stack gap={2}>
      {topics.map(({ title, tags }) => (
        <Topic key={id} title={title} tags={tags} />
      ))}
    </Stack>
  );
};

export default TabContent;
