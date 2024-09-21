import "./globals.css";
import Nav from "./components/Nav";
import Aside from "./components/Aside";
import Card from "./components/Card";

const Page = () =>{
  const cardsInfo=[
    {videoId: "1",title: "Design and Prototype an App with Play - Full 3-hour Course",description: "Design and Prototype an App with Play - Full 3-hour Course",thumbnail: "/images/img1.png",duration: "4:30",views: "14k",publishedAt: "1 month ago",channelTitle: "Designcode",channelProfilePicture: "/images/img1-logo.png"},
    {videoId: "2",title: "Create 3D Site with Spline and React - Full Course",description: "Create 3D Site with Spline and React - Full Course",thumbnail: "/images/img2.png",duration: "12:30",views: "14k",publishedAt: "1 month ago",channelTitle: "Designcode",channelProfilePicture: "/images/img2-logo.png"},
    {videoId: "3",title: "How to Use AI Art Generator on Midjourney",description: "How to Use AI Art Generator on Midjourney",thumbnail: "/images/img3.png",duration: "16:20",views: "14k",publishedAt: "1 month ago",channelTitle: "midjourneyArt",channelProfilePicture: "/images/img3-logo.png"},
    {videoId: "4",title: "Desktop App UI Design in Figma - Full Course",description: "Desktop App UI Design in Figma - Full Course",thumbnail: "/images/img4.png",duration: "40:36",views: "14k",publishedAt: "1 month ago",channelTitle: "Designcode",channelProfilePicture: "/images/img4-logo.png"},
    {videoId: "5",title: "Design and Prototype an App with Play - Full 3-hour Course",description: "Design and Prototype an App with Play - Full 3-hour Course",thumbnail: "/images/img5.png",duration: "5:50",views: "14k",publishedAt: "1 month ago",channelTitle: "Designcode",channelProfilePicture: "/images/img5-logo.png"},
    {videoId: "6",title: "Build a 3D Site Without Code with Framer - Crash Course",description: "Build a 3D Site Without Code with Framer - Crash Course",thumbnail: "/images/img6.png",duration: "54:30",views: "14k",publishedAt: "1 month ago",channelTitle: "Designcode",channelProfilePicture: "/images/img6-logo.png"},
  ];
  return (
    <section className="overflow-y-auto h-screen">
        <Aside></Aside>
          <Nav></Nav>
          <div className="ml-60 flex gap-4 flex-wrap mt-32">
            {cardsInfo.map(cardInfo => {
              return <Card key={cardInfo.videoId} {...cardInfo}/>;
            })}
          </div>
    </section>
  )
}

export default Page