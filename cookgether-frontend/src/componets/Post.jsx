import { faComment, faCommentDots, faShareSquare, faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";

const Post = ({post}) => {
    return ( <div className="w-5/6 md:w-96 lg:w-[30rem] bg-white  rounded-lg overflow-hidden">
        <div className="w-full p-4 bg-white grid items-center justify-center grid-cols-6">
            <img className="w-12 col-span-1 h-12 rounded-full" src="/headshot.jpg" alt={`picture of ${post.user.name}`} />
            <div className="col-span-3">
                <h4 className="text-lg">
                    {post.user_info ? post.user_info.first_name + post.user_info.last_name :post.user.name}
                </h4>
                <p className="text-slate-700 text-xs">{post.createdAt}</p>
            </div>
            <button className="bg-yellow-400 col-span-1 w-24 h-6  mr-24 text-black rounded-md">+ follow</button>
        </div>
        <div className="w-5/6 md:w-96 lg:w-[30rem] h-80 object-cover ">
            <img src={post.images[0].imageUrl} className="object-cover w-5/6 md:w-96 lg:w-[30rem] h-80"  alt="picture of food" />
        </div>
        <div className="p-4">
            <h3 className="text-xl">{post.title}</h3>
            <p className="text-sm">{post.description}</p>
            <Link to={`/post/${post.id}`} className="text-blue-400" >readmore</Link>
        </div>
        <div className="w-full grid grid-cols-3 my-3 border-t-2 border-t-yellow-600 border-solid p-2">
            <div className="flex gap-2 place-self-center">
                <FontAwesomeIcon icon={faThumbsUp} size="lg" />
                <p>{post.likeCount} likes</p>
            </div>
            <div className="flex gap-2 place-self-center">
                <FontAwesomeIcon icon={faCommentDots} size="lg"/>
                <p>{post.commentCount} comment</p>
            </div>
            <div className="flex gap-2 place-self-center">
                <FontAwesomeIcon icon={faShareSquare} size="lg"/>
                <p>{post.shareCount} shares</p>
            </div>
        </div>
    </div> );
}
 
export default Post;