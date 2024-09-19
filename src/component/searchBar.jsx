const InputText = () => {
    return (
        <input 
            type="text" 
            placeholder="Find the food"
            className="focus:outline-none focus:ring focus:border-blue-500 mb-2 p-2 border rounded"
        />
    );
};

const SearchButton = () => {
    return (
        <input 
            type="button" 
            value="Search"
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded 
            hover:bg-blue-700 active:bg-black active:text-white"
        />
    );
};

const SearchBox = () => {
    return (
        <div className="flex flex-col items-start ml-8">
            <h1 className="text-xl font-semibold mb-4">Ayo cari makanan!!</h1>
            <InputText />
            <SearchButton />
        </div>
    );
};

export default SearchBox;
