import video from "../assets/Kiswa/video.mp4"
const Kiswa = () => {
 



  return (
    <div className="min-h-screen py-20 px-4 md:px-8 bg-gray-50" dir="rtl">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-2xl md:text-3xl font-medium text-gray-800 mb-2">
            مشروع كسوة اليتامى
          </h1>
          <p className="text-gray-600">
            مشروع كسوة اليتامى خلال أيام العيد
          </p>
        </div>

        <div className="mb-8 bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src={video}

              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-64 md:h-80"
            ></iframe>
          </div>
          <div className="p-5">
            <h2 className="text-xl font-medium text-gray-800 mb-2">
              كسوة اليتامى
            </h2>
            <p className="text-gray-500 mb-3 text-sm">
            27 رمضان 1446
            </p>
          
          </div>
        </div>

      
      </div>
    </div>
  );
};

export default Kiswa;
