import { Avatar, Button, Container } from "@mui/material";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";





function Dashboard() {
    const [deleteConfirmation, setDeleteConfirmation] = useState(false);
    const [deleteStaffId, setDeleteStaffId] = useState(null);
    const [snackbarOpen, setSnackbarOpen] = useState(false);

    const handleDeleteConfirmation = (staffId) => {
        setDeleteConfirmation(true);
        setDeleteStaffId(staffId);
      };

      
    

  const [staff, setStaff] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://64abda389edb4181202eac24.mockapi.io/staffManagement`
        );
        if (response.status === 200) {
          const data = await response.json();
          console.log(data);
          setStaff(data);
        } else {
          throw new Error("Error fetching data");
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData()
  },[]);

  
  

  

  return (
    <Container maxWidth="lg" style={{ marginTop: 100 }}>
            <Button variant="contained" >Add Staff</Button>


      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="center">Address</TableCell>
              <TableCell align="center">Age</TableCell>
              <TableCell align="center">Image</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {staff.map((staff) => (
              <TableRow
                key={staff.id}
              >
                <TableCell component="th" scope="row">
                  {staff.name}
                </TableCell>
                <TableCell align="center">{staff.address}</TableCell>
                <TableCell align="center">{staff.age}</TableCell>
                <TableCell align="center" ><Avatar alt="Remy Sharp" style={{marginLeft: 10}}  src={staff.avatar} /></TableCell>
                <TableCell align="center"><Button>Edit</Button> <Button variant="outlined" color="error"  onClick={() => handleDeleteConfirmation(staff.id)}>Delete</Button></TableCell>
           
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default Dashboard;
