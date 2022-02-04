import React from 'react';

export default function TokenVisualizer(props) {
  const {
    location: { search },
  } = props;

  const searchObj = new URLSearchParams(search);

  console.log(searchObj.get('thingOne'));

  return (
    <pre>
      <code>{JSON.stringify(props, null, 2)}</code>
    </pre>
  );
}