const List = ({list, setItem, item, listSide}) => {
    return (
        <div className={
            `list ${listSide}`
        }>
            <h2>{listSide}
                List
            </h2>
            <ul> {
                list.map((ele, index) => <li key={index}
                    onClick={
                        () => {
                            setItem([ele, listSide])
                        }
                    }
                    className={
                        `${
                            ele === item[0] && 'selected'
                        }`
                }>
                    {ele}</li>)
            } </ul>
        </div>
    )
}
export default List;
