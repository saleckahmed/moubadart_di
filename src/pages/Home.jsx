import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-right">
      {/* Hero Section */}
      <section className="h-screen bg-gray-900 bg-cover bg-center flex items-center justify-center relative">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-white text-center px-6 max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-medium mb-6">
            مبادرة طلابية لإفطار الصائم وسقاية المحتاجين
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200">
            معاً لننشر الخير ونرسم البسمة في رمضان
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/donate"
              className="bg-gray-800 px-6 py-3 rounded-md text-lg hover:bg-gray-700 transition border border-gray-600"
            >
              تبرع الآن
            </Link>
            <Link
              to="/volunteer"
              className="bg-white text-gray-900 px-6 py-3 rounded-md text-lg hover:bg-gray-100 transition"
            >
              انضم كمتطوع
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 md:px-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-medium mb-6 text-gray-800 text-right border-b pb-3">
            من نحن
          </h2>
          <p
            className="text-lg leading-relaxed text-gray-700 text-right"
            dir="rtl"
          >
            نحن طلاب الدفعة الأخيرة من تخصص
            <span dir="ltr" className="font-medium text-gray-800">
              {" "}
              Développement Informatique{" "}
            </span>
            ، نسعى لخدمة المجتمع من خلال مبادرة إفطار الصائم وسقاية المحتاجين
            وكسوة اليتامى في شهر رمضان المبارك. هدفنا هو نشر روح التضامن
            والإحسان ومساعدة الفقراء والمحتاجين.
          </p>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-16 px-6 md:px-20 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-medium mb-6 text-gray-800 border-b pb-3">
            الفعاليات
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            ننظم بشكل دوري إفطارات جماعية وتوزيع وجبات وسقاية للمحتاجين في مختلف
            المناطق. تابع فعالياتنا القادمة وكن جزءاً من الخير.
          </p>
          <Link
            to="/events"
            className="bg-gray-800 text-white px-6 py-3 rounded-md hover:bg-gray-700 transition inline-block border border-gray-600"
          >
            اكتشف المزيد
          </Link>
        </div>
      </section>

      {/* Volunteer Section */}
      <section id="volunteer" className="py-16 px-6 md:px-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-medium mb-6 text-gray-800 border-b pb-3">
            التطوع
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            نرحب بجميع المتطوعين من الطلاب والمجتمع للمشاركة في تجهيز وتوزيع
            الوجبات وتنظيم الفعاليات. كن جزءاً من التغيير.
          </p>
          <button
          disabled={true}
            className="bg-gray-800 text-white px-6 py-3 rounded-md hover:bg-gray-700 transition inline-block border border-gray-600"
          >
            التطوع مفتوح فقط فترت رمضان
          </button>
        </div>
      </section>

  
      <section id="donate" className="py-16 px-6 md:px-20 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-medium mb-6 text-gray-800 border-b pb-3">
            تبرع الآن
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            تبرعاتكم تساهم في توفير آلاف الوجبات وإيصال الماء والغذاء للمحتاجين.
            ساهم معنا وكن سبباً في إسعاد أسرة في هذا الشهر الفضيل.
          </p>
          <button
          disabled={true}
        
            className="bg-gray-800 text-white px-6 py-3 rounded-md hover:bg-gray-700 transition inline-block border border-gray-600"
          >
            التبرع مفتوح فقط فترت رمضان
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
