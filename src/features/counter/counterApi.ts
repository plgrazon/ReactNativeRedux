// A mock function to mimic making an async request for data
export const fetchCount = (amount = 1) => {
  const timeOutDuration = [500, 1000, 2000, 4000, 8000];
  const timeOut =
    timeOutDuration[Math.floor(Math.random() * timeOutDuration.length)];

  return new Promise<{data: number}>((resolve, reject) =>
    setTimeout(() => {
      if (Math.floor(Math.random() * 2)) reject();
      resolve({data: amount});
    }, timeOut),
  );
};
