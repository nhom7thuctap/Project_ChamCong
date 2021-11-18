import { ROUTES } from "@/constants/routers";
import { useRouter } from "@/hooks/router/useRouter";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import EditIcon from "@mui/icons-material/Edit";
import RemoveIcon from "@mui/icons-material/Remove";
import { DataGrid } from "@mui/x-data-grid";
import * as React from "react";
import { Button, ButtonGroup } from "reactstrap";
import "./styles.scss";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import SearchIcon from "@mui/icons-material/Search";

const columns = [
  { field: "id", headerName: "SID", width: 50 },
  {
    field: "avatar",
    headerName: "",
    type: "string",
    width: 50,
  },
  {
    field: "fullName",
    headerName: "HỌ TÊN",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 200,
    valueGetter: (params: any) =>
      `${params.getValue(params.id, "firstName") || ""} ${
        params.getValue(params.id, "lastName") || ""
      }`,
  },

  {
    field: "office",
    headerName: "VĂN PHÒNG LÀM VIỆC",
    type: "string",
    width: 200,
  },
  {
    field: "rank",
    headerName: "CẤP BẬC",
    type: "string",
    width: 120,
  },
  {
    field: "typeOfEmployee",
    headerName: "LOẠI HÌNH CÔNG VIỆC ",
    type: "string",
    width: 200,
  },
  {
    field: "email",
    headerName: "EMAIL",
    type: "string",
    width: 200,
  },

  {
    field: "status",
    headerName: "TRẠNG THÁI",
    type: "string",
    width: 150,
  },
  {
    field: "creator",
    headerName: "NGƯỜI TẠO",
    type: "string",
    width: 150,
  },
  {
    field: "dateCreated",
    headerName: "NGÀY TẠO",
    type: "date",
    width: 150,
  },
  {
    field: "action",
    headerName: "",
    sortable: false,
    width: 150,

    renderCell: (params: any) => (
      // const onClick = (e) => {
      //   e.stopPropagation(); // don't select this row after clicking

      //   const { api } = params;
      //   const thisRow: Record<string, GridCellValue> = {};

      //   api
      //     .getAllColumns()
      //     .filter((c) => c.field !== "__check__" && !!c)
      //     .forEach(
      //       (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
      //     );

      //   return alert(JSON.stringify(thisRow, null, 4));
      // };

      <ButtonGroup>
        <Button outline color="primary">
          <EditIcon />
        </Button>
        <Button outline color="danger" style={{ marginLeft: "2px" }}>
          <RemoveIcon />
        </Button>
      </ButtonGroup>
    ),
  },
];

const rows = [
  {
    id: 1,
    lastName: "Snow",
    firstName: "Jon",
    office: "VP1",
    rank: "Nhân viên",
    typeOfEmployee: "Nhân viên chính thức",
    email: "Jokhdosww@gmail.com",
    status: "active",
    creator: "admin",
  },
  {
    id: 2,
    lastName: "Lannister",
    firstName: "Cersei",
    office: "VP1",
    rank: "Nhân viên",
    typeOfEmployee: "Nhân viên chính thức",
    email: "Jokhdosww@gmail.com",
    status: "active",
    creator: "admin",
  },
  {
    id: 3,
    lastName: "Lannister",
    firstName: "Jaime",
    office: "VP1",
    rank: "Nhân viên",
    typeOfEmployee: "Nhân viên chính thức",
    email: "Jokhdosww@gmail.com",
    status: "active",
    creator: "admin",
  },
  {
    id: 4,
    lastName: "Stark",
    firstName: "Arya",
    office: "VP1",
    rank: "Nhân viên",
    typeOfEmployee: "Nhân viên chính thức",
    email: "Jokhdosww@gmail.com",
    status: "active",
    creator: "admin",
  },
  {
    id: 5,
    lastName: "Targaryen",
    firstName: "Daenerys",
    office: "VP1",
    rank: "Nhân viên",
    typeOfEmployee: "Nhân viên chính thức",
    email: "Jokhdosww@gmail.com",
    status: "active",
    creator: "admin",
  },
  {
    id: 6,
    lastName: "Melisandre",
    firstName: null,
    office: "VP1",
    rank: "Nhân viên",
    typeOfEmployee: "Nhân viên chính thức",
    email: "Jokhdosww@gmail.com",
    status: "active",
    creator: "admin",
  },
  {
    id: 7,
    lastName: "Clifford",
    firstName: "Ferrara",
    office: "VP1",
    rank: "Nhân viên",
    typeOfEmployee: "Nhân viên chính thức",
    email: "Jokhdosww@gmail.com",
    status: "active",
    creator: "admin",
  },
  {
    id: 8,
    lastName: "Frances",
    firstName: "Rossini",
    office: "VP1",
    rank: "Nhân viên",
    typeOfEmployee: "Nhân viên chính thức",
    email: "Jokhdosww@gmail.com",
    status: "active",
    creator: "admin",
  },
  {
    id: 9,
    lastName: "Roxie",
    firstName: "Harvey",
    office: "VP1",
    rank: "Nhân viên",
    typeOfEmployee: "Nhân viên chính thức",
    email: "Jokhdosww@gmail.com",
    status: "active",
    creator: "admin",
  },
  {
    id: 10,
    lastName: "Roxie",
    firstName: "Harvey",
    office: "VP1",
    rank: "Nhân viên",
    typeOfEmployee: "Nhân viên chính thức",
    email: "Jokhdosww@gmail.com",
    status: "active",
    creator: "admin",
  },
  {
    id: 11,
    lastName: "Roxie",
    firstName: "Harvey",
    office: "VP1",
    rank: "Nhân viên",
    typeOfEmployee: "Nhân viên chính thức",
    email: "Jokhdosww@gmail.com",
    status: "active",
    creator: "admin",
  },
  {
    id: 12,
    lastName: "Roxie",
    firstName: "Harvey",
    office: "VP1",
    rank: "Nhân viên",
    typeOfEmployee: "Nhân viên chính thức",
    email: "Jokhdosww@gmail.com",
    status: "active",
    creator: "admin",
  },
  {
    id: 13,
    lastName: "Roxie",
    firstName: "Harvey",
    office: "VP1",
    rank: "Nhân viên",
    typeOfEmployee: "Nhân viên chính thức",
    email: "Jokhdosww@gmail.com",
    status: "active",
    creator: "admin",
  },
  {
    id: 14,
    lastName: "Roxie",
    firstName: "Harvey",
    office: "VP1",
    rank: "Nhân viên",
    typeOfEmployee: "Nhân viên chính thức",
    email: "Jokhdosww@gmail.com",
    status: "active",
    creator: "admin",
  },
  {
    id: 15,
    lastName: "Roxie",
    firstName: "Harvey",
    office: "VP1",
    rank: "Nhân viên",
    typeOfEmployee: "Nhân viên chính thức",
    email: "Jokhdosww@gmail.com",
    status: "active",
    creator: "admin",
  },
];

export default function EmployeeList() {
  const router = useRouter();

  return (
    <div className="employee-wrapper">
      <h4 className="title">Danh sách nhân viên</h4>
      <div className="button-wrapper">
        <ButtonGroup>
          <Button className="btn-active">
            <SupervisorAccountIcon />
            Tất cả
          </Button>
          <Button>
            <SearchIcon />
            Bộ lọc - Tìm kiếm
          </Button>
        </ButtonGroup>
        <Button
          color="success"
          onClick={() => {
            router.push(ROUTES.ADD);
          }}
        >
          <AddCircleOutlineIcon />
          Thêm mới nhân viên
        </Button>
      </div>
      <div className="table">
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </div>
  );
}
