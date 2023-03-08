import * as React from 'react';
// import axios from "axios";

// const baseURL = `https://randomuser.me/api`;
const baseURL = 'https://app.au1.sysdig.com/api/scanning/runtime/v2/workflows/results?cursor&filter=kubernetes.namespace.name="sock-shop"&limit=100&order=desc&sort=runningVulnsBySev';

// let reqInstance = axios.create({
//   method: 'get',
//   withCredentials: false,
//   headers: {
//     // Authorization: `Bearer ${localStorage.getItem("access_token")}`
//     Authorization: 'Bearer f9bc946b-a894-406f-a563-98474047b5c7'
//   }
// })

export const Extension = (props: {
  tree: any;
  resource: any
}) => {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    const data = fetch(baseURL, {
      method: 'GET',
      mode: 'no-cors',
      redirect: 'follow',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer f9bc946b-a894-406f-a563-98474047b5c7'
      },
    });
    setPost(data);
  }, []);

  // React.useEffect(() => {
  //   reqInstance(baseURL).then((response: { data: any; }) => {
  //     setPost(response.data);
  //   });
  // }, []);

  if (!post) return null;

  console.log(props);
  console.log(post);

  return (
    <div>Hello {props.resource.metadata.name}!</div>
  );
};

export const component = Extension;