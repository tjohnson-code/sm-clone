import Header from '@/components/Header';
import Head from 'next/head';
import Login from '@/components/Login';
import Sidebar from '@/components/Sidebar';
import Feed from '@/components/Feed';
import { useSession } from 'next-auth/react';
import Widgets from '@/components/Widgets';

export default function Home() {
  const { data: session, status } = useSession();

  if (status === 'loading') return <div>Loading...</div>;
  if (!session) return <Login />;

  return (
    <div className="h-screen bg-gray-200 overflow-hidden">
      <Head>
        <title>Somewhat Social</title>
      </Head>

      <Header />

      <main className="flex">
        <Sidebar />
        <Feed />
        <Widgets />
      </main>
    </div>
  );
}
