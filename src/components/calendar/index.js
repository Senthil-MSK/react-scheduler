import React from "react";

import { useCalenderData } from "../../hooks/useCalenderData";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { useState } from "react";
import CalendarEvents from "../CalendarEvents";
import HeaderPage from "../HeaderPage";
import { DAYS, MONTHS } from "./constants";
import useFetch from "../../hooks/useFetch";

import {
  CalendarHead,
  SevenColGrid,
  Wrapper,
  HeadDay,
  CalendarBody,
  StyledDay,
  StyledEvent,
  StyledPrev,
  StyledNext,
} from "./styled";
import {
  areDateTheSame,
  getDateDiff,
  getDateObj,
  getDaysInMonth,
  getSortedDays,
  range,
} from "./utils";

const onSuccess = (data) => {
  console.log("ON success Method call", data.data.data);
};

const onError = (error) => {
  console.log("On Error method call", error);
};

function Calendar({ startingDate }) {
  const [currentMonth, setCurrentMonth] = useState(startingDate.getMonth());
  const [currentYear, setCurrentYear] = useState(startingDate.getFullYear());
  const DAYSINMONTH = getDaysInMonth(currentMonth, currentYear);

  //this is alternate way for fetching data, just for reference
  // const { isLoading, isError, data } = useCalenderData(onSuccess, onError);
  const { loading, data } = useFetch(
    "https://demo-api.digialpha.cloud/api/calender-demo"
  );

  // if (isLoading) {
  //   return <h1>Loading</h1>;
  // }
  // console.log("data", data.data.data);

  // if (isError) {
  //   return errorScreen();
  // }
  console.log(data?.data);
  const eventsArr = data?.data;

  const errorScreen = () => {
    return (
      <div>
        <h1 style={{ background: "red" }}>Error on fetching the API Data</h1>
      </div>
    );
  };

  const getNextMonth = () => {
    if (currentMonth < 11) {
      setCurrentMonth((prev) => prev + 1);
    } else {
      setCurrentMonth(0);
      setCurrentYear((prev) => prev + 1);
    }
  };

  const getPrevMonth = () => {
    if (currentMonth > 0) {
      setCurrentMonth((prev) => prev - 1);
    } else {
      setCurrentMonth(11);
      setCurrentYear((prev) => prev - 1);
    }
  };

  return (
    <Wrapper>
      <HeaderPage />
      <CalendarEvents />
      <Divider />
      <StyledPrev>
        <ArrowBackIosIcon color="#fff" onClick={getPrevMonth} />
      </StyledPrev>
      <StyledNext>
        <ArrowForwardIosIcon onClick={getNextMonth} />
      </StyledNext>
      <CalendarHead>
        {MONTHS[currentMonth]} {currentYear}
        {/* <Button>Today</Button> */}
      </CalendarHead>
      <SevenColGrid>
        {/* {getSortedDays(currentMonth, currentYear).map((day) => (
          <HeadDay key={day}>{day}</HeadDay>
        ))} */}
        {DAYS.map((day) => (
          <HeadDay key={day}>{day}</HeadDay>
        ))}
      </SevenColGrid>
      <CalendarBody fourCol={DAYSINMONTH === 28}>
        {DAYSINMONTH?.map((day) => (
          <StyledDay
            key={day}
            active={areDateTheSame(
              new Date(),
              getDateObj(day, currentMonth + 1, currentYear),
              getDateObj(day, currentMonth + 1, currentYear)
            )}
          >
            <p> {day}</p>
            {eventsArr?.map(
              (event) =>
                areDateTheSame(
                  getDateObj(day, currentMonth, currentYear),
                  new Date(
                    event.startDate.split("-")[2],
                    event.startDate.split("-")[1],
                    event.startDate.split("-")[0]
                  ),
                  new Date(
                    event.endDate.split("-")[2],
                    event.endDate.split("-")[1],
                    event.endDate.split("-")[0]
                  )
                ) && (
                  <StyledEvent
                    bgcolor={event.color}
                    // nos={getDateDiff(event.endDate, event.startDate)}
                  >
                    {event.name}
                  </StyledEvent>
                )
            )}
          </StyledDay>
        ))}
      </CalendarBody>
    </Wrapper>
  );
}

export default Calendar;
