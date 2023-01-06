import Paper from "@mui/material/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  MonthView,
  Appointments,
  Toolbar,
  DateNavigator,
  TodayButton,
} from "@devexpress/dx-react-scheduler-material-ui";

import { useCalenderData } from "./hooks/useCalenderData";

const today = new Date();
const currentDate = "2018-11-01";

const schedulerData = [
  {
    startDate: "2018-11-01T09:45",
    endDate: "2018-11-02T11:00",
    title: "Meeting",
  },
  {
    startDate: "2018-11-01T12:00",
    endDate: "2018-11-01T13:30",
    title: "Go to a gym",
  },
];

const onSuccess = (data) => {
  console.log("ON success Method call", data.data.data);
};

const onError = (error) => {
  console.log("On Error method call", error);
};

const errorScreen = () => {
  return (
    <div>
      <h1 style={{ background: "red" }}>Error on fetching the API Data</h1>
    </div>
  );
};

const SchedulerPage = () => {
  // const { isLoading, isError, data } = useCalenderData(onSuccess, onError);

  // if (isLoading) {
  //   return <h1>Loading</h1>;
  // }

  // if (isError) {
  //   return errorScreen();
  // }

  return (
    <Paper>
      <Scheduler data={schedulerData}>
        <ViewState currentDate={currentDate} />
        <MonthView startDayHour={9} endDayHour={14} />
        <Toolbar />
        <DateNavigator />
        <TodayButton />
        <Appointments />
      </Scheduler>
    </Paper>
  );
};

export default SchedulerPage;
