import * as React from 'react';
import { useState, useEffect } from "react";

type resultProps = {
  email: string;
  gender: string;
};

export const Extension = (props: {
  tree: any;
  resource: any }) => {

  console.log(props);

  const [result, setResult] = useState<resultProps[]>([]);

  useEffect(() => {
    const api = async () => {
      const data = await fetch("https://randomuser.me/api", {
        method: "GET"
      });
      const jsonData = await data.json();
      setResult(jsonData.results);
    };

    api();
  }, []);

  console.log(result);

  return (
    <div>Hello {props.resource.metadata.name}!</div>
  );
};

export const component = Extension;