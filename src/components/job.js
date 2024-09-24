import React from "react";
import {FormattedDate, FormattedNumber} from 'react-intl';

const Job = (props) => {

  const salaryText = props.offer.salary >= 1 
    ? navigator.language.startsWith('es') 
      ? `${props.offer.salary} ${props.offer.salary === 1 ? 'millón' : 'millones'}`
      : `${props.offer.salary} million`
    : props.offer.salary;

  return (
    <tr>
      <th scope="row">{props.offer.id}</th>
      <td>{props.offer.name}</td>
      <td>{props.offer.company}</td>
      <td>{salaryText}</td>
      <td>{props.offer.city}</td>
      <td><FormattedNumber value={props.offer.visits} /></td>
      <td>
      <FormattedDate
        value={new Date(props.offer.date)}
        year='numeric'
        month='long'
        day='numeric'
        weekday='long'
      />
    </td>
    </tr>
  );
};

export default Job;
