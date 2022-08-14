import React from "react";
import { Button, Popper, Paper, Grow, MenuList, MenuItem } from "@mui/material";
import ClickAwayListener from '@mui/material/ClickAwayListener';
import DashboardIcon from '@mui/icons-material/Dashboard';

const viewOptions = ['Grid', 'List'];

const ViewType = () => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

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
        className="gh-btn"
        ref={anchorRef}
        variant="contained"
        startIcon={<DashboardIcon />}
        style={{ textTransform: 'none' }}
        onClick={handleToggle}
        size="small"
      >
        {viewOptions[selectedIndex]}
      </Button>
      <Popper className="gh-btn-popper" transition placement="bottom-start" open={open} anchorEl={anchorRef.current}  disablePortal>
        {({ TransitionProps }) => (
          <Grow {...TransitionProps}>
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                  <MenuList id="view-type-button-menu" autoFocusItem>
                    {viewOptions.map((option, index) => (
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

export default ViewType;
