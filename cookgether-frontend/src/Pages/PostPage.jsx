import { useEffect, useRef, useState } from "react";
import axiosClient from "../axios-client";
import CommentCard from "../componets/CommentCard";
import { useParams } from "react-router";
import { useStateContext } from "../Context/ContextProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faCommentDots,  faPaperPlane, faShareSquare, faThumbsUp } from "@fortawesome/free-regular-svg-icons";



const PostPage = () => {
    const {id} = useParams();
    const [postDetail, setPostDetails] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const {user} = useStateContext();
    const newcomment = useRef();

    useEffect(()=>{
        setLoading(true)
        axiosClient.get(`/posts/${id}`).then((response)=>{
            setPostDetails(response.data.data);
            console.log(response.data)
            setLoading(false);
            setError(null);
        }).catch((err)=>{
            setLoading(false);
            setError(err)
        })
    }
        ,[])

    function handlecomment(e){
        e.preventDefault();
        const payload = {
            user_id: user.id,
            commentable_id :  postDetail.id,
            comment : newcomment.current.value,
            commentable_type: "App\\Models\\Post"
        };
        
        axiosClient.post("/comments", payload)
        .then((data)=>{
            return <Navigate to={`/post/${postDetail.id}`}/>
        })
        .catch(err=>{
            const response = err.response;
            if (response && response.status ===  422){
                console.log(response.message);
                setError(response);
            }
            setError(response);
        }) 

    }
   
    return (
    <div className="flex flex-col items-center justify-center my-4">
        
        {postDetail && <div className="w-5/6 md:w-96 lg:w-[30rem] bg-white  rounded-lg overflow-hidden">
            <div className="w-full p-4 bg-white grid items-center justify-center grid-cols-6">
                <img className="w-12 col-span-1 h-12 rounded-full" src="/headshot.jpg" alt={`picture of ${postDetail.user.name}`} />
                <div className="col-span-3">
                    <h4 className="text-lg">{postDetail.user_info ? postDetail.user_info.first_name + postDetail.user_info.last_name :postDetail.user.name}</h4>
                    <p className="text-slate-700 text-xs">{postDetail.createdAt}</p>
                </div>
                <button className="bg-yellow-400 col-span-1 w-24 h-6  mr-24 text-black rounded-md">+ follow</button>
            </div>
            <div className="w-5/6 md:w-96 lg:w-[30rem] h-80 object-cover ">
                <img src={postDetail.images[0].imageUrl} className="object-cover w-5/6 md:w-96 lg:w-[30rem] h-80"  alt="picture of food" />
            </div>
            <div className="p-4">
                <h3 className="text-xl">{postDetail.title}</h3>
                <p className="text-sm">{postDetail.description}</p>
            </div>
            <div className="p-4">
                <h3>ingredients</h3>
                <ul>
                    {postDetail.ingredients&& postDetail.ingredients.map((ingredient)=>{
                        <li>
                            {ingredient.name} - {ingredient.amount}
                        </li>
                    })}
                </ul>
            </div>
            <div className="p-4">
                <h3>instructions</h3>
                <ul className="list-disc p-6">
                    {postDetail.instructions && postDetail.instructions.map((instruction)=>{
                       return <li key={instruction.id}>
                            {instruction.instruction}
                        </li>
                    })}
                </ul>
            </div>
            <div className="w-full grid grid-cols-3 my-3 border-t-2 border-t-yellow-600 border-solid p-2">
                <div className="flex gap-2 place-self-center">
                    <FontAwesomeIcon icon={faThumbsUp} size="lg" />
                    <p>{postDetail.likeCount} likes</p>
                </div>
                <div className="flex gap-2 place-self-center">
                    <FontAwesomeIcon icon={faCommentDots} size="lg"/>
                    <p>{postDetail.commentCount} comment</p>
                </div>
                <div className="flex gap-2 place-self-center">
                    <FontAwesomeIcon icon={faShareSquare} size="lg"/>
                    <p>{postDetail.shareCount} shares</p>
                </div>
            </div>
<div>
        {
            postDetail.comments ? 
            <>
                {postDetail.comments.map((comment)=><CommentCard key={comment.id} comment={comment}/>)}
        </>
           :
                <h3>No comments</h3>
           
        }
        <div className="flex flex-col gap-3 p-7">
        <div className="w-full flex justify-start gap-4 items-center ">
            {user.image ? 
            <img className="w-10 h-10 rounded-full col-span-1" src={user.image.imageUrl} alt="" />:
            <img className="w-10 h-10 rounded-full col-span-1" src="/headshot.jpg"  />
            }
            <h4 className="col-span-3">{ user.userInfo ?
                user.userInfo.first_name + " "+user.userInfo.last_name
               :
               "@"+user.name
               }
            </h4>
        </div>
        <form onSubmit={handlecomment} className="p-7 w-5/6 bg-slate-200 rounded-lg flex items-center gap-5">
            <textarea ref={newcomment} name="comment" rows="2" className="w-full"></textarea>
            <button type="submit" className="">
                <FontAwesomeIcon icon={faPaperPlane} size="xl"/>
            </button>
        </form>
    </div>
 </div>
        </div>
    }

        {
        isLoading && 
        <div>loading post</div>
        }
    </div>
     );
}
 
export default PostPage;