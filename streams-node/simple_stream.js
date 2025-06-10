import { Readable, Transform, Writable } from "node:stream"

class StreamReadable extends Readable {
  index = 1

  _read() {
    const i = this.index++

    setTimeout(() => {
      if (i > 10) {
        this.push(null)
      } else {
        const buf = Buffer.from(i.toString())
        this.push(buf)
      }
    }, 1500)
  }
}

class StreamTransform extends Transform {
  _transform(chunk, encoding, callback) {
    const transf = Number(chunk.toString()) * -1
    callback(null, Buffer.from(transf.toString()))
  }
}

class StreamWritable extends Writable {
  _write(chunk, encoding, callback) {
    process.stdout.write(`${chunk.toString()}\n`)
    callback()
  }
}

new StreamReadable()
  .pipe(new StreamTransform())
  .pipe(new StreamWritable())