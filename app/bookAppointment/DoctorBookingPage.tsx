"use client";

import Image from "next/image";
import { useState } from "react";

const days = [
  { label: "MON", date: "10" },
  { label: "TUE", date: "11" },
  { label: "WED", date: "12" },
  { label: "THU", date: "13" },
  { label: "FRI", date: "14" },
  { label: "SAT", date: "15" },
  { label: "SUN", date: "16" },
];

const slots = [
  "8.00 am",
  "8.30 am",
  "9.00 am",
  "9.30 am",
  "10.00 am",
  "10.30 am",
  "11.00 am",
  "11.30 am",
];

export default function DoctorBookingPage() {
  const [selectedDay, setSelectedDay] = useState("MON");
  const [selectedSlot, setSelectedSlot] = useState("9.00 am");

  return (
    <div className="max-w-5xl mx-auto mt-10 flex flex-col md:flex-row gap-6 px-4">
      {/* Left - Doctor image */}
      <div className="flex-shrink-0">
        <Image
          src="/image5.svg"
          alt="Doctor"
          className="w-40 h-40 md:w-52 md:h-52 object-cover rounded-lg bg-[#427BFF]"
        />
      </div>

      {/* Right - Info */}
      <div className="flex-1 bg-white border rounded-xl p-6 shadow-sm">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 flex items-center gap-2">
          Dr. Richard James
          <Image src="/Vector.svg"  alt="Star" className="text-blue-500" />
        </h2>
        <p className="text-sm text-gray-600 mt-1">
          MBBS - General Physician{" "}
          <span className="ml-2 px-2 py-0.5 bg-gray-100 text-xs text-gray-700 rounded-full">
            2 Years
          </span>
        </p>

        <div className="mt-4 flex items-start gap-2 text-gray-600 text-sm">
            <span className="text-[18px] ">About</span>
          <Image src="/Page-1.svg" alt="" className=""/>
          <p>
            Dr. Davis has a strong commitment to delivering comprehensive
            medical care, focusing on preventive medicine, early diagnosis, and
            effective treatment strategies.
          </p>
        </div>

        <p className="mt-4 text-gray-700 font-medium">
          Appointment fee: <span className="text-black font-semibold">$50</span>
        </p>

        {/* Booking slots */}
        <div className="mt-6">
          <h4 className="font-medium text-gray-800 mb-3">Booking slots</h4>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {days.map((day) => (
              <button
                key={day.label}
                onClick={() => setSelectedDay(day.label)}
                className={`flex flex-col items-center justify-center px-4 py-2 rounded-full border transition min-w-[60px] ${
                  selectedDay === day.label
                    ? "bg-blue-600 text-white"
                    : "bg-white border-gray-200 text-gray-700"
                }`}
              >
                <span className="text-sm font-semibold">{day.label}</span>
                <span className="text-xs">{day.date}</span>
              </button>
            ))}
          </div>

          {/* Time slots */}
          <div className="flex flex-wrap gap-2 mt-4">
            {slots.map((slot) => (
              <button
                key={slot}
                onClick={() => setSelectedSlot(slot)}
                className={`px-4 py-1.5 rounded-full border text-sm ${
                  selectedSlot === slot
                    ? "bg-blue-600 text-white"
                    : "bg-white border-gray-300 text-gray-700"
                }`}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <button className="w-full bg-blue-600 text-white font-medium py-3 rounded-full hover:bg-blue-700 transition">
            Book an appointment
          </button>
        </div>
      </div>
    </div>
  );
}
