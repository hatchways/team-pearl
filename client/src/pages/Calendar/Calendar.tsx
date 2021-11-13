import { useContext } from 'react';
import FullCalendar, { EventClickArg, EventDropArg, EventHoveringArg } from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin, { EventResizeDoneArg } from '@fullcalendar/interaction';

import useStyles from './useStyles';
import { BoardContext } from '../../context/useBoardContext';
import { ICard } from '../../interface';
import { Container } from '@material-ui/core';

const Calendar = (): JSX.Element => {
  const [board, setBoard] = useContext(BoardContext);
  const classes = useStyles();

  const handleClick = (info: EventClickArg) => {
    // you need to render the card details popup here
    alert(`${info.event.title} was clicked`);
  };

  const handleEventDrop = (info: EventDropArg) => {
    const {
      id,
      title,
      extendedProps: { description },
      backgroundColor,
      start,
      end,
    } = info.event.toPlainObject();

    const newBoard = { ...board };
    newBoard.cards[id] = {
      id,
      title,
      description,
      color: backgroundColor,
      start,
      end,
    };

    setBoard(newBoard);
  };

  const handleEventResize = (info: EventResizeDoneArg) => {
    const {
      id,
      title,
      extendedProps: { description },
      backgroundColor,
      start,
      end,
    } = info.event.toPlainObject();

    const newBoard = { ...board };
    newBoard.cards[id] = {
      id,
      title,
      description,
      color: backgroundColor,
      start,
      end,
    };

    setBoard(newBoard);
  };

  const handleMouseEnter = (info: EventHoveringArg) => {
    // show something fancy about the current card
  };

  const eventsData: ICard[] = [];

  for (const e in board.cards) {
    eventsData.push(board.cards[e]);
  }

  return (
    <Container maxWidth="xl" className={classes.root}>
      <FullCalendar
        allDaySlot={false}
        contentHeight={100}
        dayMaxEvents={true}
        editable={true}
        events={eventsData}
        eventClick={handleClick}
        eventDrop={handleEventDrop}
        eventMouseEnter={handleMouseEnter}
        eventResize={handleEventResize}
        headerToolbar={{
          left: '',
          center: 'title',
          right: 'today prev,next',
        }}
        height="100%"
        initialView="dayGridMonth"
        nowIndicator={true}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      />
    </Container>
  );
};

export default Calendar;
