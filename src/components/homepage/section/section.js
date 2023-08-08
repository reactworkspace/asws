//  style
import style from './section.module.css';

// import button componenet
import { PrimaryButton } from '../buttons/buttons';

// import svg as react component
import { ReactComponent as Line } from '../../../assets/svg/homepage/Line.svg';
import { ReactComponent as SquareIcon } from '../../../assets/svg/homepage/square_icon.svg';
import { ReactComponent as StartLeftDesign } from '../../../assets/svg/homepage/star_left_group.svg';
import { ReactComponent as StartRightDesign } from '../../../assets/svg/homepage/star_right_group.svg';

// import Chart Component
import { PieChart, Pie, Cell } from 'recharts';

// Section
export const Section = ({ children }) => {
  return <div className={style.section_container}>{children}</div>;
};

// Title
export const Title = (props) => {
  const { title } = props;
  return (
    <div className={style.title_container}>
      <div className={style.title_line}>
        <Line />
      </div>
      <div className={style.title_wrapper}>
        <span>{title}</span>
      </div>
    </div>
  );
};

// Content
export const Content = ({ children }) => {
  return <div className={style.content_container}>{children}</div>;
};

// List
export const List = ({ children }) => {
  return <div className={style.list_container}>{children}</div>;
};

export const ListItem = (props) => {
  const { title, paragraph } = props;
  return (
    <div className={style.list_item_container}>
      <div className={style.list_item_title}>
        <SquareIcon />
        <div>
          <span>{title}</span>
        </div>
      </div>
      <div className={style.list_item_paragraph}>
        <span>{paragraph}</span>
      </div>
    </div>
  );
};

// Project Card
export const ProjectCard = (props) => {
  const { cardHeading, cardParagraph, btnTitle, btnAddress } = props;
  return (
    <div className={style.projectcard_container}>
      <div className={style.projectcard_wrapper}>
        <div className={style.project_heading_container}>
          <div>
            <h3>{cardHeading}</h3>
          </div>
          <div className={style.projectcard_paragraph}>
            <span>{cardParagraph}</span>
          </div>
        </div>
        <div className={style.projectcard_button}>
          <PrimaryButton title={btnTitle} address={btnAddress} />
        </div>
      </div>
    </div>
  );
};

// Statistics
export const Statistics = (props) => {
  const {
    percentage1,
    dataLabel1,
    percentage2,
    dataLabel2,
    percentage3,
    dataLabel3,
    percentage4,
    dataLabel4,
    percentage5,
    dataLabel5,
  } = props;
  return (
    <div className={style.statistics_container}>
      <div className={style.statistics_wrapper}>
        <div className={style.statistic_data_container}>
          <div className={style.statistic_data_1}></div>
          <div>
            <span>
              {' '}
              {percentage1}% {dataLabel1}
            </span>
          </div>
        </div>
        <div className={style.statistic_data_container}>
          <div className={style.statistic_data_2}></div>
          <div className={style}>
            <span>
              {' '}
              {percentage2}% {dataLabel2}
            </span>
          </div>
        </div>
        <div className={style.statistic_data_container}>
          <div className={style.statistic_data_3}></div>
          <div className={style}>
            <span>
              {' '}
              {percentage3}% {dataLabel3}
            </span>
          </div>
        </div>
        <div className={style.statistic_data_container}>
          <div className={style.statistic_data_4}></div>
          <div className={style}>
            <span>
              {' '}
              {percentage4}% {dataLabel4}
            </span>
          </div>
        </div>
        <div className={style.statistic_data_container}>
          <div className={style.statistic_data_5}></div>
          <div className={style}>
            <span>
              {' '}
              {percentage5}% {dataLabel5}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Chart
export const Chart = () => {
  const data = [
    { name: 'Group A', value: 40 },
    { name: 'Group B', value: 35 },
    { name: 'Group C', value: 13 },
    { name: 'Group D', value: 10 },
    { name: 'Group D', value: 5 },
  ];
  const COLORS = ['#bef3c0', '#ac94f1', '#fff0ca', '#f9cf64', '#f38fbf'];

  return (
    <div>
      <PieChart width={330} height={310} id="pie-chart">
        <Pie
          data={data}
          cx={160}
          cy={150}
          innerRadius={80}
          outerRadius={150}
          fill="#8884d8"
          dataKey="value"
          stroke="none" // This will remove the border
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};

// Donation Card
export const DonationCard = (props) => {
  const { heading, btnTitle, btnAddress } = props;
  return (
    <div className={style.donationcard_container}>
      <div className={style.donationcard_wrapper}>
        <div className={style.donationcard_heading}>
          <span>{heading}</span>
        </div>
        <PrimaryButton title={btnTitle} address={btnAddress} />
      </div>
      <div className={style.start_left_container}>
        <StartLeftDesign />
      </div>
      <div className={style.start_right_container}>
        <StartRightDesign />
      </div>
    </div>
  );
};

// Event Title
export const EventTitle = (props) => {
  const { title } = props;

  return (
    <div className={style.eventtitle_container}>
      <div className={style.eventtitle_title}>
        <span>{title}</span>
      </div>
      <div className={style.eventtitle_line}></div>
    </div>
  );
};

// Event Cards
export const EventCard = (props) => {
  const { eventDay, eventMonth, eventDetail, eventHeading } = props;

  return (
    <div className={style.eventcard_container}>
      <div className={style.eventcard_wrapper}>
        <div className={style.eventcard_date}>
          <div className={style.eventcard_day}>{eventDay}</div>
          <div className={style.eventcard_month}>{eventMonth}</div>
        </div>
        <div className={style.eventcard_details}>
          <div className={style.eventcard_detail}>{eventDetail}</div>
          <div className={style.eventcard_heading}>
            <h3>{eventHeading}</h3>
          </div>
        </div>
        <div className={style.eventcard_button}></div>
      </div>
    </div>
  );
};