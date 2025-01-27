const CreatorCard = ({img="/headshot.jpg", name, followersnum, isfollowing}) => {
    return ( <div className="grid grid-cols-3 justify-center items-center w-96 p-5 h-24 bg-white">
        <img className="w-12 h-12 rounded-full" src={img} alt={`porfile picture of ${name} on cookgether`} />
        <div>
            <h4 className="text-lg">{name}</h4>
            <p classsName="text-xs" >{followersnum} followers</p>
        </div> 
        {
            !isfollowing ? <button className="bg-yellow-400 w-24 h-6  mr-24 text-black rounded-md">+ follow</button>: <button className="bg-black w-24 h-6 text-white rounded-md" >following</button>
        }
    </div> );
}
 
export default CreatorCard;