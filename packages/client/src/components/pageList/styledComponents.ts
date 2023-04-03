import { styled } from '@mui/material'

export const PageListStyles = styled('div')`
  color: white;

  button {
    all: unset;
    cursor: pointer;
  }

  .textFilter {
    float: left;
  }

  .tuneIcon {
    float: left;
    padding-right: 16px;
    height: 24px;
    width: 24px;
    fill: white;
  }
`;

export const ListStyles = styled('div')`
  background: #22242A;
  color: white;
  border-radius: 8px;

  a {
    all: unset;
  }

  .ArrowForwardGridContainer{
    height: 100%;
    display: none;
  }

  .textFloatLeft {
    float: left;
  }

  .textColorGrey {
    color: #818798;
    float: left;
    padding-right: 16px;
  }

  :hover {
    background: #393C46;
    cursor: pointer;

    .ArrowForwardGridContainer {
      display: ${(props) => props.theme.breakpoints.values.lg ? 'flex' : 'none'};
    }
  }
`;

export const PaginationStyles = styled('div')`
  color: white;

  button {
    all: unset;
    cursor: pointer;
  }
`;
