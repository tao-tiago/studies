const server3 = () => {
  return new Promise((resolve, reject) => {

    const data = {
      name: "content server 3"
    }

    setTimeout(() => {
      resolve(data)
    }, 4000);
  })
};

export default server3;