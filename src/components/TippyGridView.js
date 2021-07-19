import React, { useEffect, useState } from "react";
import axios from "axios";


function TippyGridView(props) {
    const [data,setData] = useState([])
    const [search,setSearch] = useState('')

    useEffect(() => {
        const fetchData=async() => {
            const results=await axios("https://api.giphy.com/v1/gifs/trending",{
                params:{
                    api_key:"RlJySDTspT404vWOGjJp56b2slp5g7KQ",
                    limit:10
                }
            });
            console.log(results)
            setData(results.data.data)
        }

        fetchData()
    },[]);

    const handleInput= async(e) => {
        setSearch(e.target.value)
        const results=await axios("https://api.giphy.com/v1/gifs/search",{
            params:{
                api_key:"RlJySDTspT404vWOGjJp56b2slp5g7KQ",
                q:search,
                limit:10
            }
        }); 
        console.log(results)
        setData(results.data.data)   
    }


    return (
        <div>
            <div className="tooltipContainer">
                <input type="text" placeholder="Search Gif" onChange={handleInput}/>
                <div className="inner-container">

                    <>
                    {data.map((singleGif) => (
                        <div className="childGif">
                             {console.log(singleGif.images.fixed_height.url)}

                            <img src={singleGif.images.fixed_height.url} alt="" onClick={()=>{
                                props.gifLink(singleGif.images.fixed_height.url)
                                props.setVisible(false)
                            }} />
                        </div>
                       
                    ))}
                    </>
                </div>
            </div>
        </div>
    )
}

export default TippyGridView


// https://api.giphy.com/v1/gifs/search?api_key=RlJySDTspT404vWOGjJp56b2slp5g7KQ&q=&limit=10&offset=0&rating=g&lang=en