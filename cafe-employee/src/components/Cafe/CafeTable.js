import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import { useNavigate } from 'react-router-dom';
function CafeTable({ cafes, onEmployeeRowClick  }) {
  const navigate = useNavigate();
  const columnDefs = [
    { headerName: 'Name', field: 'name' },
    { headerName: 'Description', field: 'description', sortable:true },
    { headerName: 'Employees', field: 'employees' },
    { headerName: 'Location', field: 'location', filter: true  },
    {
      headerName: 'Actions',
      cellRendererFramework: ({ data }) => (
        <div>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      ),
      width: 200,
    },
  ];

  const onRowClicked = (event) => {
    const cafeId = event.data.id; 
    console.log(cafeId)
    onEmployeeRowClick(cafeId); 
  };

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: '100%' }}>
      <AgGridReact
        columnDefs={columnDefs}
        rowData={cafes}
        domLayout='autoHeight'
        enableSorting={true}
        onRowClicked={onRowClicked}
      />
    </div>
  );
}

export default CafeTable;
