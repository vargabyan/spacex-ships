import React, { useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { ListStyles } from "./styledComponents";
import { RootState } from "../../store/store";
import { DataState } from "../../reducers/dataSlice";
import { setListCount } from "../../reducers/listCountSlice";
import { useSearchParams } from "react-router-dom";

const List = () => {
  const data = useSelector((state: RootState) => state.data.value);
  const dispatch = useDispatch();
  const { page } = useParams();
  const listCountItms: number = 5;
  const itemsMax = Number(page) * listCountItms;
  const itemsMin = itemsMax - listCountItms;
  let filterData: Array<DataState> = data;
  const [searchParams] = useSearchParams();

  const nameFilterParam: string | null = searchParams.get("name");
  const typeFilterParam: string | null = searchParams.get("type");
  const portFilterParam: string | null = searchParams.get("port");

  if (typeFilterParam) {
    filterData = filterData.filter((value) => value.type === typeFilterParam);
  }
  if (portFilterParam) {
    const paramFilter: Array<string> = portFilterParam.split(",");
    filterData = filterData.filter((value) => paramFilter.includes(value.port));
  }
  if (nameFilterParam) {
    const regex = new RegExp(
      `^(${nameFilterParam})|\\s(${nameFilterParam})`,
      "ig"
    );

    filterData = filterData.filter((value) => regex.exec(value.name) !== null);
  }

  const filterDataForPage: Array<DataState> = filterData.filter(
    (_value, index) => index > itemsMin - 1 && index < itemsMax
  );

  useEffect(() => {
    dispatch(setListCount(filterData.length));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterData]);

  return (
    <Grid container spacing={2}>
      {filterDataForPage.map((index) => (
        <Grid item xs={12} key={index.id}>
          <ListStyles>
            <Link to={`/card/${index.id}`}>
              <Grid container>
                <Grid item xs={12} md={10} lg={11}>
                  <Grid container spacing={2} p={4}>
                    <Grid item xs={12}>
                      <Typography variant="h6">{index.name}</Typography>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4} lg={2}>
                      <Typography className="textColorGrey">Тип</Typography>{" "}
                      <Typography className="textFloatLeft">
                        {index.type}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography className="textColorGrey">Порт</Typography>{" "}
                      <Typography className="textFloatLeft">
                        {index.port}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid
                  item
                  md={2}
                  lg={1}
                  sx={{ display: { xs: "none", md: "block" } }}
                >
                  <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    className="ArrowForwardGridContainer"
                  >
                    <Grid item xs={6}>
                      <ArrowForwardIcon />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Link>
          </ListStyles>
        </Grid>
      ))}
    </Grid>
  );
};

export default List;
