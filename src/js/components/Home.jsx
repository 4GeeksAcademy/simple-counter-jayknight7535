import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import SixDigit from './Countnumber'


//create your first componen

 
 const Home = (props) => {
    return(
		<div className="card">
			<div className="card-body d-flex flex-row mb-2">
				 <i className="fa-solid fa-stopwatch" id="stopwatch" style={{color: "#ffffff"}}></i>
			     <SixDigit num={props.time}/>
			</div>
		</div>)
}



export default Home;
