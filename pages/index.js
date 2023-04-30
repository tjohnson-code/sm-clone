import Header from '@/components/Header';
import Head from 'next/head';
import { useSession } from 'next-auth/react';
import Login from '@/components/Login';

export default function Home() {
  const { data: session, status } = useSession();

  if (status === 'loading') return <div>Loading...</div>;
  if (!session) return <Login />;

  return (
    <div>
      <Head>
        <title>Somewhat Social</title>
      </Head>

      <Header />

      <main>
        {/* Sidebar */}
        {/* Feed */}
        {/* Contacts */}
      </main>
    </div>
  );
}
