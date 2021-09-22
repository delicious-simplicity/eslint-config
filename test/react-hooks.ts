import * as React from 'react';

interface Request {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any | undefined;
  loading: boolean;
}

export const useRequest = (url: string): Request => {
  const [state, setState] = React.useState({ data: undefined, loading: false });

  React.useEffect(() => {
    fetch(url).then((res) => {
      setState((prev) => ({ ...prev, data: res.json(), loading: false }));
    });
    setState((prev) => ({ ...prev, loading: false }));

    return setState((prev) => ({ ...prev, loading: true }));
    // react-hooks/exhaustive-deps - can't be anything other than 'url' prop
  }, [url]);

  return state;
};

// react-hooks/rules-of-hooks - can't call the hook below
// useRequest();
