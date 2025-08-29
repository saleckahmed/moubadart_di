import IftarDetails from "../../../components/IftarDetails";

const EventIftarTwo = () => {
  const eventData = {
    title: "جمعة الخير الثانية",
    date: "15 رمضان 1446",
    description:
      "شهدت الجمعة الثانية استمراراً لفعاليات الإفطار الجماعي مع إضافة برنامج توعوي عن أهمية الصحة الغذائية في رمضان. تم توزيع أكثر من 300 وجبة إفطار مع حقيبة تحتوي على مواد توعوية.",
    images: [
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1543339301-9c5f6b5e4a90?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    ],
    video: "https://www.youtube.com/embed/6stlCkUDG_s",
  };


  return <IftarDetails eventData={eventData}  />;
};

export default EventIftarTwo;
