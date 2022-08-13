import React from "react";
import { Button, Popper, Paper, Grow, MenuList, MenuItem } from "@mui/material";
import ClickAwayListener from '@mui/material/ClickAwayListener';
import DateRangeIcon from "@mui/icons-material/DateRange";

const rangeOptions = ['Yearly', 'Monthly', 'Weekly', 'Daily'];

const DateRange = () => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(2);

  const handleClose = (event: Event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) return;
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleMenuItemClick = (_: React.MouseEvent, index: number) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  return (
    <div>
      <Button
        ref={anchorRef}
        className="gh-btn"
        variant="contained"
        startIcon={<DateRangeIcon />}
        style={{ textTransform: 'none' }}
        onClick={handleToggle}
        size="small"
      >
        {rangeOptions[selectedIndex]}
      </Button>
      <Popper transition placement="bottom-start" open={open} anchorEl={anchorRef.current}  disablePortal>
        {({ TransitionProps }) => (
          <Grow {...TransitionProps}>
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                  <MenuList id="date-range-button-menu" autoFocusItem>
                    {rangeOptions.map((option, index) => (
                      <MenuItem
                        key={option}
                        disabled={index === selectedIndex}
                        selected={index === selectedIndex}
                        onClick={(event) => handleMenuItemClick(event, index)}
                      >
                        {option}
                      </MenuItem>
                    ))}
                  </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};

export default DateRange;
