const CommentCard = ({comment}) => {
    return ( <div className="flex flex-col gap-3 p-7">
        <div className="w-full flex justify-start gap-4 items-center ">
            {comment.commenter.image ? 
            <img className="w-10 h-10 rounded-full col-span-1" src={comment.commenter.image.image_url} alt="" />:
            <img className="w-10 h-10 rounded-full col-span-1" src="/headshot.jpg"  />
            }
            <h4 className="col-span-3">{ comment.commenter.userInfo ?
                comment.commenter.userInfo.first_name + " "+comment.commenter.userInfo.last_name
               :
               "@"+comment.commenter.name
               }
            </h4>
        </div>
        <div className="p-7 w-5/6 bg-slate-200 rounded-lg">
            <p>
                {comment.comment}
            </p>
        </div>
    </div> );
}
 
export default CommentCard;