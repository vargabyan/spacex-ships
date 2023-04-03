import React from "react";
import { Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { RootState } from "../../store/store";
import PageCardStyles from "./styledComponents";
import { DataState } from "../../reducers/dataSlice";

function PageCard() {
  const data = useSelector((state: RootState) => state.data.value);
  const { id } = useParams();
  const navigate = useNavigate();
  const currentData: DataState = data.filter((index) => index.id === id)[0];

  const goToback = () => {
    navigate(-1);
  };

  return (
    <PageCardStyles>
      <Grid container spacing={4} p={6}>
        <Grid item xs={12}>
          <button onClick={goToback}>
            <ArrowBackIcon className="ArrowBack" />
            <Typography className="goBack">Вернуться</Typography>
          </button>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4">{currentData.name}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Grid container spacing={4}>
                <Grid item xs={12} sm={4} md={3} lg={2}>
                  <Typography className="textColorGrey">Тип</Typography>
                  <Typography className="textFloatLeft">
                    {currentData.type}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm>
                  <Typography className="textColorGrey">Порт</Typography>
                  <Typography className="textFloatLeft">
                    {currentData.port}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={4}>
                <Grid item xs={12} sm={4} md={3} lg={2}>
                  <Typography className="textColorGrey">Вес</Typography>
                  <Typography className="textFloatLeft">
                    {currentData.weight} кг
                  </Typography>
                </Grid>
                <Grid item xs={12} sm>
                  <Typography className="textColorGrey">Год</Typography>
                  <Typography className="textFloatLeft">
                    {currentData.data.slice(0, 4)}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={10} md={9} lg={6}>
          <Typography className="tasks">Миссии</Typography>
          <Typography>{currentData.tasks}</Typography>
        </Grid>
      </Grid>
    </PageCardStyles>
  );
}

export default PageCard;
