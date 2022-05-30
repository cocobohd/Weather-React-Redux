import React from "react"
import "../../styles/info.css"
import searchLogo from "../../imgs/search.png"
import City from "../City/City"
import Details from "../Details/Details"
import { useDispatch} from "react-redux";
import { handleChangeLocation } from "../../store/actions"

export default function Info () {
  const input = React.createRef()

  const dispatch = useDispatch()

  function findCity() {
    dispatch(handleChangeLocation(input.current.value))
    input.current.value = ""
  }

  return (
    <div className="info">
      <div className="info--container">
        <input className="input" placeholder="Location..." ref={input}/>
        <button onClick={() => findCity()} className="search--btn"><img className="search--btn--img" src={searchLogo} alt="search"/></button>
      </div>
      <City />
      <p className="line"></p>
      <Details />
    </div>
  )
}