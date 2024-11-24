import React, { useEffect, useState } from "react";
const Github = () => {
    const [data, setData] = useState([])
    useEffect( () =>{
        
        fetch("https://dummyapi.online/api/movies")
        .then(res => res.json())
        .then(data => {
            console.log(data [0]);
            //setData(data.data || []);
            setData(Array.isArray(data) ? data : []);
        })
        .catch((error) => console.error("failed to fetch movies", error))
    }, [])

    const getFullImageUrl = (path) => {
        const baseUrl = "https://dummyapi.online/"; 
        return path.startsWith("http") ? path : `${baseUrl}${path}`;
    };
    return (
        <>          
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6 flex flex-wrap ">
                {data.length > 0 ?  (
                    data.map((movie, index) => (
                        <div className="w-3/12 p-2 " key= {index}>
                            <div className="shadow-md p-2 rounded-s-md"> 
                                <img src={getFullImageUrl(movie.image)} style={{width:"25%"}} />
                                
                                <h1 className="text-xl text-gray "> Movie Name : <span className="font-bold">{movie.movie} </span></h1>
                                <p> Rating : {movie.rating}</p>
                                <p> Id : {movie.id}</p>
                            </div>
                        </div>
                        ))
                ) : (
                    <p> Loading Movies or no movie available</p>
                )
            };
            </div>

        </>
    )
}
export default Github