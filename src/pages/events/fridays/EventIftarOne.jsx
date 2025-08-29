import IftarDetails from "../../../components/IftarDetails";
import video from "../../../assets/Friday1/video1.mp4"

const EventIftarOne = () => {
  const eventData = {
    title: "جمعة الخير الأولى",
    date: "10 رمضان 1446",
    description:
      "انطلقت فعاليات جمعة الخير الأولى بمشاركة واسعة من المتطوعين والمحتاجين. تم تقديم وجبات إفطار لـ 250 شخصاً في المسجد الجامع، مع برنامج ترفيهي وتوعوي للأطفال.",
    images: [
      "https://images.unsplash.com/photo-1517232115160-ff93364542dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1605888236237-5bb7c32b6d70?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1611606063065-ee7946e07526?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1611606063065-ee7946e07526?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    ],
    video: video,
    
  };

  

  return <IftarDetails eventData={eventData}/>;
};

export default EventIftarOne;
