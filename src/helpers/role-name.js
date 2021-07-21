export const transformToRoleName = (roleId) => {
  const options = { 1: "Admin", 2: "Teacher", 3: "Student" };
  return options[roleId];
};
