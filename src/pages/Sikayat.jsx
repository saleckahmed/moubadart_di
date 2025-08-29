import  { useState } from "react";
import video1 from ".././assets/SikayatVideo/video1.mp4";
import video2 from ".././assets/SikayatVideo/video2.mp4";
import video3 from ".././assets/SikayatVideo/video3.mp4";
import video4 from ".././assets/SikayatVideo/video4.mp4";
import video5 from ".././assets/SikayatVideo/video5.mp4";
import image1 from ".././assets/SikayatImage/image1.jpeg";
import image2 from ".././assets/SikayatImage/image2.jpeg";
import image3 from ".././assets/SikayatImage/image3.jpeg";
import image4 from ".././assets/SikayatImage/image4.jpeg";
import image5 from ".././assets/SikayatImage/image5.jpeg";

const SiKayat = () => {
  const [activeVideo, setActiveVideo] = useState(0);

  const videos = [
    {
      id: 1,
      title: "سقاية اليوم الأول",
      description: "انطلاق فعاليات السقاية في اليوم الأول من رمضان",
      date: "1 رمضان 1446",
      videoUrl: video1,
       thumbnail: image1
    },
    {
      id: 2,
      title: "سقاية اليوم الخامس",
      description: "توزيع المياه في الأحياء الشعبية",
      date: "5 رمضان 1446",
      videoUrl: video2,
       thumbnail: image2
    },
    {
      id: 3,
      title: "سقاية اليوم العاشر",
      description: "مشروع السقاية في المناطق النائية",
      date: "10 رمضان 1446",
      videoUrl: video3,
      thumbnail:
       image3
    },
    {
      id: 4,
      title: "سقاية اليوم الخامس عشر",
      description: "توزيع المياه المبردة في المساجد",
      date: "15 رمضان 1446",
      videoUrl: video4,
      thumbnail:
       image4
    },
    {
      id: 5,
      title: "سقاية اليوم العشرين",
      description: "مشروع السقاية المتنقل في الأسواق",
      date: "20 رمضان 1446",
      videoUrl: video5,
      thumbnail:
       image5
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4 md:px-8 bg-gray-50" dir="rtl">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-2xl md:text-3xl font-medium text-gray-800 mb-2">
            مشروع السقايات
          </h1>
          <p className="text-gray-600">
            مشروع خيري لتوزيع المياه خلال شهر رمضان المبارك
          </p>
        </div>

        <div className="mb-8 bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src={videos[activeVideo].videoUrl}
              title={videos[activeVideo].title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-64 md:h-80"
            ></iframe>
          </div>
          <div className="p-5">
            <h2 className="text-xl font-medium text-gray-800 mb-2">
              {videos[activeVideo].title}
            </h2>
            <p className="text-gray-500 mb-3 text-sm">
              {videos[activeVideo].date}
            </p>
            <p className="text-gray-700">{videos[activeVideo].description}</p>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-medium text-gray-800 mb-5 text-center border-b pb-2">
            فيديوهات السقايات
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {videos.map((video, index) => (
              <div
                key={video.id}
                className={`bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer border transition-all duration-200 ${
                  activeVideo === index
                    ? "border-gray-600 shadow-md"
                    : "border-gray-200 hover:border-gray-400 hover:shadow-md"
                }`}
                onClick={() => setActiveVideo(index)}
              >
                <div className="h-40 overflow-hidden relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="bg-gray-800 rounded-full p-2">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="font-medium text-gray-800 mb-1 text-sm">
                    {video.title}
                  </h3>
                  <p className="text-xs text-gray-500">{video.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiKayat;
