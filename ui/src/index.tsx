import * as React from 'react';

const baseURL = 'https://cors-anywhere.herokuapp.com/https://app.au1.sysdig.com/api/scanning/runtime/v2/workflows/results?filter=kubernetes.namespace.name="sock-shop"';

export const Extension = (props: {
  tree: any;
  resource: any
}) => {
  console.log(props);

  const makeAPICall = async () => {
    try {
      const response = await fetch(baseURL, {
        headers: {
          'Authorization': 'Bearer f9bc946b-a894-406f-a563-98474047b5c7'
        },
      });
      const data = await response.json();
      console.log({ data })
    }
    catch (e) {
      console.log(e)
    }
  }
  React.useEffect(() => {
    makeAPICall();
  }, [])

  return (
    <div>Hello {props.resource.metadata.name}!</div>
  );
};

export const component = Extension;