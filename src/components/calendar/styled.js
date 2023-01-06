import styled from "styled-components";

export const Wrapper = styled.div`
  width: 90%;
  // height: 50vh;
  // border: 1px solid grey;
  margin: 0 auto;
  // background: grey;
`;

export const CalendarHead = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 24px;
`;

export const SevenColGrid = styled.div`
  width: 100%;
  height: 25px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

export const HeadDay = styled.div`
  text-align: left;
  // background: darkkhaki;
  font-size: 0.8rem;
  color: #b2b2b2;
  font-weight: 600;
`;

export const CalendarBody = styled.div`
  height: calc(100% - 25px);
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(${(fourCol) => (fourCol ? 4 : 5)}, 1fr);
`;

export const StyledDay = styled.div`
  border: 1px solid #eeeeee;
  text-align: left;
  padding: 5px;
  ${({ active }) => active && `background:#f0e6ea`};
`;

export const StyledEvent = styled.span`
  display: grid;
  text-align: left;
  background: ${({ bgcolor }) => bgcolor || "darkblue"};
  color: white;
  padding: 2px 7px;
  border-radius: 5px;
  position: relative;

  // ${({ nos }) => `width: calc(100% * ` + nos + `)`};
`;

export const StyledPrev = styled.div`
  position: fixed;
  top: 50%;
  left: -5.2%;
  padding-top: 70px;
  padding-bottom: 70px;
  padding-left: 70px;
  padding-right: 15px;
  border-radius: 50%;
  background: #eeeeee;
  &:hover {
    left: -4%;
  }
`;
export const StyledNext = styled.div`
  position: fixed;
  top: 50%;
  right: -5.5%;
  padding-top: 70px;
  padding-bottom: 70px;
  padding-right: 70px;
  padding-left: 15px;
  border-radius: 50%;
  background: #eeeeee;
  &:hover {
    right: -4%;
  }
`;
