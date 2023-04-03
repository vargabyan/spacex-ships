import { styled } from "@mui/material";

export const FilterStyles = styled('div')`
  background: #22242A;
  height: 100%;
  min-height: 1080px;

  .headerText { 
    font-size: 24px; 
  }

  .arrowBackIcon {
    float: left;
    padding-right: 16px;
    font-size: 28px;
    margin-top: 4px;
  }

  .filterText { 
    float: left; 
    font-size: 24px; 
  }

  button {
    all: unset;
    cursor: pointer;
  }
`;

type SelectItemStylesProps = {
  outline: boolean;
}

export const SelectItemStyles = styled('div')<SelectItemStylesProps>`
  .label {
    color: #C5C7CE;
  }

  .icon {
    margin-right: 8px;
  }

  .outline {
    padding: 2px;
    border-radius: 2px;
    background: ${({outline}) => outline ? 'linear-gradient(180deg, #BC75FF 0%, #798FFF 100%)' : '#393C46'}; 
  
    :hover {
      background: linear-gradient(180deg, #BC75FF 0%, #798FFF 100%); 
    }
  }

  .MuiFormControl-root {
    background: #393C46;
  }

  .MuiOutlinedInput-notchedOutline {
    border: none;
  }
`;

export const TextFieldItemStyles = styled('div')<SelectItemStylesProps>`
  .label {
    color: #C5C7CE;
  }

  .outline {
    padding: 2px;
    border-radius: 2px;
    background: ${({outline}) => outline ? 'linear-gradient(180deg, #BC75FF 0%, #798FFF 100%)' : '#393C46'}; 
  
    :hover {
      background: linear-gradient(180deg, #BC75FF 0%, #798FFF 100%) !important; 
    }
  }

  .MuiFormControl-root {
    background: #393C46;
  }

  .MuiOutlinedInput-notchedOutline {
    border: none;
  }
`;

export const RadioItemStyles = styled('div')`
  .label {
    color: #C5C7CE;
  }

  .MuiFormControl-root {
    background: unset;
  }

  .MuiButtonBase-root {
    :hover {
      background: unset !important;
    }
  }
`;
