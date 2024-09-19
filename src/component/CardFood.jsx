const CardFood = (props) => {
    const { data } = props;

    return (
        <a
            className="block w-72 bg-orange-950 rounded-lg overflow-hidden shadow-lg hover:shadow-xl hover:shadow-red-500 transition-shadow duration-300 transform hover:scale-105"
        >
            <div className="w-full h-40">
                <img
                    src={data.strMealThumb}
                    alt="food image"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="p-4 bg-amber-400">
                <p className="text-lg font-semibold text-orange-950 mb-2 truncate">
                    {data.strMeal}
                </p>
            </div>
        </a>
    );
};

export default CardFood;
