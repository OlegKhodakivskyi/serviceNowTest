export default state => {
  const { movies, activePage, totalPages } = state;
  const dropdownItems = [
    { id: 'item1', label: 'Popularity', sortby: 'popularity.desc' },
    { id: 'item2', label: 'Release date', sortby: 'release_date.desc' },
    { id: 'item3', label: 'Vote average', sortby: 'vote_average.desc' },
    { id: 'item4', label: 'Revenue', sortby: 'revenue.desc' },
  ];
  return (
    <div className="container">
      <div className="header">
        <h1 className="header__title">Find your movie! </h1>
        <now-dropdown
          className="dropdown"
          placeholder="Sort by"
          items={dropdownItems}
        />
      </div>
      <div>
        <card-items className="card-items" movies={movies} />
      </div>
      <app-footer activePage={activePage} totalPages={totalPages} />
    </div>
  );
};
