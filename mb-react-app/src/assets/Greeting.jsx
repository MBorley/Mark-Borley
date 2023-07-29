function Greeting({ name = 'World', children }) {
    return (
        <div className="GreetingComponent componentBox">
            <h1>Hello, {name}!</h1>
            {children}
        </div>
    );
}

export default Greeting;
