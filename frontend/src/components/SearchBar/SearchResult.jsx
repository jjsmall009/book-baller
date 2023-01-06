// Component for a search result

const SearchResult = ({ props, onPress }) => {
    return (
        <div className="search-result-item" onClick={() => onPress(props)}>
            <img
                src={`https://covers.openlibrary.org/b/id/${props.cover_i}-M.jpg`}
                alt="cover image"
            />

            <div>
                <p className="item-title">
                    {props.title ? props.title : "Title n/a"}
                </p>
                <p className="item-author">
                    by {props.author_name ? props.author_name[0] : "Author n/a"}
                    (
                    {props.first_publish_year
                        ? props.first_publish_year
                        : "Year n/a"}
                    )
                </p>
            </div>
        </div>
    );
};

export default SearchResult;
