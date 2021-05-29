import React, {useState} from 'react';
import CurrentView from './CurrentViewContext';

/**
 * Context Hook holding farmer instance during farmer form process
 * @param props
 */
const CurrentViewProvider = ({children}: {children: any}) => {
  const [currentView, setCurrentView] = useState();
  const options = {currentView, setCurrentView};

  return (
    <CurrentView.Provider value={options}>{children}</CurrentView.Provider>
  );
};

export default CurrentViewProvider;
