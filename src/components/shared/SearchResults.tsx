import { Models } from "appwrite";
import Loader from "./Loader";
import GridPostList from "./GridPostList";

type SearchResultProps = {
  isSearchFetching: boolean;
  searchedPosts: Models.DocumentList<Models.Document>;
};

const SearchResults = ({
  isSearchFetching,
  searchedPosts,
}: SearchResultProps) => {
  if (isSearchFetching) return <Loader />;

  if (searchedPosts && searchedPosts.documents.length > 0) {
    return <GridPostList posts={searchedPosts.documents} />;
  }

  return (
    <div className="text-light-4 text-center mt-10 w-full">NO Results</div>
  );
};

export default SearchResults;
