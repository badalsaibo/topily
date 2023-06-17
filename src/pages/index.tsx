import { useId } from 'react';
import CustomTabs, { useCustomTabs } from '@/components/custom-tabs';
import TabContent from '@/components/tab-content/tab-content.component';
import { Stack, Typography } from '@mui/joy';
import Head from 'next/head';

import TOPICS from '@/data/topics';

const categories = ['all', 'custom', 'mission', 'product'];

export default function Home() {
  const id = useId();

  const { activeTab } = useCustomTabs();

  return (
    <>
      <Head>
        <title>Topliy</title>
        <meta name="description" content="Adding Topics made easy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Typography level="h1">Categories</Typography>
      <Stack gap={2}>
        <CustomTabs categories={categories} />
        {categories.map((c) => (
          <TabContent
            key={id}
            topics={
              c === 'all' ? TOPICS : TOPICS.filter((t) => t.category === c)
            }
            visible={activeTab === c}
          />
        ))}
      </Stack>
    </>
  );
}
