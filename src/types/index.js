import PropTypes from 'prop-types';

export const RecipeShape = {
  key: PropTypes.string,
  favorite: PropTypes.bool,
  http: PropTypes.string,
  notes: PropTypes.object,
  photo: PropTypes.string,
  title: PropTypes.string,
};
