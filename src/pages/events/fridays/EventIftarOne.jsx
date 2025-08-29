import IftarDetails from "../../../components/IftarDetails";
import video from "../../../assets/Friday1/video.mp4"

const EventIftarOne = () => {
  const eventData = {
    title: "جمعة الخير الأولى",
    date: "10 رمضان 1446",
    description:
      "انطلقت فعاليات جمعة الخير الأولى بمشاركة واسعة من المتطوعين والمحتاجين. تم تقديم وجبات إفطار لـ 250 شخصاً في المسجد الجامع، مع برنامج ترفيهي وتوعوي للأطفال.",
    images: [
      "https://www.redswastik.com/files/branches/Nocontent2.png",
      "https://www.redswastik.com/files/branches/Nocontent2.png",
      "https://www.redswastik.com/files/branches/Nocontent2.png",
      "https://www.redswastik.com/files/branches/Nocontent2.png",
      "https://www.redswastik.com/files/branches/Nocontent2.png",
      "https://www.redswastik.com/files/branches/Nocontent2.png",
    ],
    video: video,
    
  };

  

  return <IftarDetails eventData={eventData}/>;
};

export default EventIftarOne;
