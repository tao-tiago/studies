import http from "node:http"
import { Transform } from "node:stream"

class StreamTransform extends Transform {
  _transform(chunk, _encoding, callback) {
    const transf = Number(chunk.toString()) * -1

    console.log("my upload", transf.toString())

    callback(null, Buffer.from(transf.toString()))
  }
}

// req is a Readable stream
// res is a Writable stream
const server = http.createServer((req, res) => {
  return req
    .pipe(new StreamTransform())
    .pipe(res)
})

server.listen(3333)