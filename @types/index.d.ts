import { ReactElement } from 'react';
import { Colors } from '../styles';

/**
 * Types that need some dependancies
 */

type ExampleType = {
  something: ReactElement;
};

type ExploreProps = {
  color: (typeof Colors)[keyof typeof Colors];
};

type ColorType = {
  color: (typeof Colors)[keyof typeof Colors];
};
