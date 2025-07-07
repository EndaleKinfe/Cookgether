import { useStateContext } from "../Context/ContextProvider";

const CurrentUserCard = () => {
    const {user} = useStateContext();
    return ( <div className="w-full p-2 bg-white grid  grid-cols-4">
        <img className="col-span-1 w-12 h-12 rounded-full" src="/headshot.jpg" alt={`profile picture of ${user.name}`} />
        <div className="col-span-3">
            <h3>{user.user_info.first_name +" "+ user.user_info.last_name}</h3>
            <p>@{user.name}</p>
        </div>
    </div> );
}
 
export default CurrentUserCard;