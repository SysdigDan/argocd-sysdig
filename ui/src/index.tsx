import * as React from 'react';

const baseURL = 'http://192.168.101.101/app.au1.sysdig.com:443/api/scanning/runtime/v2/workflows/results?filter=kubernetes.namespace.name="sock-shop"';
const sysdigAuthToken = process.env.SYSDIG_AUTH_TOKEN
console.log(sysdigAuthToken);

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