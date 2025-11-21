const Card=(props)=>{    
    return (
        <div className="border rounded-xl m-2">
            <img src={props.image} height={250} width={350} className="rounded-xl"></img>
            <div className="flex justify-between p-2">
                <h2 >{props.title}</h2>
                <p className="text-yellow-500">{props.description}</p>
            </div>
        </div>
    )
}

export default Card;