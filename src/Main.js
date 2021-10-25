import Item from "./ItemListContainer"
import ItemCount from "./ItemCountContainer"

const Main = () => {
    return(
    <>
            <Item 
                producto ={"mates"} 
                cantidad= {50}
            />
            <ItemCount
                inicial = {1}
                stock = {100}
            />
    </>
    )
}

export default Main