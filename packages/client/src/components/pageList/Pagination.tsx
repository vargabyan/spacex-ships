import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { PaginationStyles } from "./styledComponents";

const Pagination = () => {
  const listCount = useSelector((state: RootState) => state.listCount.value);
  const { page } = useParams();
  const navigate = useNavigate();
  const listCountItms: number = 5;
  const conteForPage: number = Math.ceil(listCount / listCountItms);
  const currentPage: number = Number(page);
  const location = useLocation();

  const handleClick = (key: string) => {
    if (key === "next" && currentPage < conteForPage) {
      navigate(`${currentPage + 1}${location.search}`);
    }
    if (key === "back" && currentPage > 1) {
      navigate(`${currentPage - 1}${location.search}`);
    }
  };

  useEffect(() => {
    if (Number(page) > conteForPage) {
      navigate(`1${location.search}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listCount]);

  return (
    <PaginationStyles>
      <Grid container spacing={1}>
        <Grid item>
          <button onClick={() => handleClick("back")}>
            <ArrowBackIosNewIcon />
          </button>
        </Grid>
        <Grid item>{page}</Grid>
        <Grid item>
          <button onClick={() => handleClick("next")}>
            <ArrowForwardIosIcon />
          </button>
        </Grid>
      </Grid>
    </PaginationStyles>
  );
};

export default Pagination;
