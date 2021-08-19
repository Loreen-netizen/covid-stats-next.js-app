import { DataGrid } from "@material-ui/data-grid";
import { columnData } from "../../services/covidService";

export const TableLayout = (props) => {
  const { rows } = props;
  const columns = columnData();

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid columns={columns} rows={rows} pageSize={12} />
    </div>
  );
};

export default TableLayout;
