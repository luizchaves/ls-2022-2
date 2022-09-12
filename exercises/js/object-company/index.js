const companies = [
  {
    name: 'Amazon',
    founded: 1994,
    industry: 'E-Commerce, Cloud',
    kind: 'Internet company',
  },
  {
    name: 'Facebook',
    founded: 2004,
    industry: 'Social',
    kind: 'Internet company',
  },
  {
    name: 'Alphabet Inc.',
    founded: 2015,
    industry: 'Search, Cloud, Advertising',
    kind: 'Internet company',
  },
];

function showCompanies(companies) {
  return companies
    .map((company) => company.name.padEnd(15, '.') + company.founded)
    .join('\n');
}

console.log(showCompanies(companies));
console.table(companies);
