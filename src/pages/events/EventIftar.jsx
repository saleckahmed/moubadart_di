import { Link } from "react-router-dom";
import friday1 from "../../assets/FridaysImage/friday1.jpeg";
import friday2 from "../../assets/FridaysImage/friday2.jpeg";

export default function EventIftar() {
  const fridays = [
    {
      id: 1,
      title: "الجمعة 1",
      image: friday1,
    },
    {
      id: 2,
      title: "الجمعة 2",
      image: friday2,
      description: "صلاة الجمعة والذكر الجماعي",
    },
    {
      id: 3,
      title: "الجمعة 3",
      image:
        "https://images.unsplash.com/photo-1605888236237-5bb7c32b6d70?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 4,
      title: "الجمعة 4",
      image:
        "https://images.unsplash.com/photo-1517232115160-ff93364542dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4 md:px-8 bg-gray-50" dir="rtl">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-medium text-gray-800 mb-3">
            جمعة الخير في رمضان
          </h2>
          <p className="text-gray-600">فعالياتنا الخيرية خلال جمعة رمضان</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {fridays.map((friday) => (
            <Link
              to={`/events/iftar/${friday.id}`}
              key={friday.id}
              className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300 border border-gray-200 hover:shadow-md h-56"
            >
              <div className="h-full relative">
                <img
                  src={friday.image}
                  alt={friday.title}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-0"></div>

                <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-10">
                  <h3 className="text-lg font-medium mb-1">{friday.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
