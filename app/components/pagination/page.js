"use client"
import * as React from 'react';
import Link from 'next/link';
import { styled } from '@mui/system';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import  productData from '/app/components/data.json';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  TablePagination,
  tablePaginationClasses as classes,
} from '@mui/base/TablePagination';

export default function Pagination() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(4);
  const [productss, setProducts] = React.useState(productData.products); 
  const products = productData.products;

  const handleDelete = (product) => {
    
    const updatedProducts = productss.filter((p) => p.product_name !== product.product_name);
    setProducts(updatedProducts);
  };

 
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div >
      <Root sx={{ maxWidth: '100%', width: 500 }}>
        <table aria-label="custom pagination table">
          <thead>
            <tr>
              <th>Logo</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { productss.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((product) => (
              <tr key={product.product_name}>
                <td>
                  <img src={product.product_image} alt={product.product_name} style={{ maxWidth: '50px' }} />
                </td>
                <td>{product.product_name}</td>
                <td>{product.product_category}</td>
                <td>${product.product_price}</td>
                <td>
                <Link href={{pathname:"/components/purchase",
            query:{personn:JSON.stringify(product.product_name)}}}><IconButton aria-label="Show">
                    <VisibilityIcon />
                  </IconButton></Link>
                  <IconButton aria-label="Delete" onClick={() => handleDelete(product)}>
                    <DeleteIcon />
                  </IconButton>
                </td>
              </tr>
            ))}
            {emptyRows > 0 && (
              <tr style={{ height: 41 * emptyRows }}>
                <td colSpan={5} />
              </tr>
            )}
          </tbody>
          <tfoot>
            <tr>
            <CustomTablePagination
  rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
  colSpan={5}
  count={products.length}
  rowsPerPage={rowsPerPage}
  page={page}
  slotProps={{
    select: {
      'aria-label': 'rows per page',
    },
    actions: {
      showFirstButton: true,
      showLastButton: true,
      showPreviousButton: true,
      showNextButton: true,
    },
  }}
  onPageChange={handleChangePage}
  onRowsPerPageChange={handleChangeRowsPerPage}
/>

            </tr>
          </tfoot>
        </table>
      </Root>
    </div>
  );
}


function createData(Name, Category, Price) {
    return { Name, Category, Price };
  }

const rows = [
  createData('T-shirt', 'clothing', 500),
  createData('Flute', 'Instrument', 300),
  createData('Bag', 'Backpacks', 1500),
  createData('Chair', 'Furniture', 500),
  createData('Plant', 'Home Decor', 500),
  createData('Umbrella', 'Rain Gear', 300),
  createData('Mouse', 'Peripherals', 700),
  createData('Coat', 'clothing', 1200),
  createData('Cricket Kit', 'Cricket Equipment', 700),
  createData('Shoes', 'Footwear', 1500),
  createData('Watch', 'Accessories', 1500),
  createData('Belt', 'Accessories', 500),
  createData('Frame', 'Home Deco', 400),
].sort((a, b) => (a.Price < b.Price ? -1 : 1));

const grey = {
  200: '#d0d7de',
  800: '#32383f',
  900: '#24292f',
};

const Root = styled('div')(
  ({ theme }) => `
  table {
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    border-collapse: collapse;
    width: 100%;
  }

  td,
  th {
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[200]};
    text-align: left;
    padding: 8px;
  }

  th {
    background-color: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  }
  `,
);

const CustomTablePagination = styled(TablePagination)`
  & .${classes.toolbar} {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

    @media (min-width: 768px) {
      flex-direction: row;
      align-items: center;
    }
  }

  & .${classes.selectLabel} {
    margin: 0;
  }

  & .${classes.displayedRows} {
    margin: 0;

    @media (min-width: 768px) {
      margin-left: auto;
    }
  }

  & .${classes.spacer} {
    display: none;
  }

  & .${classes.actions} {
    display: flex;
    gap: 0.25rem;
  }
`;
