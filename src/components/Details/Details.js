import React from "react";
import "../../styles/details.css"
import { useSelector } from "react-redux";

export default function Details() {
  const humidity = useSelector((state) => state.humidity)
  const cloud = useSelector((state) => state.cloud)
  const wind_kph = useSelector((state) => state.wind_kph)
  const precip_mm = useSelector((state) => state.precip_mm)

  return (
    <div className="details">
      <h3>Weather Details</h3>
      <div className="details--info">
        <p>Humidity</p>
        <p className="details--stat">{humidity}%</p>
      </div>
      <div className="details--info">
        <p>Cloudy</p>
        <p className="details--stat">{cloud}%</p>
      </div>
      <div className="details--info">
        <p>Wind</p>
        <p className="details--stat">{wind_kph}km/h</p>
      </div>
      <div className="details--info">
        <p>Rain</p>
        <p className="details--stat">{precip_mm}mm</p>
      </div>
    </div>
  )
}