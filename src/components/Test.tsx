import * as React from 'react';

export interface ArrayesTypes {

}

export interface IAppProps {
    name?: string,
    age?: number
}

export default function Test ({name,age} : IAppProps) {
  return (
    <div>
      {name} {age}
    </div>
  );
}
