import React, { useEffect, useState } from "react";
import {
  MenuItem,
  FormControl,
  ListItemText,
  Checkbox,
  Grid,
  Box,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useSearchParams } from "react-router-dom";
import { SelectItemStyles } from "./styledComponents";

const portName = ["Port Canaveral", "Port of Los Angeles", "Fort Lauderdale"];

const SelectItem = () => {
  const [personName, setPersonName] = useState<string[]>(["Любой"]);
  const [open, setOpen] = useState<boolean>(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    const creatArray: Array<string> =
      typeof value === "string" ? value.split(",") : value;
    setPersonName(creatArray);

    const newValue: Array<string> = creatArray.filter(
      (value) => value !== "Любой"
    );
    const typeFilterParam: string | null = searchParams.get("type")
      ? searchParams.get("type")
      : "";
    const nameFilterParam: string | null = searchParams.get("name")
      ? searchParams.get("name")
      : "";

    setSearchParams(
      `type=${typeFilterParam}&port=${newValue}&name=${nameFilterParam}`
    );
  };

  const handleSwitch = () => {
    setOpen((value) => !value);
  };

  useEffect(() => {
    const portFilterParam: string | null = searchParams.get("port");

    if (portFilterParam) {
      const creatArray: Array<string> = `Любой,${portFilterParam}`.split(",");

      setPersonName(creatArray);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SelectItemStyles outline={open}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <label className="label">Порт</label>
        </Grid>
        <Grid item xs={12}>
          <Box className="outline">
            <FormControl color="primary" fullWidth>
              <Select
                color="primary"
                multiple
                onOpen={handleSwitch}
                onClose={handleSwitch}
                value={personName}
                onChange={handleChange}
                renderValue={() =>
                  personName.length !== 1
                    ? `Выбрано  ${personName.length - 1}`
                    : "Любой"
                }
                IconComponent={() =>
                  open ? (
                    <ExpandLessIcon color="primary" className="icon" />
                  ) : (
                    <ExpandMoreIcon color="primary" className="icon" />
                  )
                }
              >
                {portName.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={personName.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Grid>
      </Grid>
    </SelectItemStyles>
  );
};

export default SelectItem;
