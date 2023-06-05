import dayjs from 'dayjs';
import ptBr from "dayjs/locale/pt-br";
import { Paragraph } from './style';


function Date() {
  let date = dayjs().date();
  let month = dayjs().month() + 1;
  let weekDay = dayjs().day();
  let weekDayExtended = dayjs(weekDay).locale(ptBr).format('dddd').replace("-feira", "");

  if (date < 10) {
    date = 0 + date.toString();
  }

  if (month < 10) {
    month = 0 + month.toString();
  }

  return (
    <Paragraph>{weekDayExtended}, {date}/{month}</Paragraph>
  )
}

export default Date;