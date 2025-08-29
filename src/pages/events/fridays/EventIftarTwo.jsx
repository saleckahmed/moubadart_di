import IftarDetails from "../../../components/IftarDetails";
import video from "../../../assets/Friday2/video.mp4";


const EventIftarTwo = () => {
  const eventData = {
    title: "جمعة الخير الثانية",
    date: "15 رمضان 1446",
    description:
      "شهدت الجمعة الثانية استمراراً لفعاليات الإفطار الجماعي مع إضافة برنامج توعوي عن أهمية الصحة الغذائية في رمضان. تم توزيع أكثر من 300 وجبة إفطار مع حقيبة تحتوي على مواد توعوية.",
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


  return <IftarDetails eventData={eventData}  />;
};

export default EventIftarTwo;
