import React from "react";
import DoctorsImages from "./DoctorsImages";
import HeroSection from "../reusable/HeroSection";

const DoctorsList = () => {
  return (
    <div>
      <div className="flex flex-col items-center mt-20">
        <h2 className="text-[40px] text-#1F2937">Top Doctors to Book</h2>
        <p className="text-[18px] text-#4B5563">
          Simply browse through our extensive list of trusted doctors.
        </p>
      </div>
      <div>
        <DoctorsImages />
      </div>
      <div>
        <HeroSection
          title="Book Appointment With 100+ Trusted Doctors"
          imageSrc="/appoint.svg"
          buttonText="Create account"
          buttonLink="/book-therapy"
          ImageWrapper="w-[580px] h-[529px] mt-[-74px] object-cover"
          className="h-[455px] "
        />
      </div>
    </div>
  );
};

export default DoctorsList;
