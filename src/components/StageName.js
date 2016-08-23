import React from 'react';
import './StageName.css';

import { stageNameHeight } from '../layoutUtils';

export default ({ name }) => <div className="stageName" style={{ stageNameHeight }}>{ name }</div>;