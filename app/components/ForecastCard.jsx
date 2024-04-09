import Link from "next/link";

const ForecastCard = ({ day, location }) => {
  return (
    <div className="stats">
      <div className="stat">
        <div className="card-title">{day.date}</div>
        <div className="stat-value">{day.day.condition.text}</div>
        <div className="kbd bg-gradient-to-br from-blue-500 to-gray-900 mt-2">
          <img
            src={"https:" + day.day.condition.icon}
            alt="icon"
            height="40"
            width="40"
          />
        </div>
        <Link className="btn" href={`/forecast/${location}/${day.date}`}>
          View More
        </Link>
      </div>
    </div>
  );
};

export default ForecastCard;
