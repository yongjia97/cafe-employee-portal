import React from 'react';
import { AgGridReact } from 'ag-grid-react';

function EmployeeTable({ employees }) {
  const columnDefs = [
    { headerName: 'Employee ID', field: 'id' },
    { headerName: 'Name', field: 'name' },
    { headerName: 'Email Address', field: 'email_address' },
    { headerName: 'Phone Number', field: 'phone_number' },
    { headerName: 'Days Worked', field: 'days_worked' },
    { headerName: 'Cafe Name', field: 'cafe' },
    {
      headerName: 'Actions',
      cellRendererFramework: () => (
        <div>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      ),
    },
  ];

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: '100%' }}>
      <AgGridReact
        columnDefs={columnDefs}
        rowData={employees}
        domLayout='autoHeight'
      />
    </div>
  );
}

export default EmployeeTable;
