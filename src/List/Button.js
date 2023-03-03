const ButtonRow = ({item, handleClick}) => {
    return (
        <div className='btn_wrapper'>
            <button disabled={
                    item.length > 1 && item[1] === 'left' ? false : true
                }
                onClick={
                    () => handleClick()
            }>
                Move Right</button>
            <button disabled={
                    item.length > 1 && item[1] === 'right' ? false : true
                }
                onClick={
                    () => handleClick()
            }>Move Left</button>
        </div>
    )
}

export default ButtonRow;
