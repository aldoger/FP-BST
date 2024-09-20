import axios from 'axios';
// ini untuk memanggil makanan dengan huruf depan a
export const getFoodsA = (callback) => {
    axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=a').then((res) => {
        const meals = res.data.meals; 
        callback(meals); 
    }).catch((err) => {
        console.error("Error fetching food data:", err); 
        callback([]); 
    });
};
// ini untuk memanggil makanan dengan huruf depan b
export const getFoodsB = (callback) => {
    axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=b').then((res) => {
        const meals = res.data.meals; 
        callback(meals); 
    }).catch((err) => {
        console.error("Error fetching food data:", err); 
        callback([]); 
    });
};
// ini untuk memamnggil makanan sesuai dengan foodname dari search.jsx
export const searchFood = (foodname, callback) => {
    axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodname}`)
        .then((res) => {
            const foodDetails = res.data.meals; 
            callback(foodDetails || []); 
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
            callback([]); 
        });
};




