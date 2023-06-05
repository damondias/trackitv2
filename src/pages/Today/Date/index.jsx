import dayjs from 'dayjs';
import "dayjs/locale/pt-br";
import { Paragraph } from './style';


function Date() {
  let date = dayjs().date();
  let month = dayjs().month() + 1;
  let weekDayExtended = dayjs().locale('pt-br').format('dddd').replace("-feira", "");

  if (date < 10) {
    date = 0 + date.toString();
  }

  if (month < 10) {
    month = 0 + month.toString();
  }

  return (
    <Paragraph data-test="today">
      {weekDayExtended[0].toUpperCase()+ weekDayExtended.substring(1)}, {date}/{month}
    </Paragraph>
  )
}

export default Date;