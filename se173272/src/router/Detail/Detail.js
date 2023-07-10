import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import "./detailStyle.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function StaffDetail() {
  const [staffSingle, setStaffSingle] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://64abda389edb4181202eac24.mockapi.io/staffManagement/${id}`
        );
        if (response.status === 200) {
          const data = await response.json();
          setStaffSingle(data);
        } else {
          throw new Error("Error fetching data");
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [id]);

  const formattedCreatedAt = staffSingle.createdAt
    ? new Date(staffSingle.createdAt).toLocaleString()
    : "";

  return (
    <div className="wrap-detail">
      <Card sx={{ width: 500 , height: 600}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image={staffSingle.avatar}
            alt="Staff Image"
            style={{objectFit:"cover"}}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" style={{textAlign:"center", paddingTop: 20}}>
              {staffSingle.name}
            </Typography>
            <Typography  variant="body2" color="text.secondary" style={{textAlign:"center", paddingTop: 20}}>
              {staffSingle.age}
            </Typography>

            <Typography gutterBottom variant="h5" component="div" style={{textAlign:"center", paddingTop: 20}}>
              {staffSingle.address}
            </Typography>

            <Typography gutterBottom variant="h5" component="div" style={{textAlign:"center", paddingTop: 20}}>
              {formattedCreatedAt}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}