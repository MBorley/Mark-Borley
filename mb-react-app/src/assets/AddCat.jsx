import { useState } from 'react';

const AddCat = ({ addCat }) => {
    const [name, setName] = useState('');
    const [latinName, setLatinName] = useState(''); 
    const [image, setImage] = useState(''); 

    const handleSubmit = (e) => {
        e.preventDefault();
        addCat({ name, latinName, image });
        setName('');
        setLatinName('');
        setImage('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={name} onChange={e => setName(e.target.value)} required />
                </label>
                <label>
                Latin Name:
                <input type="text" value={latinName} onChange={e => setLatinName(e.target.value)} required />
                </label>
                <label>
                Image: URL:
                <input type="text" value={image} onChange={e => setImage(e.target.value)} required />
                </label>
                <button type="submit">Add Cat</button>
        </form>
    );
};

export default AddCat;