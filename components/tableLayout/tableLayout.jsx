import { DataGrid } from "@material-ui/data-grid";

import { columnData } from "../../utils/columnsUtils";

export const TableLayout = (props) => {
  const { rows } = props;
  const columns = columnData();

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid columns={columns} rows={rows} pageSize={5} />
    </div>
  );
};

export default TableLayout;
