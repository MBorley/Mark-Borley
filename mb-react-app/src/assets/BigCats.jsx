import { useState } from 'react';
import SingleCat from './SingleCat';
import AddCat from './AddCat';

const BigCats = () => {
    const Cats = [
        { id: 'Cheetah', name: 'Cheetah', latinName: 'Acinonyx jubatus', image: 'url-to-cheetah-image' },
        { id: 'Cougar', name: 'Cougar', latinName: 'Puma concolor', image: 'url-to-cougar-image' },
        { id: 'Jaguar', name: 'Jaguar', latinName: 'Panthera onca', image: 'url-to-jaguar-image' },
        { id: 'Leopard', name: 'Leopard', latinName: 'Panthera pardus', image: 'url-to-leopard-image' },
        { id: 'Lion', name: 'Lion', latinName: 'Panthera leo', image: 'url-to-lion-image' },
        { id: 'Snow leopard', name: 'Snow leopard', latinName: 'Panthera uncia', image: 'url-to-snow-leopard-image' },
        { id: 'Tiger', name: 'Tiger', latinName: 'Panthera tigris', image: 'url-to-tiger-image' }
    ];

    const [cats, setCats] = useState(Cats);

    const sortCats = () => {
        setCats([...cats].sort((a, b) => a.name.localeCompare(b.name)));
    };

    const reverseCats = () => {
        setCats([...cats].reverse());

    };

    const filterCats = () => {
        setCats([...cats].filter(cat => cat.latinName.startsWith('Panthera')));

    };

    const resetCats = () => {
        setCats(Cats);
    };

    const addCat = cat => {
        setCats([cat, ...cats]);
    };

    const deleteCat = id => {
        setCats(cats.filter(cat => cat.id !== id));
    };
    

    return (
        <div>
            <AddCat addCat={addCat} />
            {cats.map((cat, index) => (
                <SingleCat cat={cat} key={index} deleteCat={deleteCat} /> 
                ))}
            <button onClick={sortCats}>Sort Alphabetically</button>
            <button onClick={reverseCats}>Reverse List</button>
            <button onClick={filterCats}>Show Panthera Family</button>
            <button onClick={resetCats}>Reset List</button>
        </div>
        
    );
    
};


export default BigCats;