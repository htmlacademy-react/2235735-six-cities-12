import { NameSpace } from '../../const';
import { Offer, } from '../../types/offers';
import { State } from '../../types/state';

export const getSortType = (state: State): string => state[NameSpace.App].type;
export const getSelectedPoint = (state: State): Offer|null => state[NameSpace.App].selectedPoint;

