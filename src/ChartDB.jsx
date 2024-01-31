
export const ChartDB = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
          const data = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            sale: [12000, 19000, 3000, 5000, 2000, 3000, 9000, 10000, 13000, 15000, 16000, 12000],
            expenses: [8000, 10000, 5000, 2000, 6000, 4000, 5000, 8000, 9000, 10000, 11000, 9000],
          };
          resolve(data);
        }, 10000); // Simulates a network delay of 1 second
      });
}
