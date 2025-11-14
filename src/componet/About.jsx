import { useContext } from "react";
import ModeContext from "../context/Mode_context";

export const About =()=>{
      const { isDarkMode } = useContext(ModeContext);

    return(
        <div className={`${!isDarkMode ? "nav-dark" : "nav-light"}`}>
            <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas doloremque inventore recusandae <br/>illum minus mollitia quod totam, natus quos, nihil assumenda consequuntur aperiam eum cum eaque incidunt cupiditate dolorum aut!</h3>
        </div>
    );
}