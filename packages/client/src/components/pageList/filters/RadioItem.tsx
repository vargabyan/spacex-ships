import React, { useEffect, useState } from "react";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Grid,
} from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { RadioItemStyles } from "./styledComponents";

const RadioItem = () => {
  const [imputValue, setImputValue] = useState<string>("");
  const typeName: Array<string> = ["Barge", "Cargo", "High Speed Craft", "Tug"];
  const [searchParams, setSearchParams] = useSearchParams();

  const typeFilterParam: string | null = searchParams.get("type");
  const portFilterParam: string | null = searchParams.get("port")
    ? searchParams.get("port")
    : "";
  const nameFilterParam: string | null = searchParams.get("name")
    ? searchParams.get("name")
    : "";

  const handleClick = () => {
    if (typeFilterParam && imputValue) {
      setImputValue("");
      setSearchParams(`type=&port=${portFilterParam}&name=${nameFilterParam}`);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;

    const newValue = value === imputValue ? "" : value;

    setImputValue(newValue);

    setSearchParams(
      `type=${newValue}&port=${portFilterParam}&name=${nameFilterParam}`
    );
  };

  useEffect(() => {
    if (typeFilterParam) {
      setImputValue(typeFilterParam);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <RadioItemStyles>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <label className="label">Тип</label>
        </Grid>
        <Grid item xs={12}>
          <FormControl>
            <RadioGroup
              onChange={handleChange}
              onClick={handleClick}
              value={imputValue}
            >
              {typeName.map((value) => (
                <FormControlLabel
                  key={value}
                  value={value}
                  control={<Radio size="small" />}
                  label={value}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
    </RadioItemStyles>
  );
};

export default RadioItem;
