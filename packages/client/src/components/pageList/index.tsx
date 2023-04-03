import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import List from "./List";
import Pagination from "./Pagination";
import { PageListStyles } from "./styledComponents";
import { ReactComponent as Logo } from "./icons/filter.svg";
import Filters from "./filters";

function PageList() {
  const [open, setOpen] = useState<boolean>(true);
  const openList: string = open ? "block" : "none";
  const openFilter: string = !open ? "block" : "none";

  const handleOpenFilter = () => {
    setOpen((value) => !value);
  };

  return (
    <PageListStyles>
      <Grid container>
        <Grid
          item
          xs={12}
          md={8}
          lg={9}
          sx={{ display: { xs: openList, md: "block" } }}
        >
          <Grid
            container
            justifyContent="center"
            p={{ xs: 2, md: 3, lg: 6 }}
            spacing={3}
          >
            <Grid item xs={12}>
              <Typography variant="h4">SpaceX Ships</Typography>
            </Grid>
            <Grid item xs={12} sx={{ display: { md: "none" } }}>
              <button onClick={handleOpenFilter}>
                <Logo className="tuneIcon" />
                <Typography className="textFilter">Фильтры</Typography>
              </button>
            </Grid>
            <Grid item xs={12}>
              <List />
            </Grid>
            <Grid item xs={12}>
              <Pagination />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          lg={3}
          sx={{ display: { xs: openFilter, md: "block" } }}
        >
          <Filters handleOpenFilter={handleOpenFilter} />
        </Grid>
      </Grid>
    </PageListStyles>
  );
}

export default PageList;
