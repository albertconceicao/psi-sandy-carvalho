import Head from 'next/head';

import Logo from '../assets/logo.svg';
import { Contact } from '../components/Contact';
import { Depoiments } from '../components/Depoiments';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sandy Carvalho | Psicóloga Sistêmica</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <main className="container">
        <Depoiments />
        <Contact />
        <Logo />
      </main>
    </div>
  );
}
