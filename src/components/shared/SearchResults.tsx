import { Models } from "appwrite";

type SearchResultProps = {
  isSearchFetching: boolean;
  searchedPosts: Models.Document[];
};

const SearchResults = ({
  isSearchFetching,
  searchedPosts,
}: SearchResultProps) => {
  return <div>SearchResults</div>;
};

export default SearchResults;
