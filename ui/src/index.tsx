import * as React from 'react';

const baseURL = 'https://app.au1.sysdig.com/api/scanning/runtime/v2/workflows/results?cursor&filter=kubernetes.namespace.name="sock-shop"&limit=100&order=desc&sort=runningVulnsBySev';

export const Extension = (props: {
  tree: any;
  resource: any
}) => {
  console.log(props);

  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(baseURL, {
            headers: {
              'Authorization': 'Bearer f9bc946b-a894-406f-a563-98474047b5c7'
            },
        });
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        let actualData = await response.json();
        setData(actualData);
        console.log(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        console.log(error);
        setData(null);
      } finally {
        setLoading(false);
        console.log(loading);
      }
    }
    getData()
  }, [])

  return (
    <div>Hello {props.resource.metadata.name}!</div>
  );
};

export const component = Extension;