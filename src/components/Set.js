import React from 'react';
import { connect } from 'react-redux';

import { pixelsFromDiff } from '../layoutUtils';
import { setIsFavourite } from '../reducers/index';

import './Set.css';

const Set = ({ set, startTime, endTime, favouriteSet, isFavourite }) => (
  <div
    onClick={ () => favouriteSet(set) }
    className={ 'set' + (isFavourite(set) ? ' favourite' : '') }
    style={{
      top: pixelsFromDiff(set.startTime, startTime) + 'px',
      height: pixelsFromDiff(set.startTime, set.endTime)
    }}
  >
    <div className="actName">
      { set.actName }
    </div>
    <div className="actTimes">
      {
        set.startTime.format('HH:mm') + ' – ' + set.endTime.format('HH:mm')
      }
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  favouriteSet: (set) => dispatch({ type: 'TOGGLE_FAVOURITE_SET', set }),
});

const mapStateToProps = (state) => ({
  isFavourite: setIsFavourite(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Set);