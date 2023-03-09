import * as React from 'react';

const MAP_VULN = {
  Critical: {
    name: "fa-shield",
    spin: false,
    color: "#AE44C5",
  },
  High: {
    name: "fa-shield",
    spin: false,
    color: "#EE635E",
  },
  Medium: {
    name: "fa-shield",
    spin: false,
    color: "#FA8C16",
  },
  Low: {
    name: "fa-shield",
    spin: false,
    color: "#F6CA09"
  },
  Negligible: {
    name: "fa-shield",
    spin: false,
    color: "#91A7B3",
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
      <div
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          textTransform: "uppercase",
          textAlign: "center",
          marginTop: "10px",
          marginBottom: "10px",
        }}
      >
        Sysdig Vulnerability Report - Application {props.resource.metadata.name}
      </div>

      <div
        style={{
          background: "#fff",
          width: "100%",
          boxShadow: "1px 1px 1px #ccd6dd",
          borderRadius: "4px",
          border: "1px solid transparent",
          marginTop: "10px",
          marginBottom: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
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
                className={`fa fa-xl ${MAP_VULN[key].name}`}
                style={{
                  color: MAP_VULN[key].color,
                  marginBottom: "1rem",
                  marginTop: "1rem",
                }}
              ></i>
              {key}:
              {/* {key}: {items.filter((item) => item.health.status == key).length} */}
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          background: "#fff",
          width: "100%",
          boxShadow: "1px 1px 1px #ccd6dd",
          borderRadius: "4px",
          border: "1px solid transparent",
          marginTop: "10px",
          marginBottom: "10px",
        }}
      >
        <table
          style={{
            width: "100%",
          }}
        >
          <tr>
            <th>Name</th>
            <th style={{textAlign: "center"}}>Criical</th>
            <th style={{ textAlign: "center" }}>High</th>
            <th style={{ textAlign: "center" }}>Medium</th>
            <th style={{ textAlign: "center" }}>Low</th>
            <th style={{ textAlign: "center" }}>Negligible</th>
            <th style={{ textAlign: "center" }}>Exploits</th>
            <th style={{ textAlign: "center" }}>Status</th>
          </tr>
          {data.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.recordDetails.mainAssetName}</td>
                <td>{val.runningVulnsBySev[0] + val.runningVulnsBySev[1] + val.runningVulnsBySev[2]}</td>
                <td>{val.runningVulnsBySev[3]}</td>
                <td>{val.runningVulnsBySev[4] + val.runningVulnsBySev[5]}</td>
                <td>{val.runningVulnsBySev[6]}</td>
                <td>{val.runningVulnsBySev[7]}</td>
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