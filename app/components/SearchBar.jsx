import SearchIcon from "./icons/SearchIcon";
import MicIcon from "./icons/MicIcon";

const SearchBar = () =>{
  return (
    <div className="flex items-center ring-slate-300 ring-[1px] rounded-full p-1 w-96 mt-4 mx-60">
      <SearchIcon></SearchIcon>
      <input className="bg-transparent outline-0 w-full text-sm" type="text" value="Gaphikart"/>
      <MicIcon></MicIcon>
    </div>
  )
}

export default SearchBar