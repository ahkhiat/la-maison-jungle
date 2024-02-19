function Cart() {
    const monsteraPrice = 8;
    const lierrePrice = 10;
    const flowersBouquet = 15;
    const totalCart = monsteraPrice + lierrePrice + flowersBouquet;
    return (
        <div>
            <ul>
                <li>Monstera   { monsteraPrice }</li>
                <li>Lierre  { lierrePrice }</li>
                <li>Bouquet de fleurs  { flowersBouquet }</li>   
            </ul>
            <p>Total du panier { totalCart }</p>
        </div>
            
    )
}

export default Cart