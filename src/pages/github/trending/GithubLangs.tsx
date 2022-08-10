import React from "react";
import { useTheme, styled } from '@mui/material/styles';
import { Button, Popper, InputBase, Box } from "@mui/material";
import Autocomplete, { autocompleteClasses } from '@mui/material/Autocomplete';
import FilterList from "@mui/icons-material/FilterList";
import DoneIcon from "@mui/icons-material/Done";
import { bindPopper, bindTrigger, usePopupState } from "material-ui-popup-state/hooks";

import githubColors from '@site/src/github/colors.json';
import type { GithubLang } from '@site/src/github/types';

const StyledInput = styled(InputBase)(({ theme }) => ({
  padding: 10,
  width: '100%',
  borderBottom: `1px solid ${
    theme.palette.mode === 'light' ? '#eaecef' : '#30363d'
  }`,
  '& input': {
    borderRadius: 4,
    backgroundColor: theme.palette.mode === 'light' ? '#fff' : '#0d1117',
    padding: 8,
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    border: `1px solid ${theme.palette.mode === 'light' ? '#eaecef' : '#30363d'}`,
    fontSize: 14,
    '&:focus': {
      boxShadow: `0px 0px 0px 3px ${
        theme.palette.mode === 'light'
          ? 'rgba(3, 102, 214, 0.3)'
          : 'rgb(12, 45, 107)'
      }`,
      borderColor: theme.palette.mode === 'light' ? '#0366d6' : '#388bfd',
    },
  },
}));

const StyledAutocompletePopper = styled("div")(({ theme }) => ({
  [`& .${autocompleteClasses.paper}`]: {
    boxShadow: "none",
    margin: 0,
    color: "inherit",
    fontSize: 13,
  },
  [`& .${autocompleteClasses.listbox}`]: {
    backgroundColor: theme.palette.mode === "light" ? "#fff" : "#1c2128",
    padding: 0,
    [`& .${autocompleteClasses.option}`]: {
      minHeight: "auto",
      alignItems: "flex-start",
      padding: 8,
      borderBottom: `1px solid  ${
        theme.palette.mode === "light" ? " #eaecef" : "#30363d"
      }`,
      '&[aria-selected="true"]': {
        backgroundColor: "transparent",
      },
      [`&.${autocompleteClasses.focused}, &.${autocompleteClasses.focused}[aria-selected="true"]`]:
        {
          backgroundColor: theme.palette.action.hover,
        },
    },
  },
  [`&.${autocompleteClasses.popperDisablePortal}`]: {
    position: "relative",
  },
}));

interface PopperComponentProps {
  anchorEl?: any;
  disablePortal?: boolean;
  open: boolean;
}

function PopperComponent(props: PopperComponentProps) {
  const { disablePortal, anchorEl, open, ...other } = props;
  return <StyledAutocompletePopper {...other} />;
}

const StyledPopper = styled(Popper)(({ theme }) => ({
  border: `1px solid ${theme.palette.mode === "light" ? "#e1e4e8" : "#30363d"}`,
  boxShadow: `0 8px 24px ${
    theme.palette.mode === "light" ? "rgba(149, 157, 165, 0.2)" : "rgb(1, 4, 9)"
  }`,
  borderRadius: 6,
  width: 300,
  zIndex: theme.zIndex.modal,
  fontSize: 13,
  color: theme.palette.mode === "light" ? "#24292e" : "#c9d1d9",
  backgroundColor: theme.palette.mode === "light" ? "#fff" : "#1c2128",
}));


const GithubLangs = () => {
  const theme = useTheme();
  const popupState = usePopupState({
    variant: 'popover',
    popupId: 'gh-langs-popover',
  });
  return (
    <div>
      <Button
        variant="contained"
        startIcon={<FilterList />}
        {...bindTrigger(popupState)}
      >
        ALL Language
      </Button>
      <StyledPopper placement="bottom-start" {...bindPopper(popupState)}>
        <Autocomplete
          open
          id="langs"
          getOptionLabel={(option: GithubLang) => option.lang}
          options={githubColors}
          sx={{ width: 300 }}
          renderOption={(props, option, { selected }) => {
            return (
            <li {...props}>
              <Box
                component="span"
                sx={{
                  width: 14,
                  height: 14,
                  flexShrink: 0,
                  borderRadius: "3px",
                  mr: 1,
                  mt: "2px",
                }}
                style={{ backgroundColor: option.color }}
              />
              <Box
                sx={{
                  flexGrow: 1,
                  "& span": {
                    color: theme.palette.mode === "light" ? "#586069" : "#8b949e",
                  },
                }}
              >
                {option.lang}
              </Box>
              <Box
                component={DoneIcon}
                sx={{ width: 17, height: 17, mr: "5px", ml: "-2px" }}
                style={{
                  visibility: selected ? "visible" : "hidden",
                }}
              />
            </li>
            )
          }}
          renderInput={(params) => (
            <StyledInput
              ref={params.InputProps.ref}
              inputProps={params.inputProps}
              autoFocus
              placeholder="Filter labels"
            />
          )}
        />
      </StyledPopper>
    </div>
  );
};

export default GithubLangs;
