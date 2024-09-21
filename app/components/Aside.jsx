import BrowserButton from "./BrowserButton";
import MenuIcon from "./icons/MenuIcon";
import HomeIcon from "./icons/HomeIcon";
import ShortsIcon from "./icons/ShortsIcon";
import SubscriptionsIcon from "./icons/SubscriptionsIcon";
import PapayaMusicIcon from "./icons/PapayaMusicIcon";
import LibraryIcon from "./icons/LibraryIcon";
import HistoryIcon from "./icons/HistoryIcon";
import YourVideosIcon from "./icons/YourVideosIcon";
import WatchLaterIcon from "./icons/WatchLaterIcon";
import DownloadsIcon from "./icons/DownloadsIcon";
import DesignCodeIcon from "./icons/DesignCodeIcon";
import SketchIcon from "./icons/SketchIcon";
import FigmaIcon from "./icons/FigmaIcon";

const Aside = () => {
  return (
    <aside className="w-56 pl-5 fixed overflow-y-scroll h-screen aside">
      <BrowserButton />
      <div className="flex">
        <MenuIcon></MenuIcon>
        <p className="text-3xl ml-4 mb-4 logo-font font-extrabold">Papaya</p>
      </div>
      
        {/* <hr /> */}
        <div className="border-thin">
          <div className="flex items-center py-2 aside-gradiant aside-btn">
            <HomeIcon></HomeIcon>
            <p className="ml-4 font-semibold">Home</p>
          </div>
        </div>
        {/* <hr /> */}
        <div className="border-thin">
          <div className="flex items-center py-2 aside-btn aside-btn group">
            <ShortsIcon></ShortsIcon>
            <p className="ml-4 aside-ligth group-hover:text-white">Shorts</p>
          </div>
          {/* <hr /> */}
          <div className="border-thin">
            <div className="flex items-center py-2 aside-btn group">
              <SubscriptionsIcon></SubscriptionsIcon>
              <p className="ml-4 aside-ligth group-hover:text-white">Subscriptions</p>
            </div>
          </div>
        </div>
        {/* <hr /> */}
        <div className="border-thin">
          <div className="flex items-center py-2 aside-btn group">
            <PapayaMusicIcon></PapayaMusicIcon>
            <p className="ml-4 aside-ligth group-hover:text-white">Papaya Music</p>
          </div>
        </div>
        {/* <hr/> */}

    <h3 className="my-4 aside-ligth uppercase text-sm">My Channel</h3>
      
    {/* <hr /> */}
    <div className="border-thin">
      <div className="flex items-center py-2 aside-btn group">
        <LibraryIcon></LibraryIcon>
        <p className="ml-4 aside-ligth group-hover:text-white">Library</p>
      </div>
    </div>
      {/* <hr /> */}
      <div className="border-thin">
        <div className="flex items-center py-2 aside-btn group">
          <HistoryIcon></HistoryIcon>
          <p className="ml-4 aside-ligth group-hover:text-white">History</p>
        </div>
      </div>
    {/* <hr /> */}
    <div className="border-thin">
      <div className="flex items-center py-2 aside-btn group">
        <YourVideosIcon></YourVideosIcon>
        <p className="ml-4 aside-ligth group-hover:text-white">Your Videos</p>
      </div>
    </div>
      {/* <hr /> */}
      <div className="border-thin">
        <div className="flex items-center py-2 aside-btn group">
          <WatchLaterIcon></WatchLaterIcon>
          <p className="ml-4 aside-ligth group-hover:text-white">Watch Later</p>
        </div>
      </div>
    {/* <hr /> */}
    <div className="border-thin">
      <div className="flex items-center py-2 aside-btn group">
        <DownloadsIcon></DownloadsIcon>
        <p className="ml-4 aside-ligth group-hover:text-white">Downloads</p>
      </div>
    </div>
    {/* <hr /> */}
    <div className="border-thin">
      <div className="flex items-center py-2 aside-btn group">
        <ShortsIcon></ShortsIcon>
        <p className="ml-4 aside-ligth group-hover:text-white">Show More</p>
      </div>
    </div>
    {/* <hr/> */}

    <h3 className="my-4 aside-ligth uppercase text-sm">Subscriptions</h3>
    {/* <hr /> */}
    <div className="border-thin">
      <div className="flex items-center py-2 aside-btn group">
        <DesignCodeIcon></DesignCodeIcon>
        <p className="ml-4 aside-ligth group-hover:text-white">DesignCode</p>
        </div>
    </div>
    {/* <hr /> */}
    <div className="border-thin">
      <div className="flex items-center py-2 aside-btn group">
        <FigmaIcon></FigmaIcon>
        <p className="ml-4 aside-ligth group-hover:text-white">Figma</p>
      </div>
    </div>
    {/* <hr/> */}
    <div className="border-thin">
      <div className="flex items-center py-2 aside-btn group">
        <SketchIcon></SketchIcon>
        <p className="ml-4 aside-ligth group-hover:text-white">Sketch</p>
      </div>
    </div>
    {/* <hr/> */}
    <div className="border-thin">
      <div className="flex items-center py-2 aside-btn group">
        <img className="aside-btn-svg" src="/images/Spline.jpg" alt="" />
        <p className="ml-4 aside-ligth group-hover:text-white">Spline</p>
      </div>
    </div>
    </aside>
  );
};

export default Aside;
