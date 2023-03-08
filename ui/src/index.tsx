import * as React from 'react';

const baseURL = 'https://192.168.101.101:8080/https://app.au1.sysdig.com/api/scanning/runtime/v2/workflows/results?filter=kubernetes.namespace.name="sock-shop"';
const sysdigAuthToken = process.env.SYSDIG_AUTH_TOKEN

export const Extension = (props: {
  tree: any;
  resource: any
}) => {
  console.log(props);

  const makeAPICall = async () => {
    try {
      const response = await fetch(baseURL, {
        headers: {
          'Authorization': 'Bearer ' + sysdigAuthToken
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