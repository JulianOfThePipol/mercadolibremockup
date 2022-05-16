import { useRef } from "react"
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const searchRef = useRef();
  const navigate = useNavigate();

  function handleSearchClick() {
    navigate(`/items?search=${searchRef.current.value}`);
  }

  return (
    <header className="Navbar">
      <div className="Navbar--container">
        <img src="/favicon.svg" className="Navbar--img" alt="Logo" />
        <div className="Navbar--search">
          <input id="search" name="search" ref={searchRef} placeholder="Nunca dejes de buscar" className="Navbar--search--input" />
          <button className="Navbar--search--button" onClick={handleSearchClick}>
          </button>
        </div>
      </div>
    </header>
  )
}