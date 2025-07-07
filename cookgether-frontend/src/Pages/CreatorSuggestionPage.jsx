import { Link } from "react-router";
import CreatorCard from "../componets/CreatorCard";
const CreatorSuggestionPage = () => {
    return ( <>
        <h1 className="text-yellow-400 text-5xl my-7 text-center" >Creators based on your interest</h1>
        <div className="flex flex-col justify-center items-center gap-y-4">
            <CreatorCard name={"Endale Kinfe"}
                            followersnum={"10m"}
                            isfollowing={true}
                            />

            <CreatorCard name={"sol brs"}
                            followersnum={"5m"}
                            isfollowing={false}
                            />
        </div>
        
        <Link to="/">
            <button className="bg-black w-24 h-10 float-end mr-24 text-white rounded-md" >finish</button>
        </Link>
    </> );
}
 
export default CreatorSuggestionPage;