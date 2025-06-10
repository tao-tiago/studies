const server1 = () => {
  return new Promise((resolve, reject) => {

    const data = {
      name: "content server 1"
    }

    setTimeout(() => {
      resolve(data)
    }, 6000);
  })
};

export default server1;