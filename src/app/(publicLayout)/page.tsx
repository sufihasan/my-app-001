import { EventsSection } from "@/components/pages/home/EventsSection";
import HeroSection from "@/components/pages/home/HeroSection";
import { ServiceSection } from "@/components/pages/home/ServiceSection";
import { SubscribeSection } from "@/components/pages/home/SubscribeSection";
import { TestimonialSection } from "@/components/pages/home/TestimonialSection";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection></HeroSection>
      <ServiceSection></ServiceSection>
      <EventsSection></EventsSection>
      <TestimonialSection></TestimonialSection>
      <SubscribeSection></SubscribeSection>
    </div>
  );
}
