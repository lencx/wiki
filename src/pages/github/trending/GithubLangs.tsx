import React from "react";
import { Button, Popover, Autocomplete, Input } from "@mui/material";
// import { withStyles } from "@mui/material/styles";
import FilterList from "@mui/icons-material/FilterList";
import PopupState, { bindPopover, bindTrigger } from "material-ui-popup-state";

const GithubLangs = () => {
  return (
    <PopupState variant="popover" popupId="gh-langs-popover">
      {(popupState) => (
        <div>
          <Button
            variant="contained"
            startIcon={<FilterList />}
            {...bindTrigger(popupState)}
          >
            ALL Language
          </Button>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <Autocomplete
              disablePortal
              id="langs"
              options={[
                { lang: 'css', color: '#333' },
                { lang: 'html', color: '#666' },
              ]}
              sx={{ width: 300 }}
              renderInput={(params) => <Input {...params} />}
            />
          </Popover>
        </div>
      )}
    </PopupState>
  );
};

export default GithubLangs;
