import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

const Appartment = ({ appartment }) => {
  return (
    <div>
      <Card
        sx={{ maxWidth: 345 }}
        className="mt-6 bg-white shadow-1 p-5 rounded-lg rounded-tl-[90px] w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition"
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={appartment.image}
            alt="green iguana"
            className="rounded-3xl"
            sx={{maxHeight: '20rem'}}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {appartment.address}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {appartment.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default Appartment;
