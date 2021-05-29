import React from 'react';
import './Stations.css'
import minus from '../../images/minus.png'
import plus from '../../images/plus.png'

const Stations = ({item,key}) => {
    console.log(item)
    const {name, bandwidth, id, image} = item;

    const handleClick = () =>{
        function myFunction() {
            var x = document.getElementById("myDIV");
            if (x.style.display === "none") {
              x.style.display = "block";
            } else {
              x.style.display = "none";
            }
          }
        console.log("clicked")
    }

    return (
        <div className="stations">
            <div onClick={()=>handleClick()} className="station__details d-flex justify-content-between">
                <h3>{name}</h3>
                <h3>{bandwidth}</h3>
            </div>
            <div className="station__image d-none">
                <img className="station__image__btn" src={minus} alt="" />
                <img className="station__image__dp" src={image} alt="" />
                <img className="station__image__btn" src={plus} alt="" />
            </div>
        </div>
    );
};

export default Stations;