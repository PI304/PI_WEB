import { ReactElement } from 'react';
import { Colors } from '../styles';

/**
 * Types that need some dependancies
 */

type ExampleType = {
  something: ReactElement;
};

type TitleLabelProps = {
  color: (typeof Colors)[keyof typeof Colors];
  title: string;
};

type ColorType = {
  color: (typeof Colors)[keyof typeof Colors];
};
