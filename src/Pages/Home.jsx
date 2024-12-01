import  { useState, useEffect } from "react";
import Navbar from "../component/navbar";
import { getFoodsA, getFoodsB } from "../Services/food";
import CardFood from "../component/CardFood";
import Footer from "../component/Footer";

const Home = () => {
  const [foodsA, setFoodsA] = useState([]);
  const [foodsB, setFoodsB] = useState([]);

  useEffect(() => {
    getFoodsA((data) => {
      setFoodsA(data);
    });
  }, []);

  useEffect(() => {
    getFoodsB((data) => {
      setFoodsB(data);
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-br from-yellow-300 via-orange-500 to-red-600 py-10 min-h-screen">
        <div className="container mx-auto px-6">
          <h1 className="text-center text-4xl font-bold text-white mb-10">
            Delicious Meals for You
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {foodsA.map((foodA) => (
                <CardFood key={foodA.idMeal} data={foodA} />
            ))}
            {foodsB.slice(0, 8).map((foodB) => (
              <CardFood key={foodB.idMeal} data={foodB} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
