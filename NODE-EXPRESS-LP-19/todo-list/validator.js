const validateTask = (task, isRequired = true) => {
  if (task) isRequired = true;
  if (isRequired && (typeof task !== "string" || task.length < 3)) {
    return false;
  }
  return true;
};

const validateStatus = (status, isRequired = true) => {
  if (status == false || status) isRequired = true;
  if (isRequired && typeof status !== "boolean") {
    return false;
  }
  return true;
};

const validateId = (id, isRequired = true) => {
  if (id || id == 0) isRequired = true;
  if (
    isRequired &&
    (id === null ||
      typeof id === "boolean" ||
      isNaN(id) ||
      String(id).length < 1)
  ) {
    return false;
  }
  return true;
};

module.exports = {
  validateId,
  validateStatus,
  validateTask,
};
