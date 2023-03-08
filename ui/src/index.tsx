import * as React from 'react';

const baseURL = 'https://app.au1.sysdig.com/api/scanning/runtime/v2/workflows/results?filter=kubernetes.namespace.name="sock-shop"';
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

  var r = require('./test_data.json');
  var data = r.data;
  console.log(data);

  var images = [];
  for (let i = 0; i < data.images.length; i++) images.push(data.images[i].recordDetails.mainAssetName);
  console.log(images);
  
  return (
    <>
      <div>Hello {props.resource.metadata.name}!</div>
      <table>
        <thead>
          <tr>
            // header row
          </tr>
        </thead>
        <tbody>
            // body data
        </tbody>
      </table>
    </>

  );
};

export const component = Extension;