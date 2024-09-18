const InputText = () => {
    return (
        <input 
            type="text" 
            placeholder="Find the food"
            className="focus:outline-none focus:ring focus:border-blue-500" 
        />
    );
};

const SearchButton = () => {
    return (
        <input 
            type="button" 
            value="Cyan to blue" 
            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
        />
    );
};

const SearchBox = () => {
    return (
        <div>
            <p>Food</p>
            <InputText />
            <SearchButton />
        </div>
    );
};

export default SearchBox;
