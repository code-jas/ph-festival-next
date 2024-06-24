import ClientOnly from './components/common/ClientOnly';
import CarouselFeature from './components/features/carousel/CarouselFeature';
import HeroFeature from './components/features/hero/HeroFeature';

export default function Home() {
   return (
      <div>
         <ClientOnly>
            <CarouselFeature />
            <HeroFeature />
         </ClientOnly>
      </div>
   );
}
