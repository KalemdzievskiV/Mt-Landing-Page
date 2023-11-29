import React from "react";

// import houseData
import { housesData } from "../data";
//  useParams
import { useParams } from "react-router-dom";
// import icons
import { BiBed, BiBath, BiArea } from "react-icons/bi";
// import link
import { Link } from "react-router-dom";
import {
  Button,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import Carousel from "react-material-ui-carousel";
import Example from "./Carousel";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import PhoneIcon from "@mui/icons-material/Phone";

const AppartmentDetails = () => {
  const { id } = useParams();
  const property = housesData.find((appartment) => {
    return appartment.id === parseInt(id);
  });

  var items = property.images.map((image) => ({
    name: property.name,
    description: "Probably the most random thing you have ever seen!",
    image: image,
  }));

  const links = [
    {
      icon: <InstagramIcon />,
      text: "Instagram",
      url: "https://www.instagram.com/mt_center_square/",
    },
    {
      icon: <FacebookIcon />,
      text: "Facebook",
      url: "https://www.facebook.com/mtcentersquare",
    },
    { icon: <PhoneIcon />, text: "+38977222333", url: "tel:+1234567890" },
    // Add more links as needed
  ];

  return (
    <Paper className="container mx-auto min-h-[800px] mb-14 p-7 mt-3">
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        className="mb-6"
      >
        <div>
          <Typography variant="h4" fontWeight="bold">
            {property.name}
          </Typography>
          <Typography variant="h6" className="mb-4">
            {property.address}
          </Typography>
        </div>
      </Grid>
      <Grid
        container
        spacing={1}
        className="items-start gap-8 lg:flex-row rounded-3xl"
      >
        <Paper className="flex-1 mb-8 bg-white rounded-3xl">
          <Grid>
            <Carousel>
              {items.map((item, i) => (
                <Example key={i} item={item} />
              ))}
            </Carousel>
          </Grid>
        </Paper>
        <Grid item xs={12} md={6} lg={6}>
          <Paper className="flex-1 mb-8 bg-white border border-gray-300 rounded-lg p-6">
            <Grid container alignItems="center" spacing={4} className="mb-8">
              <Grid item>
                <div className="w-20 h-20 p-1 border border-gray-300 rounded-full">
                  <img src={property.agent.image} alt="" />
                </div>
              </Grid>
              <Grid item>
                <Typography variant="body1" fontWeight="bold">
                  {property.agent.name}
                </Typography>
              </Grid>
            </Grid>
            <List>
              {links.map((link, index) => (
                <ListItem
                  button
                  component="a"
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                >
                  <ListItemIcon>{link.icon}</ListItemIcon>
                  <ListItemText primary={link.text} />
                </ListItem>
              ))}
            </List>
            <Grid container direction="column" alignItems="center">
              <Typography variant="h3" gutterBottom>
                Prices
              </Typography>
              <Grid container item justifyContent="center" spacing={10}>
                <Grid item>
                  <Typography variant="h6">Short Stay</Typography>
                  <Typography>{property.price}</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h6">Over Night</Typography>
                  <Typography>{property.price}</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h6">Daily</Typography>
                  <Typography>{property.price}</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default AppartmentDetails;
