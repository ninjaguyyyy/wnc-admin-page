import React from "react";
import { Doughnut } from "react-chartjs-2";
import { ROLE_USER } from "../../../../common/constants";

export default function UsersChart({ users }) {
  const attendedUsersTotal = users.filter(
    (user) => user.attendedCourses.length !== 0
  ).length;
  const teacherUsersTotal = users.filter(
    (user) => user.role === ROLE_USER.TEACHER
  ).length;
  const disabledUsersTotal = users.filter((user) => !user.isActivated).length;
  const guestUsersTotal = users.filter(
    (user) => user.role === ROLE_USER.STUDENT && user.isActivated
  ).length;

  const data = {
    labels: ["Disabled", "Guest", "Attended", "Teacher"],
    datasets: [
      {
        label: "# of Votes",
        data: [
          disabledUsersTotal,
          guestUsersTotal,
          attendedUsersTotal,
          teacherUsersTotal,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-gray-200">
      <header className="px-5 py-4 border-b border-gray-100">
        <h2 className="font-semibold text-gray-800">Category Students</h2>
      </header>

      <Doughnut data={data} />
    </div>
  );
}
