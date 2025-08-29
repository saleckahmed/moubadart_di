import React, { useState } from "react";

const IftarDetails = ({ eventData }) => {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="min-h-screen py-20 px-4 md:px-8 bg-gray-50" dir="rtl">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-medium text-gray-800 mb-2">
            {eventData.title}
          </h1>
          <p className="text-gray-600">تفاصيل فعالية الإفطار الجماعي</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 mb-8">
          <div className="p-5">
            <h2 className="text-xl font-medium text-gray-800 mb-3 border-b pb-2">
              عن الفعالية
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {eventData.description}
            </p>
          </div>
        </div>

        {eventData.video && (
          <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 mb-8">
            <div className="p-5">
              <h2 className="text-xl font-medium text-gray-800 mb-3 border-b pb-2">
                فيديو الفعالية
              </h2>
              <div className="rounded-md overflow-hidden">
                <iframe
                  src={eventData.video}
                  title={`فيديو ${eventData.title}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-56 md:h-80"
                ></iframe>
              </div>
            </div>
          </div>
        )}

        {eventData.images && eventData.images.length > 0 && (
          <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
            <div className="p-5">
              <h2 className="text-xl font-medium text-gray-800 mb-5 border-b pb-2">
                معرض الصور
              </h2>

              <div className="mb-5 rounded-md overflow-hidden border border-gray-200">
                <img
                  src={eventData.images[activeImage]}
                  alt={`صورة الفعالية ${activeImage + 1}`}
                  className="w-full h-56 md:h-80 object-cover"
                />
              </div>

              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {eventData.images.map((image, index) => (
                  <div
                    key={index}
                    className={`cursor-pointer rounded-sm overflow-hidden transition-all duration-200 border ${
                      activeImage === index
                        ? "border-gray-700 shadow-sm"
                        : "border-gray-200 hover:border-gray-400"
                    }`}
                    onClick={() => setActiveImage(index)}
                  >
                    <img
                      src={image}
                      alt={`صورة مصغرة ${index + 1}`}
                      className="w-full h-20 object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default IftarDetails;
