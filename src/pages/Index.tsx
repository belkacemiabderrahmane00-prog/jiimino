import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import VideoShowcase from "@/components/VideoShowcase";
import KeyFiguresSection from "@/components/KeyFiguresSection";
import ServicesSection from "@/components/ServicesSection";
import ClientsSection from "@/components/ClientsSection";
import OffersSection from "@/components/OffersSection";
import WhyUsSection from "@/components/WhyUsSection";
import ApproachSection from "@/components/ApproachSection";
import TrustSection from "@/components/TrustSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import RecruitmentSection from "@/components/RecruitmentSection";
import LocationsSection from "@/components/LocationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import RevealSection from "@/components/RevealSection";
import SectionDivider from "@/components/SectionDivider";
import { Helmet } from "react-helmet-async";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "JII MINO",
  "description": "Entreprise française de sécurité privée à Paris. Surveillance humaine, gardiennage, sécurité événementielle, prévention incendie, contrôle d'accès.",
  "url": "https://www.jiimino.com",
  "telephone": "+33955790988",
  "email": "contact@jiimino.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "58 avenue de Wagram",
    "addressLocality": "Paris",
    "postalCode": "75017",
    "addressCountry": "FR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 48.8789,
    "longitude": 2.2964
  },
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "09:00", "closes": "18:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "10:00", "closes": "15:00" }
  ],
  "sameAs": ["https://www.linkedin.com/company/jiimino/"],
  "priceRange": "$$",
  "image": "https://www.jiimino.com/og-image.jpg",
  "areaServed": { "@type": "Place", "name": "Paris, Grenoble, Lille" },
  "serviceType": ["Surveillance humaine", "Gardiennage", "Sécurité événementielle", "Prévention incendie", "Contrôle d'accès", "Rondes et interventions"],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "3"
  }
};

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>JII MINO – Sécurité Privée d'Excellence à Paris | Gardiennage & Surveillance</title>
        <meta name="description" content="JII MINO, entreprise française de sécurité privée à Paris. Surveillance humaine, gardiennage, sécurité événementielle, prévention incendie, contrôle d'accès. Agréée CNAPS. Devis gratuit 24h/24." />
        <meta name="keywords" content="sécurité privée Paris, entreprise sécurité, gardiennage, surveillance humaine, sécurité événementielle, CNAPS, agent de sécurité Paris, vigile Paris, protection des biens" />
        <link rel="canonical" href="https://www.jiimino.com" />
        <meta property="og:title" content="JII MINO – Sécurité Privée d'Excellence à Paris" />
        <meta property="og:description" content="Protection des personnes, des biens et des événements. Surveillance, gardiennage, sécurité événementielle. Agréée CNAPS. Devis gratuit." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.jiimino.com" />
        <meta property="og:site_name" content="JII MINO" />
        <meta property="og:locale" content="fr_FR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="JII MINO – Sécurité Privée à Paris" />
        <meta name="twitter:description" content="Surveillance, gardiennage, sécurité événementielle. Agréée CNAPS. Devis gratuit 24h/24." />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="JII MINO SAS" />
        <meta name="geo.region" content="FR-75" />
        <meta name="geo.placename" content="Paris" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Navbar />
      <HeroSection />
      <VideoShowcase />
      
      <RevealSection>
        <ServicesSection />
      </RevealSection>

      {/* Dark → Cream */}
      <SectionDivider type="wave" fromColor="hsl(42, 8%, 16%)" toColor="hsl(40, 25%, 92%)" />

      <KeyFiguresSection />

      {/* Cream → Dark */}
      <SectionDivider type="curve" fromColor="hsl(40, 25%, 92%)" toColor="hsl(228, 7%, 17%)" />

      <RevealSection>
        <ClientsSection />
      </RevealSection>
      
      <RevealSection>
        <WhyUsSection />
      </RevealSection>

      {/* Dark → Cream */}
      <SectionDivider type="swoosh" fromColor="hsl(38, 8%, 18%)" toColor="hsl(40, 25%, 92%)" />
      
      <RevealSection>
        <TestimonialsSection />
      </RevealSection>

      <RevealSection>
        <OffersSection />
      </RevealSection>

      {/* Cream → Dark */}
      <SectionDivider type="angle" fromColor="hsl(40, 25%, 92%)" toColor="hsl(228, 7%, 17%)" />

      <RevealSection>
        <ApproachSection />
      </RevealSection>
      
      <RevealSection>
        <TrustSection />
      </RevealSection>
      
      <RevealSection>
        <AboutSection />
      </RevealSection>

      <RevealSection>
        <LocationsSection />
      </RevealSection>

      {/* Dark → Cream warm */}
      <SectionDivider type="wave" fromColor="hsl(42, 8%, 18%)" toColor="hsl(38, 22%, 90%)" />

      <RecruitmentSection />

      {/* Cream → Dark */}
      <SectionDivider type="swoosh" fromColor="hsl(38, 22%, 90%)" toColor="hsl(228, 7%, 17%)" />
      
      <RevealSection>
        <ContactSection />
      </RevealSection>
      
      <Footer />
    </div>
  );
};

export default Index;
