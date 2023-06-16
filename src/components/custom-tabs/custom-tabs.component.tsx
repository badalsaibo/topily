import { useId } from 'react';
import { Box, Stack, Typography } from '@mui/joy';

const tabs = ['all', 'custom', 'recommended'];

const CustomTabs = () => {
  const id = useId();
  return (
    <Stack direction="row" gap={2}>
      {tabs.map((t) => (
        <Box key={`${id}-${t}`}>
          <Typography>{t}</Typography>
        </Box>
      ))}
    </Stack>
  );
};

export default CustomTabs;
