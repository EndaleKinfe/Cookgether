import { useEffect, useState } from "react";
import Post from "../componets/Post";
import axiosClient from "../axios-client";

const HomeFeed = () => {
    const [posts, setPosts] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(()=>{
        setLoading(true)
        axiosClient.get("/posts").then((response)=>{
            setPosts(response.data.data);
            console.log(response.data.data)
            setLoading(false);
            setError(null);
        }).catch((err)=>{
            setLoading(false);
            setError(err)
        })
    }
        ,[])
    const p = {
        title: "recipe of beso",
        description: "what can i say other than good ethiopian food",
        user: {
            fullname: "silo unibook",
            following: false
        },
        createdAt: "may-23-34",
        id: 2,
        commentCount: 34234,
        likeCount: 23234,
        shareCount: 23,
        images: [
            {
                id:1,
                imageUrl: "/post.jpg"
            },
            {
                id:2,
                imageUrl: "/post.jpg"
            },
             {
                id:3,
                imageUrl: "/post.jpg"
            }
        ] 
    }
    return ( <div className="flex flex-col my-7 gap-y-5 justify-center items-center">
        {posts&& posts.map((post)=><Post key={post.id} post={post}/>)}
        {isLoading&& <><Post post={p}/>
        <Post post={p}/></>}
        {error&& <div>error</div>}
    </div> );
}
 
export default HomeFeed;