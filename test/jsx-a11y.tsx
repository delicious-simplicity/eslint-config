import * as React from 'react';

const AccessibilityTest: React.FC = () => {
  const src = 'something.png';

  return (
    <div>
      {/* jsx-a11y/alt-text, jsx-a11y/img-redundant-alt */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img alt='' src={src} />

      {/* jsx-a11y/anchor-is-valid, jsx-a11y/anchor-has-content */}
      <a href='www.google.com'>text</a>

      {/* jsx-a11y/label-has-associated-control */}
      <label htmlFor='input'>Label</label>
      {/* jsx-a11y/control-has-associated-label */}
      <input aria-label='Label' id='input' type='text' />

      {/* jsx-a11y/no-redundant-roles - role can't be 'button' */}
      <button role='tab' type='button'>
        Click Me
      </button>
    </div>
  );
};

export default AccessibilityTest;
