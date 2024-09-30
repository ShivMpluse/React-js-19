import seriesData from "../api/seriesData.json"
import { SeriesCard } from "./SeriesCard";



export const NetFlix = () => {
    return(
      <div className="flex p-2 ">
        {seriesData.map((curElem) => {
          return(
            <>
              <SeriesCard key={curElem.id} data = {curElem}/>
            </>
          )
        })}
      </div> 
    );
  };

//   export default Netflix


