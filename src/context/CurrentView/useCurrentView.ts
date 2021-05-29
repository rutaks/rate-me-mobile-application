import {useContext} from 'react';

import CurrentView from './CurrentViewContext';

/**
 * Context Hook holding farmer instance during farmer form process
 */
const useCurrentView = () => {
  const context = useContext(CurrentView);
  if (context === undefined) {
    throw new Error('useCurrentView must be used within an CurrentViewContext');
  }

  return context;
};

export default useCurrentView;
