import React, { useEffect, useState } from "react";
import { H4, PageHead } from "../../components/styledComponents/New";

const StudentPlacement = ({ data }) => {
  const sessionList = ["2022-2023","2021-2022", "2020-2021", "2019-2020"];
  const monthList = [
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
    "January",
    "February",
    "March",
    "April",
    "May",
  ];
  const [activitiesData, setActivitiesData] = useState({});
  useEffect(() => {
    const newActivities = {};
    for (let session of sessionList) {
      newActivities[session] = {};
      for (let month of monthList) {
        newActivities[session][month] = [];
      }
    }
    for (let obj of data) {
      newActivities?.[obj.session]?.[obj.month].push(obj.photo);
    }
    setActivitiesData(newActivities);
    console.log(newActivities);
  }, [data]);
  return (
    <div>
      {Object.keys(activitiesData).map((element) => {
        return (
          <div style={{ marginTop: "50px" }}>
            <H4>Session: {element}</H4>

            {monthList.map((month) => (
              <div style={{marginTop : activitiesData[element][month].length > 0 ? "20px" : "0px", width: '40vw'}}>
                {activitiesData[element][month].length > 0 && (
                  <PageHead>{month}</PageHead>
                )}

                <div className="grid">
                  {activitiesData[element][month].map((image) => (
                    <>
                      <img
                        key={image}
                        src={image}
                        alt="Placement Activities"
                        onLoad={(e) => e.target.classList.add("loaded")}
                      />
                    </>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default StudentPlacement;
