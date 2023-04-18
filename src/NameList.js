import React from 'react';

function NameList({ names }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Chance</th>
        </tr>
      </thead>
      <tbody>
        {names.map((name) => (
          <tr key={name.name}>
            <td>{name.name}</td>
            <td>{name.chance}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default NameList;
