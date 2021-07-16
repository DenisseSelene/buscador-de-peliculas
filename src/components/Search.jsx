import Styles  from "./Search.module.css"
import { BsSearch } from "react-icons/bs";
import { useEffect, useState } from "react"; 
import { useHistory } from "react-router";
import { useQuery } from "../hooks/useQuery";


export function Search() {

    const query = useQuery();
    const search = query.get("search");

    const [SearchText, setSearchText] = useState("");
    const history = useHistory();

    useEffect(() => {
        setSearchText(search || "" );
    }, [search]);


    const handleSubmit = (e) => {
        e.preventDefault();
        history.push("/?search=" + SearchText);
    }

    return (
        <form className={Styles.searchContainer} onSubmit={handleSubmit}>
        <div className={Styles.searchBox}>
            
            <input className={Styles.searchInput} 
            type="text" 
            placeholder="Buscar película" 
            value={SearchText} onChange={(e) => setSearchText(e.target.value)}
            />
            
            <button className={Styles.searchButton} type="submit">
                <BsSearch size={20} />
            </button>
        </div>
        </form> 
    )
}
