export const columnData = () => {
  const columns = [
    { field: "date", headerName: "Date", width: 150 },
    {
      field: "province",
      headerName: "Province",
      width: 200,
      sortable: false,
    },
    {
      field: "cases",
      headerName: "Cases",
      width: 200,
      sortable: false,
    },
    {
      field: "recoveries",
      headerName: "Recoveries",
      type: "number",
      width: 200,
      sortable: false,
    },
    {
      field: "activeCases",
      headerName: "Active Cases",
      type: "number",
      width: 200,
      sortable: false,
    },
    {
      field: "deaths",
      headerName: "Deaths",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 200,
    },
  ];
  return columns;
};
