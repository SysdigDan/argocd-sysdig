import * as React from 'react';

const baseURL = 'https://app.au1.sysdig.com/api/scanning/runtime/v2/workflows/results?filter=kubernetes.namespace.name="sock-shop"';
const sysdigAuthToken = process.env.SYSDIG_AUTH_TOKEN
console.log(sysdigAuthToken);

export const Extension = (props: {
  tree: any;
  resource: any
}) => {
  console.log("DEBUG 1:", props);

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
  console.log("DEBUG 2:",data);

  var images = [];
  for (let i = 0; i < data.length; i++) images.push(data[i].recordDetails.mainAssetName);
  console.log("DEBUG 3:", images);

  return (
    <>
      <div>Hello {props.resource.metadata.name}!</div>
      <table>
        <tr>
          <th>Name</th>
          <th>Exploits</th>
          <th>Status</th>
        </tr>
        {data.map((val: { recordDetail: { mainAssetName: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal; }; exploitCount: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal; policyEvaluationsResult: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal; }, key: React.Key) => {
          return (
            <tr key={key}>
              <td>{val.recordDetail.mainAssetName}</td>
              <td>{val.exploitCount}</td>
              <td>{val.policyEvaluationsResult}</td>
            </tr>
          )
        })}
      </table>
    </>

  );
};

export const component = Extension;