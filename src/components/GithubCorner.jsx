import React from 'react';
import './GithubCorner.css';
import * as Theme from '../constants/theme';

const LeftSvg = () =>
  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 250 250" fill="#151513">
    <path className="octo-bg" d="M250 0L135 115h-15l-12 27L0 250V0z"/>
    <path className="octo-arm octo-dude" d="M122 109c15-9 9-19 9-19-3-7-2-11-2-11 1-7-3-2-3-2-4 5-2 11-2 11 3 10-5 15-9 16"/>
    <path className="octo-body octo-dude" d="M135 115s-4 2-5 0l-14-14c-3-2-6-3-8-3 8-11 15-24-2-41-5-5-10-7-16-7-1-2-3-7-12-11 0 0-5 3-7 16-4 2-8 5-12 9s-7 8-9 12c-14 4-17 9-17 9 4 8 9 11 11 11 0 6 2 11 7 16 16 16 30 10 41 2 0 3 1 7 5 11l12 11c1 2-1 6-1 6z"/>
  </svg>;

const RightSvg = () =>
  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 250 250" fill="#151513">
    <path className="octo-bg" d="M0 0l115 115h15l12 27 108 108V0z"/>
    <path className="octo-arm octo-dude" d="M128 109c-15-9-9-19-9-19 3-7 2-11 2-11-1-7 3-2 3-2 4 5 2 11 2 11-3 10 5 15 9 16"/>
    <path className="octo-body octo-dude" d="M115 115s4 2 5 0l14-14c3-2 6-3 8-3-8-11-15-24 2-41 5-5 10-7 16-7 1-2 3-7 12-11 0 0 5 3 7 16 4 2 8 5 12 9s7 8 9 12c14 3 17 7 17 7-4 8-9 11-11 11 0 6-2 11-7 16-16 16-30 10-41 2 0 3-1 7-5 11l-12 11c-1 1 1 5 1 5z"/>
  </svg>;

const GithubCorner = ({ theme }) => {
  const side = theme === Theme.Dark ? 'left' : 'right';

  return (
    <a
      href="https://github.com/justinryder/puppies-gg"
      className={[
        'github-corner',
        `github-corner--${side}`,
        `github-corner--${theme}`,
      ]
        .filter(Boolean)
        .join(' ')
      }
      title="View source on GitHub"
    >
      {side === 'left' && <LeftSvg/>}
      {side === 'right' && <RightSvg/>}
    </a>
  );
};

export default GithubCorner;
