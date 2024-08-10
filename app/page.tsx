import Footer from '@/components/Footer';
import LandingPage from '@/components/LandingPage';
import NavBar from '@/components/NavBar';
import Page from '@/components/Page';

export default function Home() {
  return (
    <main>
      <NavBar />
      <LandingPage />
      <Page />
      <Footer />
    </main>
  );
}
