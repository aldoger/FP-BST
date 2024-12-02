import { useState } from "react";
import Footer from "../component/Footer.jsx";
import Navbar from "../component/navbar.jsx";
import SearchBox from "../component/searchBar.jsx";
import { searchFood } from "../Services/food.js";

const SearchPage = () => {
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
                                    <div className="mr-6">
                                        <h2 className="text-3xl font-bold text-gray-800">{foodDetails.strMeal}</h2>
                                        <p className="text-sm text-gray-600">Area: {foodDetails.strArea}</p>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 p-4  bg-gray-50 rounded-lg shadow-md">
                                        {[...Array(20)].map((_, i) => {
                                          const ingredient = foodDetails[`strIngredient${i + 1}`];
                                        
                                          return ingredient ? (
                                            <p
                                              key={i}
                                              className="p-2 text-gray-800 bg-white rounded-lg shadow-sm border border-gray-200 hover:bg-blue-50 transition-colors"
                                            >
                                              <span className="font-semibold text-blue-600">{i + 1}.</span> {ingredient}
                                            </p>
                                          ) : null;
                                        })}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <p className="text-center text-white">No food details available. Please search for a food item.</p>
                        )}
                    </div>
                    <div className="mx-auto max-w-4xl p-6 bg-white rounded-lg shadow-lg">
                        <p className="text-lg leading-relaxed text-gray-800 text-justify">
                          {foodDetails?.strInstructions ? foodDetails.strInstructions : "No Instruction"}
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};


export default SearchPage;
