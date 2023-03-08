import * as React from 'react';

const MAP_VULN = {
  Critical: {
    name: "fa-heart",
    spin: false,
    color: "rgb(24, 190, 148)"
  },
  High: {
    name: "fa-heart-broken",
    spin: false,
    color: "rgb(233, 109, 118)",
  },
  Medium: {
    name: "fa-pause-circle",
    spin: false,
    color: "rgb(118, 111, 148)",
  },
  Low: {
    name: "fa-ghost",
    spin: false,
    color: "rgb(244, 192, 48)"
  },
  Negligible: {
    name: "fa-question-circle",
    spin: false,
    color: "rgb(204, 214, 221)",
  },
};

const baseURL = 'https://app.au1.sysdig.com/api/scanning/runtime/v2/workflows/results?filter=kubernetes.namespace.name="sock-shop"';
const sysdigAuthToken = process.env.SYSDIG_AUTH_TOKEN
console.log("DEBUG 1:", sysdigAuthToken);

export const Extension = (props: {
  tree: any;
  resource: any
}) => {
  console.log("DEBUG 2:", props);

  const makeAPICall = async () => {
    try {
      const response = await fetch(baseURL, {
        headers: {
          'Authorization': 'Bearer ' + sysdigAuthToken
        },
      });
      const data = await response.json();
      console.log("DEBUG 3:",{ data })
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
  console.log("DEBUG 4:",data);

  var images = [];
  for (let i = 0; i < data.length; i++) images.push(data[i].recordDetails.mainAssetName);
  console.log("DEBUG 5:", images);

  return (
    <>
      <div>Sysdig Vulnerability Report - Application {props.resource.metadata.name}</div>
      <div
        style={{
          background: "#fff",
          width: "100%",
          boxShadow: "1px 1px 1px #ccd6dd",
          borderRadius: "4px",
          border: "1px solid transparent",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          {Object.keys(MAP_VULN).map((key) => (
            <div
              style={{
                margin: "1rem",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <i
                qe-id="utils-health-status-title"
                title={key}
                className={`fa ${MAP_VULN[key].name}`}
                style={{
                  color: MAP_VULN[key].color,
                  marginBottom: "0.50rem",
                }}
              ></i>
              {/* {key}: {items.filter((item) => item.health.status == key).length} */}
            </div>
          ))}
        </div>
      </div>
      <div>
        <table>
          <tr>
            <th>Name</th>
            <th>Exploits</th>
            <th>Status</th>
          </tr>
          {data.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.recordDetails.mainAssetName}</td>
                <td>{val.exploitCount}</td>
                <td>{val.policyEvaluationsResult}</td>
              </tr>
            )
          })}
        </table>
      </div>

    </>

  );
};

export const component = Extension;