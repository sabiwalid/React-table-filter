import React from "react";

const ProductTableRow = ({ row: { id, original } }) => {
  return (
    <tr key={id}>
      <td>
        <a target="_none" href={original.link}>
          {original.name}
        </a>
      </td>
      <td style={{ paddingRight: "1rem" }}>
        <img
          height="40px"
          width="auto"
          src={original.thumbnail}
          alt={original.name}
        />
      </td>
      <td>{original.category}</td>
    </tr>
  );
};

export default ProductTableRow;
