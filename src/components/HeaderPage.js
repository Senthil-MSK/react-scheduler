import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
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
      <Stack direction="row">
        <Button>
          <NotificationsIcon />
        </Button>
        <Button>
          <AccountCircleIcon />
        </Button>
      </Stack>
    </Stack>
  );
}

export default HeaderPage;
