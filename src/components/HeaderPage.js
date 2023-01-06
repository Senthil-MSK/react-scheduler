import Stack from "@mui/material/Stack";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function HeaderPage(props) {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      spacing={0}
      mt={3}
      mb={5}
    >
      <div>Calendar</div>
      <div>
        <NotificationsIcon />
        <AccountCircleIcon />
      </div>
    </Stack>
  );
}

export default HeaderPage;
