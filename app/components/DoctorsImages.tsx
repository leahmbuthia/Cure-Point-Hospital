"use client";
import React, { useState } from "react";
import Image from "next/image";

const DoctorsImages = () => {
  const [showAll, setShowAll] = useState(false);
  const doctors = [
    {
      name: "Dr. Richart James",
      role: "General Physician",
      image: "image1.svg",
      available: true,
    },
    {
      name: "Dr. Sophie Turner",
      role: "Cardiologist",
      image: "image2.svg",
      available: true,
    },
    {
      name: "Dr. Michael Chen",
      role: "Pediatrician",
      image: "image3.svg",
      available: false,
    },
    {
      name: "Dr. Aisha Khan",
      role: "Dermatologist",
      image: "image4.svg",
      available: true,
    },
    {
      name: "Dr. Leo Martins",
      role: "Neurologist",
      image: "image5.svg",
      available: true,
    },
    {
      name: "Dr. Leo Martins",
      role: "Neurologist",
      image: "image1.svg",
      available: true,
    },
    {
      name: "Dr. Sophie Turner",
      role: "Cardiologist",
      image: "image2.svg",
      available: true,
    },
    {
      name: "Dr. Michael Chen",
      role: "Pediatrician",
      image: "image3.svg",
      available: false,
    },
    {
      name: "Dr. Aisha Khan",
      role: "Dermatologist",
      image: "image4.svg",
      available: true,
    },
    {
      name: "Dr. Leo Martins",
      role: "Neurologist",
      image: "image5.svg",
      available: true,
    },
    {
      name: "Dr. Leo Martins",
      role: "Neurologist",
      image: "image5.svg",
      available: true,
    },
  ];
  const visibleDoctors = showAll ? doctors : doctors.slice(0, 10);
  return (
    <div>
      <div className=" flex flex-wrap gap-5">
        {visibleDoctors.map((doc, index) => (
          <div
            key={index}
            className="w-[270px] h-[385px] border border-gray-200 shadow-sm rounded-[10px] bg-white"
          >
            <div className="h-[250.52px] bg-[#EAEFFF] rounded-t-[10px]  flex items-center justify-center">
              <Image
                src={doc.image}
                alt={doc.name}
                width={187.69}
                height={250.52}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col p-2">
              <div className="flex gap-2 items-center">
                <Image src="/Elli.svg" alt="dot" width={8} height={8} />
                <span className="text-[#0FBF00] text-[17px] font-[Outfit]">
                  {doc.available ? "Available" : "Unavailable"}
                </span>
              </div>
              <p className="text-gray-800 text-[22px] font-bold">{doc.name}</p>
              <p className="text-gray-600">{doc.role}</p>
            </div>
          </div>
        ))}
      </div>
      {!showAll && doctors.length > 10 && (
        <div className="mt-10 text-center">
          <button
            onClick={() => setShowAll(true)}
            className="w-[200px] h-[60px] px-4 py-2 bg-[#EAEFFF] text-[#4B5563] rounded-full hover:bg-[#afbdeb] transition"
          >
            more
          </button>
        </div>
      )}
    </div>
  );
};

export default DoctorsImages;
