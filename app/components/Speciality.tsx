import Image from "next/image";
import React from "react";

const specialities = [
  { name: "General physician", icon: "/General_physician.svg" },
  { name: "Gynecologist", icon: "/Gynecologist.svg" },
  { name: "Dermatologist", icon: "/Dermatologist.svg" },
  { name: "Pediatricians", icon: "/Pediatricians.svg" },
  { name: "Neurologist", icon: "/Neurologist.svg" },
  { name: "Gastroenterologist", icon: "/Gastroenterologist.svg" },
];

const Speciality = () => {
  return (
    <div className="flex flex-col items-center mt-20">
      <h2 className="text-[40px] text-[#1F2937]">Find by Speciality</h2>

      <div className="w-[573px] h-[85px] text-center">
        <p className="text-[18px] text-[#4B5563]">
          Simply browse through our extensive list of trusted doctors, schedule
          your appointment hassle-free.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6 mt-10">
        {specialities.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <Image src={item.icon} alt={item.name} width={100} height={100} />
            <span className="mt-2 text-[#333]">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Speciality;
