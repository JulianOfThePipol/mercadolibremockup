import { useRef } from "react"
import { useNavigate } from "react-router-dom";
import "./Navbar.css"
import searchImg from "../../assets/search.svg"

export default function Navbar() {
  const searchRef = useRef();
  const navigate = useNavigate();

  function handleSearchClick() {
    
    navigate(`/items?search=${searchRef.current.value}`);
  }
  function handleLogoClick (){
    navigate ( `/`);
  }

  return (
    <header className="Navbar">
        <img src="/favicon.svg" className="Navbar--img" alt="Logo" onClick={handleLogoClick}/>
        <input id="search" name="search" ref={searchRef} placeholder="Buscar productos, marcas y más..." className="Navbar--search--input" onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          handleSearchClick()
                        }
                    }}/>
        <button className="Navbar--search--button" onClick={handleSearchClick}><img src={searchImg} alt="Search Button"/></button>
    </header>
  )
}