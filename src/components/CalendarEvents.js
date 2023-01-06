import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import SearchIcon from "@mui/icons-material/Search";
import SortIcon from "@mui/icons-material/Sort";
import AddIcon from "@mui/icons-material/Add";

function CalendarEvents(props) {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      spacing={0}
      mb={2}
    >
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        spacing={12}
      >
        <Button>All</Button>
        <Button disabled>Tasks</Button>
        <Button disabled>Meetings</Button>
        <Button disabled>Remainders</Button>
      </Stack>
      <Stack
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        spacing={3}
      >
        <Button variant="outlined" startIcon={<SearchIcon />}></Button>
        <Button variant="outlined" startIcon={<SortIcon />}></Button>
        <Button variant="contained" startIcon={<AddIcon />}></Button>
      </Stack>
    </Stack>
  );
}

export default CalendarEvents;
