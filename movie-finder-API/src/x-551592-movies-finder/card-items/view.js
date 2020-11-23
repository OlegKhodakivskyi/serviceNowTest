import '@servicenow/now-loader';
import { Fragment } from '@servicenow/ui-renderer-snabbdom';
import { OPENED_MORE_INFO } from '../constants';
import posterNotFoundImg from '../images/404.jpg';

export default state => {
  const {
    modalIsOpen,
    properties: { movies, modalModule },
  } = state;

  return (
    <Fragment>
      <div className="card__wrapper">
        {movies.length ? (
          movies.map(item => {
            const { title, id, poster_path, vote_average } = item;
            return (
              <div className="card">
                <now-card key={id} className="card__item">
                  <now-card-header
                    heading={{
                      label: title,
                      size: 'sm',
                      lines: 2,
                      variant: 'primary',
                    }}
                  />
                  <div className="card__img">
                    <img
                      src={
                        poster_path
                          ? `https://image.tmdb.org/t/p/w500${poster_path}`
                          : posterNotFoundImg
                      }
                      alt="Poster not found"
                    />
                  </div>
                  <now-card-actions
                    items={[
                      {
                        label: 'More info',
                        variant: 'secondary-positive',
                        clickActionType: OPENED_MORE_INFO,
                        movie: item,
                      },
                    ]}
                  />
                  <now-card-footer>
                    <span className="card__rating">
                      Rating &#9733; {vote_average}
                    </span>
                  </now-card-footer>
                </now-card>
              </div>
            );
          })
        ) : (
          <now-loader label="Loading..." size="md"></now-loader>
        )}
        {modalIsOpen ? (
          <modal-module
            isOpen={modalIsOpen}
            title={modalModule.title}
            overview={modalModule.overview}
            date={modalModule.date}
            path={modalModule.path}
            vote={modalModule.vote}
          />
        ) : null}
      </div>
    </Fragment>
  );
};
