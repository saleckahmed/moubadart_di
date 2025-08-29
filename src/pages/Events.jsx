import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

const Events = () => {
  const [counts, setCounts] = useState([0, 0, 0]);
  const circleRefs = [useRef(null), useRef(null), useRef(null)];
  const countRefs = [useRef(null), useRef(null), useRef(null)];
  const cardRefs = [useRef(null), useRef(null), useRef(null)];

  const events = [
    {
      id: 1,
      title: "عدد الإفطارات",
      date: "رمضان 1446",
      count: 4,
      icon: "🍽️",
      link: "iftar",
      description: "إفطارات جماعية نظمناها للمحتاجين",
    },
    {
      id: 2,
      title: "عدد السقايات",
      date: "رمضان 1446",
      count: 10,
      icon: "💧",
      link: "sikayat",
      description: "مشاريع سقاية للمجتمعات المحتاجة",
    },
    {
      id: 3,
      title: "عدد الكسوات",
      date: "رمضان 1446",
      count: 75,
      icon: "👕",
      link: "ksawat",
      description: "ملابس جديدة وزعناها على المحتاجين",
    },
  ];

  useEffect(() => {
    events.forEach((event, index) => {
     
      gsap.to(circleRefs[index].current, {
        strokeDashoffset: 0,
        duration: 2,
        delay: index * 0.3 + 0.5,
        ease: "power2.out",
      });

   
      gsap.to(countRefs[index].current, {
        innerText: event.count,
        duration: 2,
        delay: index * 0.3 + 0.5,
        snap: { innerText: 1 },
        ease: "power2.out",
        onUpdate: function () {
          const newCounts = [...counts];
          newCounts[index] = Math.floor(this.targets()[0].innerText);
          setCounts(newCounts);
        },
      });
    });
  }, []);

  const radius = 50;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="min-h-screen py-20 px-6 bg-gray-50" dir="rtl">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h1 className="text-3xl font-bold text-gray-800 mb-3">
            إنجازات مبادرة دفعة المعلوماتية 2024
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            إنجازاتنا ومشاريعنا الخيرية خلال شهر رمضان المبارك
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <Link
              to={`${event.link}`}
              key={event.id}
              ref={cardRefs[index]}
              className="bg-white rounded-xl shadow-sm p-5 flex flex-col items-center hover:shadow-md transition-all duration-300 border border-gray-100"
            >
              <div className="text-4xl mb-4 text-amber-500">{event.icon}</div>

              <h2 className="text-lg font-medium text-gray-800 mb-2 text-center">
                {event.title}
              </h2>

              <p className="text-amber-600 mb-5 text-sm font-medium">
                {event.date}
              </p>

              <div className="relative mb-5">
                <svg
                  className="w-32 h-32 transform -rotate-90"
                  viewBox="0 0 120 120"
                >
                  <circle
                    cx="60"
                    cy="60"
                    r={radius}
                    stroke="#FEF3C7"
                    strokeWidth="8"
                    fill="white"
                  />

                  <circle
                    ref={circleRefs[index]}
                    cx="60"
                    cy="60"
                    r={radius}
                    stroke="#F59E0B"
                    strokeWidth="8"
                    fill="transparent"
                    strokeDasharray={circumference}
                    strokeDashoffset={circumference}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <span
                      ref={countRefs[index]}
                      className="text-2xl font-bold text-amber-600"
                    >
                      0
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 text-center text-sm mb-4">
                {event.description}
              </p>

              <div className="w-12 h-1 bg-amber-300 rounded-full my-2"></div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
