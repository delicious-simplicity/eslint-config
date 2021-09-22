import * as React from 'react';

import _map from 'lodash/map';

import SimpleComponent from './SimpleComponent';

const list: string[] = ['apple', 'pear', 'orange', 'banana', 'lyche'];

interface IComponentProps {
  stringProp: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  apple: any;
  pear: string;
  toggled: boolean;
  zebra: string;
}

// @typescript-eslint/explicit-function-return-type - needs React.FC type &| equivalent type
const Component: React.FC<IComponentProps> = (props) => (
  <div>
    {props.stringProp}
    {_map(list, (item) => (
      <p key={item}>{item}</p>
    ))}

    {/* react/jsx-no-target-blank - can't have target='_blank' without rel='noopener noreferrer' */}
    <a href='https://www.google.com' rel='noopener noreferrer' target='_blank'>
      link Johny's bonanza
    </a>

    <SimpleComponent {...props} />
  </div>
);

// react/jsx-sort-props - props are sorted
// react/jsx-boolean-value - toggled has to be toggled={true}
// react/self-closing-comp - children can not be empty with closing tag </Component>
export const AnotherComponent: React.FC = () => (
  <Component
    apple={{ derp: 'whatever', moreDerp: 'whatevs' }}
    pear='pear'
    stringProp='Click Me'
    toggled={true}
    zebra='zebra'
  />
);

export default Component;
