import React, { useState } from 'react';
import { Tab, tabComponentMap, tabNames, TABS_ARRAY } from './tabs-map';
import { Movie } from '../../types/main-page.types';

type Props = {
  movie: Movie;
}

export const Tabs = (props: Props) => {
  const { movie } = props;
  const [currentTab, setCurrentTab] = useState<Tab>(Tab.OVERVIEW);

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className='film-nav__list'>
          {
            TABS_ARRAY.map((tab) => (
              <li
                key={tab}
                className={`film-nav__item ${currentTab === tab ? 'film-nav__item--active' : ''}`}
              >
                <p className="film-nav__link" onClick={() => setCurrentTab(tab)}>
                  {tabNames[tab]}
                </p>
              </li>
            ))
          }
        </ul>
      </nav>

      {React.createElement(tabComponentMap[currentTab], { movie })}

    </div>
  );
};
