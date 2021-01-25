import React from "react";
import PropTypes from "prop-types";
import { useFilters, useTable } from "react-table";
import ProductTableRow from "./ProductTableRow";
const tableColumns = [
  {
    Header: "Name",
    accessor: "name", // accessor is the "key" in the data
  },
  {
    Header: "Thumbnail",
    accessor: "thumbnail",
  },
  {
    Header: "Category",
    accessor: "category",
    // we use our custom "text" filter
    filter: "string",
  },
];

const ProductsTable = ({ products }) => {
  const { columns, rows, setFilter, getTableProps } = useTable(
    {
      columns: tableColumns,
      data: products,
      getRowId: (product) => product._id,
    },
    useFilters
  );

  const handleFilterChange = (event) => {
    const value = event.target.value;
    setFilter("category", value);
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleFilterChange}
        placeholder="filter by category"
      />
      <table {...getTableProps()}>
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.Header}>{col.Header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <ProductTableRow row={row} key={row.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

ProductsTable.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductsTable;
