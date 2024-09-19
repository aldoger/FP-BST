import axios from 'axios';

export const getFoodsA = (callback) => {
    axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=a').then((res) => {
        const meals = res.data.meals; 
        callback(meals); 
    }).catch((err) => {
        console.error("Error fetching food data:", err); 
        callback([]); 
    });
};

export const getFoodsB = (callback) => {
    axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=b').then((res) => {
        const meals = res.data.meals; 
        callback(meals); 
    }).catch((err) => {
        console.error("Error fetching food data:", err); 
        callback([]); 
    });
};


