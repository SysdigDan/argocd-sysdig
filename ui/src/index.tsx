import * as React from 'react';
// import Moment from "react-moment";

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

      <div style={{ display: "flex", flexDirection: "column", width: "40%" }}>
        {data.map((val, key) => (
          <div
            title={`Name: ${val.mainAssetName}`}
            style={{
              marginTop: "2rem",
              padding: "0.2rem",
              boxShadow: "1px 1px 1px #ccd6dd",
              borderRadius: "4px",
              border: "1px solid transparent",
              backgroundColor: "#fff",
              color: "#363c4a",
              display: "flex",
            }}
          >
            <div
              style={{
                width: "60px",
                flexGrow: 1,
                color: "#495763",
                textAlign: "center",
              }}
            >
              <i title="Workload" className="icon argo-icon-application"></i>
              <br />
              <div style={{ fontSize: ".7em", color: "#6d7f8b" }}>
                workload
              </div>
            </div>
            <div
              style={{
                flexGrow: 100,
                padding: "10px 20px 10px 10px",
                lineHeight: ".95",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  fontSize: ".8em",
                  paddingBottom: "5px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  textAlign: "left",
                }}
              >
                {val.mainAssetName}
              </div>
              {/* <div style={{ fontSize: ".8em" }}>
                <i
                  qe-id="utils-health-status-title"
                  title={key.health.status}
                  className={`fa ${MAP_VULN[key.health.status].name}${MAP_VULN[key.health.status].spin ? " fa-spin" : ""
                    }`}
                  style={{ color: MAP_VULN[key.health.status].color, marginRight: "0.3rem" }}
                ></i>
                <a href={`/applications/${key.name}`} title="Open application">
                  <i className="fa fa-external-link-alt"></i>
                </a>
              </div> */}
            </div>
            {/* <div style={{ flexGrow: 1, alignSelf: "flex-end" }}>
              {key.createdAt ? (
                <Moment
                  style={{
                    backgroundColor: "#ccd6dd",
                    color: "#495763",
                    border: "1px solid #8fa4b1",
                    borderRadius: "5px",
                    padding: "0 5px",
                    fontSize: ".6em",
                    textTransform: "lowercase",
                    marginRight: "1px",
                  }}
                  fromNow={true}
                  ago={true}
                >
                  {key.createdAt}
                </Moment>
              ) : null}
            </div> */}
          </div>
        ))}
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
            width: "inherit",
          }}
        >
          <tr
            style={{
              height: "35px",
            }}
          >
            <th>Name</th>
            <th style={{textAlign: "center"}}>Criical</th>
            <th style={{ textAlign: "center" }}>High</th>
            <th style={{ textAlign: "center" }}>Medium</th>
            <th style={{ textAlign: "center" }}>Low</th>
            <th style={{ textAlign: "center" }}>Negligible</th>
            <th style={{ textAlign: "center" }}>Exploits</th>
            <th style={{ textAlign: "center" }}>Status</th>
          </tr>
          <div>
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
          </div>

        </table>
      </div>
    </>

  );
};

export const component = Extension;