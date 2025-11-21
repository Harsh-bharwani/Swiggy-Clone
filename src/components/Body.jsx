import { useParams } from "react-router";
import Card from "./Card";
import ShimmerUI from "./ShimmerUI";
import { Component, useEffect, useState } from "react";
import { useParams } from "react-router";
// import cardItems from "../../utils/cardItems";

class Body extends Component{
    state={
        restaurantList: [],
        filterRestaurantList: [],
        cloudinaryBaseURL: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"
    }
    async getData(){
        const URL = "https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9525755&lng=77.5292796&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
        try {
            const response = await fetch(URL);
            const data = await response.json();
            return data;
        } catch (error) {
            console.log("error is", error);

        }
    }
    async getCardContainingRestaurants() {
        const jsonData = await this.getData();
        const cards = jsonData?.data?.cards;
        const cardContainingRestaurants = cards.find((c) => c?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        return cardContainingRestaurants;
    }
    async componentDidMount(){
        console.log("use effect triggered");
        
        const cardContainingRestaurants = await this.getCardContainingRestaurants();
        this.setState(
            {
                restaurantList: cardContainingRestaurants?.card?.card?.gridElements?.infoWithStyle?.restaurants,
                filterRestaurantList:  cardContainingRestaurants?.card?.card?.gridElements?.infoWithStyle?.restaurants
            }            
        )
    }
    componentDidUpdate(){
        this.componentDidMount();
    }
    render(){
        return (
        <>
            {/* <div className="search-section">
                <input onKeyUp={searchQuery} id="searchQuery" placeholder="Search your favourite restaurant..." size="60" className="border border-2 text-center border-orange-400 p-4 rounded-xl"></input>
            </div>
            <div className="ms-2 -mt-5">
                <label htmlFor="ratingFilter" className="block font-bold text-2xl text-black">Filter</label>
                <select id="ratingFilter" onChange={(e) => filterRatings(e.target.value)} className="border ms-2 rounded rounded-full text-center text-black">
                    <option value="-1">All</option>
                    <option value="greater4.2">Greater than 4.2</option>
                    <option value="greater4.5">Greater than 4.5</option>
                </select>
            </div> */}
            {/* // Conditional Rendering  */}
            {
                (this.state.filterRestaurantList.length === 0) ? (<ShimmerUI />) :
                    (
                        <div className="cards-section grid grid-cols-3 gap-8">
                            {
                                this.state.filterRestaurantList.map(
                                    (card) => <Card key={card.info.id} image={this.state.cloudinaryBaseURL + '/' + card.info.cloudinaryImageId} title={card.info.name} description={card.info.avgRating} />
                                )
                            }
                        </div>
                    )
            }
        </>
    )
    }
}



// const Body = function () {
//     const [restaurantList, setRestaurantList] = useState([]);
//     const [filterRestaurantList, setFilterRestaurantList]=useState([]);

//     const param =useParams();
//     console.log(param.id);
    

//     const cloudinaryBaseURL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";
//     async function getData() {
//         const URL = "https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9525755&lng=77.5292796&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
//         const URL2="https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9507849&lng=77.532563&restaurantId="+param.id;
//         try {
//             const response = await fetch(URL);
//             const data = await response.json();
//             return data;
//         } catch (error) {
//             console.log("error is", error);

//         }
//     }
//     async function getCardContainingRestaurants() {
//         const jsonData = await getData();
//         const cards = jsonData?.data?.cards;
//         const cardContainingRestaurants = cards.find((c) => c?.card?.card?.gridElements?.infoWithStyle?.restaurants);
//         return cardContainingRestaurants;
//     }
//     useEffect(() => {
//         (async () => {
//             console.log("use effect triggered");
            
//             const cardContainingRestaurants = await getCardContainingRestaurants();
//             // console.log(cardContainingRestaurants);
//             setRestaurantList(cardContainingRestaurants?.card?.card?.gridElements?.infoWithStyle?.restaurants);
//             setFilterRestaurantList(cardContainingRestaurants?.card?.card?.gridElements?.infoWithStyle?.restaurants);
//         })()
//     }, [])


//     function filterRatings(filterCondition) {
//         // cardItems = [];// Imported Items value won't be manipulated (throws a reference error)
//         console.log(filterCondition);
        
//         if (filterCondition === "greater4.2") {
//             setFilterRestaurantList(restaurantList.filter((obj) => {
//                 console.log(obj.info.avgRating);
//                 return obj.info.avgRating > 4.2;
//             }));
//         }
//         else if (filterCondition === "greater4.5") {
//             setFilterRestaurantList(restaurantList.filter((obj) => {
//                 return obj.info.avgRating > 4.5;
//             }));
//         }
//         else {
//             setFilterRestaurantList(restaurantList);
//         }
//     }
//     function searchQuery() {
//         const search = document.getElementById("searchQuery").value.toLowerCase();
//         setFilterRestaurantList(restaurantList.filter((restaurant) => {
//             return restaurant.info.name.toLowerCase().includes(search);
//         }))

//     }

//     return (
//         <>
//             <div className="search-section">
//                 <input onKeyUp={searchQuery} id="searchQuery" placeholder="Search your favourite restaurant..." size="60" className="border border-2 text-center border-orange-400 p-4 rounded-xl"></input>
//             </div>
//             <div className="ms-2 -mt-5">
//                 <label htmlFor="ratingFilter" className="block font-bold text-2xl text-black">Filter</label>
//                 <select id="ratingFilter" onChange={(e) => filterRatings(e.target.value)} className="border ms-2 rounded rounded-full text-center text-black">
//                     <option value="-1">All</option>
//                     <option value="greater4.2">Greater than 4.2</option>
//                     <option value="greater4.5">Greater than 4.5</option>
//                 </select>
//             </div>
//             {/* // Conditional Rendering  */}
//             {
//                 (filterRestaurantList.length === 0) ? (<ShimmerUI />) :
//                     (
//                         <div className="cards-section grid grid-cols-3 gap-8">
//                             {
//                                 filterRestaurantList.map(
//                                     (card) => <Card key={card.info.id} image={cloudinaryBaseURL + '/' + card.info.cloudinaryImageId} title={card.info.name} description={card.info.avgRating} />
//                                 )
//                             }
//                         </div>
//                     )
//             }
//         </>
//     )
// }

export default Body;