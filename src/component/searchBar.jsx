import { useState } from "react";

const InputText = (props) => {
    const { p, m, onChange } = props;
    return (
        <input 
            type="text" 
            name="foodname"
            placeholder="Find the food"
            className={`${p} ${m} bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-red-500 rounded-none`}
            onChange={(e) => onChange(e.target.value)}
        />
    );
};



const SearchButton = ({ onClick }) => {
    return (
        <input 
            type="button" 
            value="Search"
            className="px-4 py-2 font-bold text-white bg-orange-900 rounded 
            hover:bg-red-700 active:bg-black active:text-white"
            onClick={onClick}
        />
    );
};

const SearchBox = ({ onSearch }) => {
    const [foodname, setFoodname] = useState("");

    const handleSearchClick = () => {
        onSearch(foodname); 
    };
    return (
        <form action="POST" className="flex flex-col justify-center items-center ml-8">
            <h1 className="text-4xl font-bold text-white mb-3 text-center">Ayo cari makanan!!</h1>
            <InputText p="p-2" m="m-2 mb-5" onChange={(value) => setFoodname(value)} />
            <SearchButton onClick={handleSearchClick}/>
        </form>
    );
};

export default SearchBox;
