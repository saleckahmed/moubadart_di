import React, { useState } from "react";
import dlg from ".././assets/Members/dlg.jpeg";
import ege from ".././assets/Members/ege.jpeg";
import oussama from ".././assets/Members/oussama.jpeg";
import moulay from ".././assets/Members/moulay.jpeg";
import meinouh from ".././assets/Members/meinouh.jpeg";
import yahya from ".././assets/Members/yahya.jpeg";
import dlg2 from ".././assets/Members/dlg2.jpeg";
import ebn from ".././assets/Members/ebn.jpeg";
import motkarval from ".././assets/Members/motkarval.jpeg";

const Members = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const members = [
    {
      id: 1,
      name: "اخديجة تگدي",
      role: "الرئيسة ",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg0Ikid94Ya1cQByKfVk8k5-v28o0mGW4SOA&s",
    },
    {
      id: 2,
      name: "مريم الخراشي",
      role: "نائبة الرئيسة",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg0Ikid94Ya1cQByKfVk8k5-v28o0mGW4SOA&s",
    },
    {
      id: 3,
      name: "محمد السالك أحمد",
      role: "مسؤول التطوير والمعلوماتية",
      image: dlg,
    },

    {
      id: 4,
      name: "أحمد بدى",
      role: "عضو",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg0Ikid94Ya1cQByKfVk8k5-v28o0mGW4SOA&s",
    },
    {
      id: 5,
      name: "أجه يرب صدف",
      role: "نائب مسؤول التطوير والمعلوماتية",
      image: ege,
    },
    {
      id: 6,
      name: "اعل الشيخ جنيس",
      role: "عضو",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg0Ikid94Ya1cQByKfVk8k5-v28o0mGW4SOA&s",
    },
    {
      id: 7,
      name: "فاطمة التاه",
      role: "عضو",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg0Ikid94Ya1cQByKfVk8k5-v28o0mGW4SOA&s",
    },
    {
      id: 8,
      name: "حنان",
      role: "عضو",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg0Ikid94Ya1cQByKfVk8k5-v28o0mGW4SOA&s",
    },
    {
      id: 9,
      name: "مريم محمد لمين",
      role: "مسؤولة الإعلام",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg0Ikid94Ya1cQByKfVk8k5-v28o0mGW4SOA&s",
    },
    {
      id: 10,
      name: "محمد عالي ابنو",
      role: "عضو",
      image:dlg2  },
    {
      id: 11,
      name: "محمد المختار",
      role: "عضو",
      image:motkarval   },
    {
      id: 12,
      name: "مولاي براهيم",
      role: "عضو",
      image: moulay,
    },
    {
      id: 13,
      name: "محمد سالم ابنو",
      role: "عضو",
      image:ebn    },
    {
      id: 14,
      name: "نفيسة بديه",
      role: "المسؤولة المالي",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg0Ikid94Ya1cQByKfVk8k5-v28o0mGW4SOA&s",
    },
    {
      id: 15,
      name: "اسامة",
      role: "عضو",
      image: oussama,
    },
    {
      id: 16,
      name: "فاطمة خيار",
      role: "مسؤولة الحلويات",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg0Ikid94Ya1cQByKfVk8k5-v28o0mGW4SOA&s",
    },
    {
      id: 17,
      name: "يحي محمد لمين",
      role: "مسؤول التاكسي",
      image: yahya,
    },
    {
      id: 18,
      name: "حمدي",
      role: "عضو",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg0Ikid94Ya1cQByKfVk8k5-v28o0mGW4SOA&s",
    },
    {
      id: 19,
      name: "سيداحمد أمينوه",
      role: "عضو",
      image: meinouh,
    },
    {
      id: 20,
      name: "فاطمة الشيخ باي",
      role: "عضو",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg0Ikid94Ya1cQByKfVk8k5-v28o0mGW4SOA&s",
    },
    {
      id: 3,
      name: "مريم عزيز",
      role: "عضو",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg0Ikid94Ya1cQByKfVk8k5-v28o0mGW4SOA&s",
    },
    {
      id: 22,
      name: "عبدالله إبراهيم",
      role: "عضو",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg0Ikid94Ya1cQByKfVk8k5-v28o0mGW4SOA&s",
    },
    {
      id: 23,
      name: "حسين إبراهيم",
      role: "عضو",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg0Ikid94Ya1cQByKfVk8k5-v28o0mGW4SOA&s",
    },
    {
      id: 24,
      name: "اماتي ماديك",
      role: "مسؤولة النش",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg0Ikid94Ya1cQByKfVk8k5-v28o0mGW4SOA&s",
    },
    {
      id: 25,
      name: "ملكة عالي",
      role: "عضو",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg0Ikid94Ya1cQByKfVk8k5-v28o0mGW4SOA&s",
    },
     {
      id: 24,
      name: "محمد بدر",
      role: "عضو",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg0Ikid94Ya1cQByKfVk8k5-v28o0mGW4SOA&s",
    },
    {
      id: 25,
      name: "سيدي عالي",
      role: "عضو",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg0Ikid94Ya1cQByKfVk8k5-v28o0mGW4SOA&s",
    },
  ];

  const filteredMembers = members.filter((member) =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen py-20 px-4 md:px-8 bg-gray-50" dir="rtl">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-800 mb-3">
            أعضاء المبادرة
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            التعرف على جميع الأعضاء المشاركين في مبادرة دفعة المعلوماتية
          </p>
        </div>

        <div className="mb-8 bg-white rounded-xl shadow-sm p-4 max-w-2xl mx-auto border border-gray-100">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="ابحث عن عضو..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full text-gray-700 focus:outline-none"
            />
            <span className="ml-3 text-amber-500">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </span>
          </div>
        </div>

        <div className="mb-6 text-center">
          <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium">
            {filteredMembers.length} عضو
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filteredMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-200 hover:shadow-md border border-gray-100"
            >
              <div className="h-48 overflow-hidden bg-gray-100">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="p-4 text-center">
                <h3 className="text-md font-medium text-gray-800 mb-1">
                  {member.name}
                </h3>
                <p className="text-amber-600 text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </div>

        {filteredMembers.length === 0 && (
          <div className="text-center py-12">
            <div className="text-amber-400 text-4xl mb-4">🔍</div>
            <h3 className="text-lg font-medium text-gray-700 mb-2">
              لم يتم العثور على نتائج
            </h3>
            <p className="text-gray-500">جرب استخدام كلمات بحث مختلفة</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Members;
