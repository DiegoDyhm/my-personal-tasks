import Item from "./item";

function ListItems() {

    return(
        <div className="grid grid-cols-1 gap-3 m-7">
            <Item/>
            <Item/>
            <Item/>
        </div>
    )
}

export default ListItems