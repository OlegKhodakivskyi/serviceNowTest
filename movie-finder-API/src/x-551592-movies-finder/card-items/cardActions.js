import { OPENED_MORE_INFO } from '../constants';

export default {
  actionHandlers: {
    [OPENED_MORE_INFO]: ({
      updateState,
      updateProperties,
      action: { payload },
    }) => {
      const {
        movie: { title, overview, release_date, poster_path, vote_average },
      } = payload.action;

      updateProperties({
        modalModule: {
          title: title,
          overview: overview,
          date: release_date,
          path: poster_path,
          vote: vote_average,
        },
      });
      updateState({ modalIsOpen: true });
    },
    'NOW_MODAL#OPENED_SET': ({ updateState }) => {
      updateState({ modalIsOpen: false });
    },
  },
};
