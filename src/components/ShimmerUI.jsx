const arr = new Array(20);
arr.fill(0);
const ShimmerCards = () => {
    return (
        arr.map((_, index) => 
            (
                <div key={index+1} className="rounded-xl m-2 h-50 shadow-lg">
                    
                </div>
            )
        )
    )
}
const ShimmerUI = () => {
    return (
        <div className="cards-section grid grid-cols-3 gap-8">
            <ShimmerCards />
        </div>
    )
}

export default ShimmerUI;