import SearchBar from "./SearchBar"
import CameraIcon from "./icons/CamaraIcon"
import BellIcon from "./icons/BellIcon"
import SettingIcon from "./icons/SettingIcon"

const Nav = () =>{
  return (
    <nav className="block ml-60 border-thin-2 h-28 fixed z-10">
      <div className="flex justify-between items-start h-20">
        <SearchBar></SearchBar>
        <div className="flex justify-between items-center w-36 mt-4 mr-10">
          <CameraIcon></CameraIcon>
          <BellIcon></BellIcon>
          <SettingIcon></SettingIcon>
        </div>
      </div>
      <div className="flex gap-12 nav-gradiant">
        <span className="nav-filter nav-btn">All</span>
        <span className="nav-filter nav-btn">Gaming</span>
        <span className="nav-filter nav-btn">Thoughts</span>
        <span className="nav-filter nav-btn">Music</span>
        <span className="nav-filter nav-btn">Thrillers</span>
        <span className="nav-blur nav-btn">Mixes</span>
        <span className="nav-filter nav-btn">Avatar</span>
        <span className="nav-filter nav-btn">criticisma</span>
        <span className="nav-filter nav-btn">Korean dramas</span>
        <span className="nav-filter nav-btn">Characters</span>
        <span className="nav-filter nav-btn">Eating</span>
      </div>
    </nav>
  )
}

export default Nav