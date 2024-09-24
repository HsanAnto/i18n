import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import Job from "./job";
import "./list.css"

const JobsList = () => {
  const [offers] = useState([
    {
      id: "0001",
      name: "Manager",
      company: "Schneider Electric",
      salary: 4.5,
      city: "Bogotá, Colombia",
      date: "2019-03-26",
      visits: 20145
    },
    {
      id: "0002",
      name: "Software Engineer",
      company: "Google Inc.",
      salary: 20,
      city: "Palo Alto, CA, USA",
      date: "2019-03-27",
      visits: 50245
    },
    {
      id: "0003",
      name: "Nurse",
      company: "Clínica La Aurora",
      salary: 1,
      city: "Cali, Colombia",
      date: "2019-03-28",
      visits: 2345
    },
  ]);

  const isSpanish = navigator.language.startsWith('es');

  return (
    <div>
      <table className="table">
        {/* Cambiar el color del encabezado según el idioma (ejemplo en español e inglés) */}
        <thead className={isSpanish ? 'thead-light' : 'thead-dark'}>
          <tr>
            <th scope="col">#</th>
            <th scope="col">
              <FormattedMessage id="Position" defaultMessage="Position" />
            </th>
            <th scope="col">
              <FormattedMessage id="Company" defaultMessage="Company" />
            </th>
            <th scope="col">
              <FormattedMessage id="Salary" defaultMessage="Salary" />
            </th>
            <th scope="col">
              <FormattedMessage id="City" defaultMessage="City" />
            </th>
            <th scope="col">
              <FormattedMessage id="Visits" defaultMessage="Visits" />
            </th>
            <th scope="col">
              <FormattedMessage id="PublicationDate" defaultMessage="Publication Date" />
            </th>
          </tr>
        </thead>
        <tbody>
          {offers.map((e, i) => (
            <Job key={i} offer={e} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobsList;
