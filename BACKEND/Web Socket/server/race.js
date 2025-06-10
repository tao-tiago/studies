const race = async (request, limitTimeout) => {
  const limiter = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('request timeout')), limitTimeout)
  })

  return Promise.race([request, limiter])
}

export default race;