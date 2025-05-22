
import Speciality from "./components/Speciality";
import DoctorsList from "./components/DoctorsList";
import HeroSection from "./reusable/HeroSection";

export default function Home() {
  return (
    <div>
      <HeroSection
        title="Book Appointment With Trusted Doctors"
        description="Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free."
        imageSrc="/doc-header-img.svg"
        ImageWrapper="w-full max-w-[800px] h-auto object-cover"
        iconSrc="/group.svg"
        buttonText="Book Appointment"
        buttonLink="/book-appointment"
      />
      <Speciality />
      <DoctorsList />
    </div>
  );
}
