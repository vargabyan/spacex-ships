import React, { useEffect, useState } from "react";
import { Grid, TextField, Box } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { TextFieldItemStyles } from "./styledComponents";

const TextFieldItem = () => {
  const [outline, setOutline] = useState<boolean>(false);
  const [imputValue, setImputValue] = useState<string>("");
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;

    setImputValue(value);
    localStorage.setItem("name-item-value", value);
    const typeFilterParam: string | null = searchParams.get("type")
      ? searchParams.get("type")
      : "";
    const portFilterParam: string | null = searchParams.get("port")
      ? searchParams.get("port")
      : "";
    setSearchParams(
      `type=${typeFilterParam}&port=${portFilterParam}&name=${value}`
    );
  };

  const handleClick = (key: string) => {
    if (key) {
      setOutline(true);
    } else {
      setOutline(false);
    }
  };

  document.onmousedown = () => handleClick("");

  useEffect(() => {
    const nameFilterParam: string | null = searchParams.get("name");

    if (nameFilterParam) {
      setImputValue(nameFilterParam);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TextFieldItemStyles outline={outline}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <label className="label">Название</label>
        </Grid>
        <Grid item xs={12}>
          <Box className="outline">
            <TextField
              className="textField"
              onChange={handleChange}
              onClick={() => handleClick("focus")}
              value={imputValue}
              fullWidth
              variant="outlined"
            />
          </Box>
        </Grid>
      </Grid>
    </TextFieldItemStyles>
  );
};

export default TextFieldItem;
