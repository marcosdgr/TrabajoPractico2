import React from 'react';
import "../Css/LangTable.css"

const LangTable = () => {
  const languages = [
    {
      id: 1,
      Lenguaje: 'JavaScript',
      Tipo: 'Interpretado',
      Descripcion:
        'Utilizado principalmente para crear aplicaciones web interactivas y dinámicas en el navegador.',
    },
    {
      id: 2,
      Lenguaje: 'Python',
      Tipo: 'Alto Nivel',
      Descripcion:
        'Lenguaje de propósito general conocido por su legibilidad y simplicidad. Utilizado en desarrollo web, ciencia de datos, inteligencia artificial, entre otros.',
    },
    {
      id: 3,
      Lenguaje: 'Java',
      Tipo: 'Compilado',
      Descripcion:
        'Lenguaje de programación orientado a objetos utilizado en desarrollo de aplicaciones empresariales, móviles y de servidor.',
    },
    {
      id: 4,
      Lenguaje: 'C++',
      Tipo: 'Compilado',
      Descripcion:
        'Lenguaje de programación de propósito general con capacidades de programación orientada a objetos y de bajo nivel. Utilizado en desarrollo de software de sistemas y aplicaciones con alto rendimiento.',
    },
    {
      id: 5,
      Lenguaje: 'PHP',
      Tipo: 'Interpretado',
      Descripcion:
        'Lenguaje de script del lado del servidor utilizado principalmente para el desarrollo web y la generación de contenido dinámico en sitios web.',
    },
    {
      id: 6,
      Lenguaje: 'Ruby',
      Tipo: 'Alto Nivel',
      Descripcion:
        'Lenguaje de programación dinámico, conocido por su sintaxis elegante y facilidad de uso. Popular en el desarrollo web con el framework Ruby on Rails.',
    },
    {
      id: 7,
      Lenguaje: 'Swift',
      Tipo: 'Compilado',
      Descripcion:
        'Lenguaje desarrollado por Apple para el desarrollo de aplicaciones en iOS y macOS, conocido por su seguridad y rendimiento.',
    },
    {
      id: 8,
      Lenguaje: 'Go',
      Tipo: 'Compilado',
      Descripcion:
        'Lenguaje de programación desarrollado por Google, conocido por su eficiencia, simplicidad y velocidad. Utilizado en sistemas y servicios de alto rendimiento.',
    },
  ];

  return (
    <div className="lang-table-container">
      <h2>Lenguajes de Programación</h2>
      <table className="lang-table">
        <thead>
          <tr>
            <th>Lenguaje</th>
            <th>Tipo</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          {languages.map((lang) => (
            <tr key={lang.id}>
              <td>{lang.Lenguaje}</td>
              <td>{lang.Tipo}</td>
              <td>{lang.Descripcion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LangTable;