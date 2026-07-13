import { useMemo } from 'react';
import { CozyAlert } from '../core/Alert';

/**
 * A lightweight hook to access CozyAlert within React components.
 * This is primarily for convenience, as CozyAlert can be used directly
 * without the hook as well.
 */
export const useCozyAlert = () => {
  return useMemo(() => CozyAlert, []);
};
