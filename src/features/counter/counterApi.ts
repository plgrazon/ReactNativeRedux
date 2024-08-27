// A mock function to mimic making an async request for data
export const fetchCount = (amount = 1) => {
  const timeOutDuration = [500, 1000, 2000, 4000];
  const timeOut =
    timeOutDuration[Math.floor(Math.random() * timeOutDuration.length)];
  const rejectionRates = [0, 1, 1];
  const rejectionProbabilty =
    rejectionRates[Math.floor(Math.random() * rejectionRates.length)];

  return new Promise<{data: number}>((resolve, reject) =>
    setTimeout(() => {
      if (rejectionProbabilty) reject();
      else resolve({data: amount});
    }, timeOut),
  );
};
