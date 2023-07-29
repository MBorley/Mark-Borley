const SingleCat = ({ cat, deleteCat }) => {
    return (
        <div>
            <h2>{cat.name}</h2>
            <p>{cat.latinName}</p>
            <img src={cat.image} alt={cat.name} />
            <a href="#" onClick={() => deleteCat(cat.id)}>Remove Cat</a>
        </div>
    );
};

export default SingleCat;
