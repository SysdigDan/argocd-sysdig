import * as React from 'react';

export const Extension = (props: {
  tree: any;
  resource: any }) => {

  console.log(props);

  return (
    <div>Hello {props.resource.metadata.name}!</div>
  );
};

export const component = Extension;