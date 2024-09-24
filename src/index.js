import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from 'react-intl';
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en"; // Asegúrate de que el archivo no esté vacío
import JobsList from "./components/jobslist.js";

// Definir las traducciones disponibles
const messages = {
  'es': localeEsMessages,
  'en': localeEnMessages
};

// Normalizar el idioma para que solo use 'es' o 'en'
const language = navigator.language.split(/[-_]/)[0]; // Normaliza el código de idioma ('es-ES' -> 'es', 'en-US' -> 'en')

// Verificar si el idioma está soportado; si no, usar inglés por defecto
const selectedMessages = messages[language] || messages['en'];

ReactDOM.render(
  <IntlProvider locale={language} messages={selectedMessages}>
    <JobsList />
  </IntlProvider>,
  document.getElementById("root")
);
