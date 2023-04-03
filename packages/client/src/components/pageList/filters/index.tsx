import React from "react";
import { Grid, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { FilterStyles } from "./styledComponents";
import SelectItem from "./SelectItem";
import RadioItem from "./RadioItem";
import TextFieldItem from "./TextFieldItem";

type FilterProps = {
  handleOpenFilter: React.MouseEventHandler<HTMLButtonElement>;
};

const Filters = ({ handleOpenFilter }: FilterProps) => {
  return (
    <FilterStyles>
      <Grid container p={{ xs: 2, md: 3, lg: 6 }} spacing={4}>
        <Grid item xs={12} sx={{ display: { md: "block", xs: "none" } }}>
          <Typography className="headerText">Фильтры</Typography>
        </Grid>
        <Grid item xs={12} sx={{ display: { md: "none" } }}>
          <button onClick={handleOpenFilter}>
            <ArrowBackIcon className="arrowBackIcon" />
            <Typography className="filterText">Фильтры</Typography>
          </button>
        </Grid>
        <Grid item xs={12}>
          <TextFieldItem />
        </Grid>
        <Grid item xs={12}>
          <SelectItem />
        </Grid>
        <Grid item xs={12}>
          <RadioItem />
        </Grid>
      </Grid>
    </FilterStyles>
  );
};

export default Filters;
