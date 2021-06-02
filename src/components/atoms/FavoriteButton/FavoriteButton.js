import React from 'react';
import { Button} from './FavoriteButton.styles';
import { ReactComponent as FavoriteIcon } from 'assets/icons/favorite.svg';
import { ReactComponent as UnFavoriteIcon } from 'assets/icons/unFavorite.svg';

const FavoriteButton = (props) => {
  return (
    <Button {...props}>
      {props.isFavorite ? <FavoriteIcon /> : <UnFavoriteIcon />}
    </Button>
  );
};

export default FavoriteButton;
