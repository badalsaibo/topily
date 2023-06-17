import { useId } from 'react';
import { motion } from 'framer-motion';
import { Box, Sheet, Stack, Typography, useTheme } from '@mui/joy';
import { useCustomTabs } from './custom-tabs.provider';

const CustomTabs = ({ categories }: { categories: string[] }) => {
  const id = useId();

  const { activeTab, setActiveTab } = useCustomTabs();

  const handleTabClick = (s: string) => () => {
    setActiveTab(s);
  };

  const theme = useTheme();

  return (
    <Stack direction="row" gap={2}>
      {categories.map((c) => (
        <Box
          key={`${id}-${c}`}
          onClick={handleTabClick(c)}
          sx={{ cursor: 'default', position: 'relative' }}
        >
          <Typography
            sx={{
              p: 1,
              pb: 1.5,
              textTransform: 'uppercase',
              fontWeight: '700',
              fontSize: '14px',
              color: 'var(--palette-neutral-600)',
              ...(activeTab === c
                ? {
                    color: theme.palette.danger[500],
                  }
                : {}),
            }}
          >
            {c}
          </Typography>
          {activeTab === c && (
            <motion.div
              layoutId="underline"
              style={{
                width: '100%',
                height: '3px',
                backgroundColor: theme.palette.danger[500],
                position: 'absolute',
                borderRadius: '120px',
                bottom: '3px',
              }}
            />
          )}
        </Box>
      ))}
    </Stack>
  );
};

export default CustomTabs;
