import { ONE_STAR_RATING_WIDTH } from '../const';
const getRating = ( rating:number) =>(`${Math.round(rating) * ONE_STAR_RATING_WIDTH}%`);

export { getRating };
