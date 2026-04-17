"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FeatureCardTwentyFive from '@/components/sections/feature/FeatureCardTwentyFive';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import MediaAbout from '@/components/sections/about/MediaAbout';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import { Circle, Diamond, Leaf } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="mediumLarge"
        sizing="largeSizeMediumTitles"
        background="circleGradient"
        cardStyle="inset"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="solid"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",          id: "hero"},
        {
          name: "About",          id: "about"},
        {
          name: "Collections",          id: "products"},
        {
          name: "Contact",          id: "contact"},
      ]}
      brandName="LuxeTextiles"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboard
      background={{
        variant: "plain"}}
      title="Timeless Textiles & Crafted Jewelry"
      description="Exquisite handcrafted pieces blending traditional weaving with contemporary jewelry design for the discerning collector."
      imageSrc="http://img.b2bpic.net/free-photo/elegant-silk-concept-with-copy-space_23-2148623349.jpg"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/solid-curvy-retro-fabrics-curtains_23-2148516059.jpg",          alt: "Solid curvy retro fabrics for curtains"},
        {
          src: "http://img.b2bpic.net/free-photo/stripes-blue-fabric-material_23-2148516050.jpg",          alt: "Stripes of blue fabric material"},
        {
          src: "http://img.b2bpic.net/free-photo/elegant-pastel-golden-transparent-fabrics_23-2148516032.jpg",          alt: "Elegant pastel golden and transparent fabrics"},
        {
          src: "http://img.b2bpic.net/free-photo/silky-smooth-golden-fabric-waves-creating-luxurious-texture_91128-4642.jpg",          alt: "Silky smooth golden fabric waves creating a luxurious texture"},
        {
          src: "http://img.b2bpic.net/free-photo/person-working-embroidery-workshop_23-2148970773.jpg",          alt: "Person working in an embroidery workshop"},
      ]}
      marqueeItems={[
        {
          type: "text",          text: "Artisan Crafted"},
        {
          type: "text",          text: "Ethically Sourced"},
        {
          type: "text",          text: "Premium Quality"},
        {
          type: "text",          text: "Timeless Design"},
        {
          type: "text",          text: "Modern Heritage"},
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={true}
      title="Artisan Legacy"
      description="We preserve age-old traditions by merging delicate textile weaves with bold, statement jewelry pieces. Each item tells a story of patience, beauty, and refined aesthetics."
      imageSrc="http://img.b2bpic.net/free-photo/high-angle-woman-journaling-with-paint_23-2150522470.jpg"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyFive
      animationType="depth-3d"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          title: "Organic Fibers",          description: "Sustainably sourced natural materials.",          icon: Leaf,
          mediaItems: [
            {
              imageSrc: "http://img.b2bpic.net/free-photo/artisan-making-pot_23-2148643312.jpg"},
            {
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-gray-fabric-with-soft-folds_23-2151966124.jpg"},
          ],
        },
        {
          title: "Precision Setting",          description: "Expertly crafted metalwork.",          icon: Diamond,
          mediaItems: [
            {
              imageSrc: "http://img.b2bpic.net/free-photo/fibers-burlap-material_23-2148066710.jpg"},
            {
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-engraving-art-tools_23-2149186763.jpg"},
          ],
        },
        {
          title: "Artisanal Weave",          description: "Hand-loom perfection.",          icon: Circle,
          mediaItems: [
            {
              imageSrc: "http://img.b2bpic.net/free-photo/master-making-mini-sculptures_114579-12147.jpg"},
            {
              imageSrc: "http://img.b2bpic.net/free-photo/abstract-dark-brown-marble-textured_53876-95577.jpg"},
          ],
        },
      ]}
      title="Our Craft"
      description="Discover the meticulous detail behind every weave and every gemstone setting."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={true}
      products={[
        {
          id: "p1",          name: "Silk Weave Scarf",          price: "$120",          variant: "Linen/Silk",          imageSrc: "http://img.b2bpic.net/free-photo/blue-bowl-pumpkin-seeds-with-blue-cloth-stone-background_114579-74675.jpg"},
        {
          id: "p2",          name: "Golden Bloom Necklace",          price: "$250",          variant: "Gold Plated",          imageSrc: "http://img.b2bpic.net/free-photo/young-beautiful-blond-woman-sunbathing-beach-red-swimming-suit-sunglasses_285396-6415.jpg"},
        {
          id: "p3",          name: "Embroidered Drape",          price: "$180",          variant: "Raw Silk",          imageSrc: "http://img.b2bpic.net/free-photo/herbarium-flowers-vintage-papers-hands-light-background_185193-164903.jpg"},
        {
          id: "p4",          name: "Aura Ring",          price: "$150",          variant: "Gemstone",          imageSrc: "http://img.b2bpic.net/free-photo/aesthetic-golden-silver-earrings_23-2149846561.jpg"},
        {
          id: "p5",          name: "Woven Heritage Shawl",          price: "$300",          variant: "Cotton/Wool",          imageSrc: "http://img.b2bpic.net/free-photo/still-life-aesthetic-earrings_23-2149649109.jpg"},
        {
          id: "p6",          name: "Celestial Earring",          price: "$95",          variant: "Silver",          imageSrc: "http://img.b2bpic.net/free-photo/mechanic-repairing-bicycle_23-2148138442.jpg"},
      ]}
      title="Curated Collections"
      description="Explore our limited edition pieces."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardFourteen
      useInvertedBackground={false}
      title="Craft by the Numbers"
      tag="Our Impact"
      metrics={[
        {
          id: "m1",          value: "500+",          description: "Unique textile pieces created"},
        {
          id: "m2",          value: "12",          description: "Artisans employed"},
        {
          id: "m3",          value: "100%",          description: "Ethically sourced materials"},
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwelve
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",          name: "Elena V.",          imageSrc: "http://img.b2bpic.net/free-photo/glad-african-american-young-woman-rests-alone-coffee-shop-has-delighted-look-rests-after-work-laptop-computer-has-positive-expression_273609-3414.jpg"},
        {
          id: "2",          name: "Marcus R.",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-photo-bearded-guy-smiling-gesturing-with-ok-sign-expressing-good-choice-being-isolated-graphite_171337-455.jpg"},
        {
          id: "3",          name: "Sarah K.",          imageSrc: "http://img.b2bpic.net/free-photo/joyful-asian-woman-dresses-winter-cold-weather-indicates-blank-space-shows-something-awesome-wears-knitted-hat-fur-coat-scarf-around-neck-isolated-pink-wall_273609-43762.jpg"},
        {
          id: "4",          name: "David W.",          imageSrc: "http://img.b2bpic.net/free-photo/front-view-woman-posing-studio_23-2150104788.jpg"},
        {
          id: "5",          name: "Linda P.",          imageSrc: "http://img.b2bpic.net/free-photo/fashion-girls-city_1157-4927.jpg"},
      ]}
      cardTitle="Client Stories"
      cardTag="Testimonials"
      cardAnimation="blur-reveal"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "plain"}}
      text="Have a custom commission in mind? Reach out to our design team for bespoke jewelry and textile inquiries."
      buttons={[
        {
          text: "Start Consultation",          href: "#"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Shop",          items: [
            {
              label: "Textiles",              href: "#"},
            {
              label: "Jewelry",              href: "#"},
          ],
        },
        {
          title: "About",          items: [
            {
              label: "Our Story",              href: "#"},
            {
              label: "Craftsmanship",              href: "#"},
          ],
        },
      ]}
      logoText="LuxeTextiles"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
