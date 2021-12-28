import React from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

function Header() {
  return (
    <AppBar position="static">
      <Toolbar classNmaes={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          TripBuddy <img src="apple-touch-icon.png" alt="icon map" width="30" />
        </Typography>
        <Box display="flex">
          <Typography variant="h6" className={classes.title}>
            Explore places, hotels , restaurants
          </Typography>
          <Autocomplete>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search a place..."
                classes={{ root: classes.inputRoot, input: classes.inputInput }}
              />
            </div>
          </Autocomplete>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
