// Component for a search result

const SearchResult = (props) => {
    const bookSelected = () => {
        console.log("test");
    };

    return (
        <div className="search-result-item" onClick={bookSelected}>
            <img src={`https://covers.openlibrary.org/b/id/${props.cover_i}-M.jpg`} alt="cover image" />

            <div>
                <p className="item-title">{props.title}</p>
                <p className="item-author">
                    by {props.author_name[0]} ({props.publish_date[0]})
                </p>
            </div>
        </div>
    );
};

export default SearchResult;
