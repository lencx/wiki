import React, { FC, useEffect } from "react";
import { Button, Popper, Paper, Grow, MenuList, MenuItem } from "@mui/material";
import ClickAwayListener from '@mui/material/ClickAwayListener';
import DateRangeIcon from "@mui/icons-material/DateRange";

const rangeOptions = ['Daily', 'Weekly', 'Monthly', 'Yearly'];

export type RangeType = 'Yearly' | 'Monthly' | 'Weekly' | 'Daily';
interface DateRangeProps {
  defaultValue: RangeType;
  onChange?: (key: string, val: RangeType) => void;
}

const DateRange: FC<DateRangeProps> = ({ defaultValue, onChange }) => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(2);

  useEffect(() => {
    const idx = rangeOptions.findIndex((i) => i === defaultValue);
    setSelectedIndex(idx);
    onChange && onChange('range', rangeOptions[idx].toLocaleLowerCase() as RangeType);
  }, [defaultValue])

  const handleClose = (event: Event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) return;
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleMenuItemClick = (_: React.MouseEvent, index: number) => {
    setOpen(false);
    setSelectedIndex(index);
    onChange && onChange('range', rangeOptions[index].toLocaleLowerCase() as RangeType);
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
      <Popper className="gh-btn-popper" transition placement="bottom-start" open={open} anchorEl={anchorRef.current}  disablePortal>
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
