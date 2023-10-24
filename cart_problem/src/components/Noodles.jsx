const Noodles = ({ onhandleinc, onhandledec, quantity, price }) => {
    return (
        <div className="components">
            <h3>Noodles</h3>
            <h3>{price}</h3>
            <span><button onClick={onhandledec}>-</button>{quantity}<button onClick={onhandleinc} >+</button></span>
        </div>
    )
}

export default Noodles;