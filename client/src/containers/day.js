import { useEffect, useState } from "react";
import { Day } from "../components";
import { URL } from "../consts/url";
import { divideInChunk } from "../helper/helperMethods";
const colors = [
  "#FFE4E4",
  "#FFDAC5",
  "#E3E6FF",
  "#FFD3D3",
  "#CFFFD4",
  "#FFF3D3",
  "#BFFFC2",
];

export default function DayContainer({ ...restProps }) {
  const [days, setDays] = useState([]);
  useEffect(() => {
    fetch(`${URL}/`)
      .then((data) => data.json())
      .then((data) => setDays(JSON.parse(data.days)));
  }, []);
  return (
    <Day.Container {...restProps}>
      {days.map((day) => (
        <Day key={day.day}>
          <Day.Heading success={day.words.length >= 30 ? true : false}>
            Day {day.day}
          </Day.Heading>
          <Day.Row>
            {divideInChunk(day.words, 8).map((card, index) => (
              <Day.Card color={colors[Math.floor(Math.random() * 7)]}>
                <Day.List>
                  {card.map((word) => (
                    <Day.Item key={word}>{word}</Day.Item>
                  ))}
                </Day.List>
              </Day.Card>
            ))}
          </Day.Row>
        </Day>
      ))}
      {days.length === 0 && <h3>You haven't listed any day yet !</h3>}
    </Day.Container>
  );
}
