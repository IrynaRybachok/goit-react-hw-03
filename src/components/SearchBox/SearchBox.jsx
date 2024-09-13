const SearchBox = ({value, onFilter}) => {
    return (
        <>
            <p>Find contacts by name</p>
            <input type="text" value={value} onChange={(e) => {onFilter(e.target.value)}} />
        </>
    )
}

export default SearchBox;