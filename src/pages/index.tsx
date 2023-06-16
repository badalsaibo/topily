import CustomTabs from '@/components/custom-tabs';
import { Typography } from '@mui/joy';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Topliy</title>
        <meta name="description" content="Adding Topics made easy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Typography level="h1">Topily</Typography>
      <CustomTabs />
    </>
  );
}
