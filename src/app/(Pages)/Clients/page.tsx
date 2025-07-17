import Brands from './brands';
import ImpactSection from './collaboration';
import TestimonialsSection from './testimonies';
import HeroBanner from './trustedby';
export default function Home() {
    return (
        <div className="bg-white min-h-screen">
            <HeroBanner />
            <ImpactSection />
            <Brands />
            <TestimonialsSection />
        </div>
    );
}