import React, { FC, useEffect, useState } from "react";
import { useTheme, styled } from '@mui/material/styles';
import { Button, Popper, InputBase, Box } from "@mui/material";
import Autocomplete, { autocompleteClasses } from '@mui/material/Autocomplete'
import FilterList from "@mui/icons-material/FilterList";
import DoneIcon from "@mui/icons-material/Done";

import githubColors from '@site/src/github/colors.json';
import type { GithubLang } from '@site/src/github/types';

const StyledAutocompletePopper = styled('div')(({ theme }) => ({
  [`& .${autocompleteClasses.paper}`]: {
    boxShadow: 'none',
    margin: 0,
    color: 'inherit',
    fontSize: 13,
  },
  [`& .${autocompleteClasses.listbox}`]: {
    backgroundColor: theme.palette.mode === 'light' ? '#fff' : '#1c2128',
    padding: 0,
    [`& .${autocompleteClasses.option}`]: {
      minHeight: 'auto',
      alignItems: 'flex-start',
      padding: 8,
      borderBottom: `1px solid  ${
        theme.palette.mode === 'light' ? ' #eaecef' : '#30363d'
      }`,
      '&[aria-selected="true"]': {
        backgroundColor: 'transparent',
      },
      [`&.${autocompleteClasses.focused}, &.${autocompleteClasses.focused}[aria-selected="true"]`]:
        {
          backgroundColor: theme.palette.action.hover,
        },
    },
  },
  [`&.${autocompleteClasses.popperDisablePortal}`]: {
    position: 'relative',
  },
}));

function PopperComponent(props: any) {
  const { disablePortal, anchorEl, open, ...other } = props;
  return <StyledAutocompletePopper {...other} />;
}

const StyledPopper = styled(Popper)(({ theme }) => ({
  border: `1px solid ${theme.palette.mode === 'light' ? '#e1e4e8' : '#30363d'}`,
  boxShadow: `0 8px 24px ${
    theme.palette.mode === 'light' ? 'rgba(149, 157, 165, 0.2)' : 'rgb(1, 4, 9)'
  }`,
  borderRadius: 6,
  width: 300,
  zIndex: 9,
  fontSize: 13,
  color: theme.palette.mode === 'light' ? '#24292e' : '#c9d1d9',
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : '#1c2128',
}));

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

interface LanguagesProps {
  defaultValue: GithubLang;
  onChange?: (key: string, val: GithubLang) => void;
}

export const LangIcon = ({ lang }) => {
  return (
    <Box style={{ marginRight: 20 }}>
      <Box
        component="span"
        style={{
          display: 'inline-block',
          width: 12,
          height: 12,
          verticalAlign: -1,
          borderRadius: '50%',
          marginRight: 5,
          border: 'solid 1px rgba(0,0,0,0.1)',
          backgroundColor: githubColors.map[lang],
        }}
      />
      {lang}
    </Box>
  )
}

const Languages: FC<LanguagesProps> = ({ defaultValue, onChange }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<null | GithubLang>(null);
  const theme = useTheme();

  const id = open ? 'github-langs' : undefined;

  const handleVal = (val: GithubLang) => {
    setLang(val);
    onChange && onChange('language', val);
  }

  useEffect(() => {
    handleVal(defaultValue);
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setOpen(true)
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(false);
    setAnchorEl(null);
  };

  const handleLang = (_: React.SyntheticEvent, val: GithubLang) => {
    handleVal(val);
    handleClose();
  };

  return (
    <div>
      <Button
        className="gh-btn"
        variant="contained"
        startIcon={<FilterList />}
        style={{ textTransform: 'none' }}
        onClick={handleClick}
        size="small"
      >
        {lang?.lang || '😔'}
      </Button>
      <StyledPopper id={id} placement="bottom-start" open={open} anchorEl={anchorEl}>
        <Autocomplete
          open
          id="github-languages"
          value={lang}
          disableCloseOnSelect
          getOptionLabel={(option: GithubLang) => option.lang}
          // @ts-ignore
          options={githubColors.list}
          PopperComponent={PopperComponent}
          onChange={handleLang}
          onClose={handleClose}
          isOptionEqualToValue={(a, b) => a.lang === b.lang}
          renderOption={(props, option, { selected }) => {
            const isAll = option.lang === 'All Languages';
            return (
            <li {...props}>
              <Box
                component="span"
                style={{
                  width: 14,
                  height: isAll ? 'auto' : 14,
                  borderRadius: '50%',
                  marginRight: 5,
                  border: isAll ? 'none' : 'solid 1px rgba(0,0,0,0.1)',
                  backgroundColor: isAll ? '' : option.color,
                }}
              >
                {isAll ? '❖' : ''}
              </Box>
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

export default Languages;
