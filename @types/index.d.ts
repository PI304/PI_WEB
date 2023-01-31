import { ReactElement } from 'react';
import { Colors } from '../styles';

/**
 * Types that need some dependancies
 */

type ExampleType = {
  something: ReactElement;
};

type TitleLabelProps = {
  color: ValueOf<typeof Colors>;
  title: string;
};

type ColorType = {
  color: ValueOf<typeof Colors>;
};
