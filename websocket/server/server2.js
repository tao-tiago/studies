const server2 = () => {
  return new Promise((resolve, reject) => {

    const data = {
      name: "content server 2"
    }

    setTimeout(() => {
      resolve(data)
    }, 2000);
  })
};

export default server2;