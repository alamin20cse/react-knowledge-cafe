import Bookmark from "../Bookmark/Bookmark";


const Bookmarks = ({bookmark}) => {
    return (
        <div className="md:w-1/3">
            <h1>Bookmarks Blogs={bookmark.length}</h1>

            {
                bookmark.map(bookm=><Bookmark key={bookmark.id} bookm={bookm} > </Bookmark>)
            }
            
        </div>
    );
};

export default Bookmarks;