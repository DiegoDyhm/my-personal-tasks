function Item() {

    return(
        <div className="grid grid-cols-4 gap-2">
            <input type="checkbox" className="col-span-1" name="" id="" />
            <p className="col-span-2">Test</p>
            <button className="col-span-1">Delete</button>
        </div>
    )
}

export default Item