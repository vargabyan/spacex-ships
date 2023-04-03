import { styled } from "@mui/material";

const PageCardStyles = styled('div')`
  color: white;

  .goBack {
    float: left;
  }

  .ArrowBack {
    padding-right: 16px; 
    float: left;
  }

  button {
    all: unset;
    cursor: pointer;
  }

  .textFloatLeft {
    float: left;
  }

  .textColorGrey {
    color: #818798;
    float: left;
    padding-right: 16px;
  }

  .tasks {
    color: #818798;
    padding-bottom: 16px;
  }
`;

export default PageCardStyles;
