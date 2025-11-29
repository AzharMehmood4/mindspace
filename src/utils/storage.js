export const getCompletedMeditations = () => {
  const saved = localStorage.getItem("completedMeditations");
  return saved ? JSON.parse(saved) : [];
};

export const addCompletedMeditation = (id) => {
  const completed = getCompletedMeditations();
  if (!completed.includes(id)) {
    completed.push(id);
    localStorage.setItem("completedMeditations", JSON.stringify(completed));
  }
};
