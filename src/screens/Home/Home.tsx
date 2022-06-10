import { Box, Grid } from "@mui/material";
import React from "react";
import YoutubeEmbed from "../../components/Common/Video";

const Home = () => {
  // const links: Array<string> = [
  //   "ffbYbTjYdP0",
  //   "8EbzyL8fEko",
  //   "iqtfsEipBAw",
  //   "bRIrUdY3Xfk",
  // ];

  return (
    <p>
      Home
      {/* <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 1, sm: 8, md: 12 }}
      >
        {links.map((link, index) => {
          return (
            <Grid key={index} item xs={1} sm={4} md={4}>
              <YoutubeEmbed embedId={link} />
            </Grid>
          );
        })}
      </Grid> */}
    </p>
  );
};
export default Home;
