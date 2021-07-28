import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import React, { useEffect, useState } from "react";
import {
  MdCheckCircle,
  MdDelete,
  MdLock,
  MdScreenShare,
  MdStopScreenShare,
} from "react-icons/md";
import { generateURLGetImageResource } from "../../../../helpers";
import { adminService } from "../../../../services/admin.service";

function CoursesTable({ courses, reload }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    courses.length && setLoading(false);
    return () => {
      // cleanup
    };
  }, [courses]);

  const handleDisable = async (courseId) => {
    const { success } = await adminService.disableCourse(courseId);
    success && reload(Math.random());
  };

  const handleEnable = async (courseId) => {
    const { success } = await adminService.enableCourse(courseId);
    success && reload(Math.random());
  };

  const handleDelete = async (courseId) => {
    const { success } = await adminService.deleteCourse(courseId);
    success && reload(Math.random());
  };

  return (
    <div className="col-span-full xl:col-span-12 bg-white shadow-lg rounded-sm border border-gray-200">
      <header className="px-5 py-4 border-b border-gray-100">
        <h2 className="font-semibold text-gray-800">Courses List</h2>
      </header>
      <div className="p-3">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs uppercase text-gray-400 bg-gray-50 rounded-sm">
              <tr>
                <th className="p-2">
                  <div className="font-semibold text-left">Name</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Teacher</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Price</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Rating</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Status</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Category</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Actions</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm font-medium divide-y divide-gray-100">
              {/* Row */}

              {loading && (
                <div className="spinner">
                  <CircularProgress color="secondary" />
                </div>
              )}
              {courses.map((course) => (
                <tr key={course._id}>
                  <td className="p-2">
                    <div className="flex items-center">
                      {course.avatar && (
                        <img
                          width={60}
                          height={30}
                          src={generateURLGetImageResource(course.avatar)}
                          alt="avatar"
                        />
                      )}

                      <div className="pl-3 text-gray-800">{course.title}</div>
                    </div>
                  </td>
                  <td className="p-2">
                    <div className="text-center">
                      {course.lecturer.userName}
                    </div>
                  </td>
                  <td className="p-2">
                    <div className="text-center ">{`$${course.originPrice}`}</div>
                  </td>
                  <td className="p-2">
                    <div className="text-center">{course.rating}</div>
                  </td>
                  <td className="p-2">
                    <div className="text-center">
                      {!course.isDisabled ? (
                        <Tooltip title="Active" className="">
                          <Typography className="inline">
                            <MdCheckCircle
                              color="#2da040"
                              className="inline icon-size-extra-small"
                            />
                          </Typography>
                        </Tooltip>
                      ) : (
                        <Tooltip title="Disabled" className="">
                          <Typography className="inline">
                            <MdLock
                              color="rgb(29 31 30)"
                              className="inline icon-size-extra-small"
                            />
                          </Typography>
                        </Tooltip>
                      )}
                    </div>
                  </td>
                  <td className="p-2">
                    <div className="text-center ">
                      {course.category?.name || "null"}
                    </div>
                  </td>
                  <td className="text-center ">
                    <Tooltip title="Enable" className="">
                      <Button
                        style={{ minWidth: 0 }}
                        onClick={() => handleEnable(course._id)}
                      >
                        <MdScreenShare
                          color="#1c97ef"
                          className="inline icon-size-small action-icon"
                        />
                      </Button>
                    </Tooltip>
                    <Tooltip title="Disable" className="">
                      <Button
                        style={{ minWidth: 0 }}
                        onClick={() => handleDisable(course._id)}
                      >
                        <MdStopScreenShare
                          color="#2b3238"
                          className="inline icon-size-small action-icon"
                        />
                      </Button>
                    </Tooltip>
                    <Tooltip title="Delete">
                      <Button
                        style={{ minWidth: 0 }}
                        onClick={() => handleDelete(course._id)}
                      >
                        <MdDelete
                          color="#d23030"
                          className="inline icon-size-small action-icon"
                        />
                      </Button>
                    </Tooltip>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CoursesTable;
