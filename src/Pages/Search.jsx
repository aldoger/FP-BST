import { useState } from "react";
import Footer from "../component/Footer";
import Navbar from "../component/navbar";
import SearchBox from "../component/searchBar";
import { searchFood } from "../Services/food";

const Search = () => {
    const [foodDetails, setFoodDetails] = useState(null); 
    
    const handleSearch = (foodname) => {
        searchFood(foodname, (data) => {
            if (data && data.length > 0) {
                setFoodDetails(data[0]); 
            } else {
                setFoodDetails(null); 
            }
        });
    };

    return (
        <>
            <Navbar />
            <div>
                <div className="bg-gradient-to-br from-yellow-300 via-orange-500 to-red-600 py-10 min-h-screen">
                    <SearchBox onSearch={handleSearch} />
                    <div className="container mx-auto p-4">
                        {foodDetails ? (
                            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
                                <div className="flex items-center mb-6">
                                    <img
                                        src={foodDetails.strMealThumb}
                                        alt={foodDetails.strMeal}
                                        className="w-32 h-32 object-cover rounded-full mr-6"
                                    />
                                    <div>
                                        <h2 className="text-3xl font-bold text-gray-800">{foodDetails.strMeal}</h2>
                                        <p className="text-sm text-gray-600">Area: {foodDetails.strArea}</p>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <p className="text-center text-white">No food details available. Please search for a food item.</p>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};


export default Search;
