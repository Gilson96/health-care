import HomeHeroCarousel from '../components/HomeHeroCarousel';
import HomeServices from '../components/HomeServices';
import HomeAbout from '../components/HomeAbout';
import HomeDoctors from '../components/HomeDoctors';

function Home() {
  return (
    <>
      <HomeHeroCarousel />
      <HomeServices />
      <HomeAbout titleColor={'text-[#98E2C6]'}/>
      <HomeDoctors/>
    </>
  );
}

export default Home;
