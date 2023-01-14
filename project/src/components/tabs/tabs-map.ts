import {FC} from 'react';
import { Details } from './details.tab';
import { Reviews } from './reviews.tab';
import { Overview } from './overview.tab';
import { Movie } from '../../types/main-page.types';
import { Review } from '../../types/review.types';

export enum Tab {
  OVERVIEW = 'overview',
  REVIEWS = 'reviews',
  DETAILS = 'details'
}

export const tabNames: Record<Tab, string> = {
  [Tab.DETAILS]: 'Details',
  [Tab.REVIEWS]: 'Reviews',
  [Tab.OVERVIEW]: 'Overview'
};

export type TabContentProps = {
  movie: Movie;
  reviews: Review[];
}

export const tabComponentMap: Record<Tab, FC<TabContentProps>> = {
  [Tab.DETAILS]: Details,
  [Tab.REVIEWS]: Reviews,
  [Tab.OVERVIEW]: Overview
};

export const TABS_ARRAY = [Tab.OVERVIEW, Tab.DETAILS, Tab.REVIEWS];
