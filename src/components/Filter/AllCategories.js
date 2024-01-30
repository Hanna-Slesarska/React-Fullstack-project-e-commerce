import Filter from "../Filter/Filter";
import './filter.css';


const AllCategories = () => {
    return (<div className="cat">
            {['View all', 'Dress', 'Top', 'Purse', 'Shoes', 'Accessory', 'Jacket', 'Jeans'].map((category, index) => <Filter category={category} key={index}/>
        )}
    </div>)
}
export default AllCategories;