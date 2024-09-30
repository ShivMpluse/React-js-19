/* eslint-disable react/prop-types */
import styled from 'styled-components'


export const SeriesCard = ({data}) => {
    // console.log(props)
    const {id, img_url, name, rating, description, genre, cast, watch_url} = data;

        // object

        // const Button_React = styled.button({
        //     padding: "2px 8px",
        //     border: "none",
        //     fontSize: "25px",
        //     backgroundColor: `${rating >= 8.5 ? "#7dcea0" : "#7dcea0"}`,
        //     color: "black",
        //     fontWeight: "600",
        //     cursor: "pointer",
        // })

            const Head = styled.h3`
                font-size: 15px;
                color: #7dcea0;
            `;




        // Templets letteral

        const Button_React = styled.button`
                padding: 4px 10px;
                border: none;
                font-size: 20px;
                background-color: ${(props) => 
                    props.rating >= 8.5 ? "#7dcea0" : "#f7dc6f"};
                color: black;
                font-weight: 600;
                cursor: pointer;
            `;
            
            
        
    return(
        <>
            <div className='container flex'>
                <div className="card flex-wrap">
                    <div className="col-lg-3 p-5">
                        <div className="img">
                            <img src={img_url} alt="Netflix.5" height="100%" width="100%" className="mt-2" />
                        </div>
                        <div className="flex flex-col gap-6 px-1 flex-wrap">
                            <h2><b>Name:</b> {name}</h2>
                            <Head>Rating: <span className={rating >= 8.5 ? "super-hit" : "average"}>{rating}</span> </Head>
                            <p>
                            <b>Summery:</b> {description} 
                            </p>
                            <p>
                            <b>Genre:</b> {genre} 
                            </p>
                            <p>
                                <b>Cast:</b> {cast}
                            </p>
                            <a href={watch_url} target="_blank">
                                <Button_React rating={rating}>Watch Now</Button_React>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}