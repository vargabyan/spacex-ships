import React, { useEffect } from "react";
import { Grid } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { RootState } from "../../store/store";
import { PaginationStyles } from "./styledComponents";

const Pagination = () => {
  const listCount = useSelector((state: RootState) => state.listCount.value);
  const { page } = useParams();
  const navigate = useNavigate();
  const listCountItms: number = 5;
  const conteForPage: number = listCount / listCountItms;
  const currentPage: number = Number(page);
  const [searchParams, _setSearchParams] = useSearchParams();

  const typeFilterParam: string | null = searchParams.get("type")
    ? searchParams.get("port")
    : "";
  const portFilterParam: string | null = searchParams.get("port")
    ? searchParams.get("port")
    : "";
  const nameFilterParam: string | null = searchParams.get("name")
    ? searchParams.get("name")
    : "";

  const handleClick = (key: string) => {
    if (key === "next" && currentPage < conteForPage) {
      navigate(
        `${
          currentPage + 1
        }?type=${typeFilterParam}&port=${portFilterParam}&name=${nameFilterParam}`
      );
    }
    if (key === "back" && currentPage > 1) {
      navigate(
        `${
          currentPage - 1
        }?type=${typeFilterParam}&port=${portFilterParam}&name=${nameFilterParam}`
      );
    }
  };

  useEffect(() => {
    if (page !== "1") {
      navigate(
        `1?type=${typeFilterParam}&port=${portFilterParam}&name=${nameFilterParam}`
      );
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
