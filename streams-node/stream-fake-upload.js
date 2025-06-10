import { Readable } from "node:stream"

class StreamReadable extends Readable {
  index = 1

  _read() {
    const i = this.index++

    setTimeout(() => {
      if (i > 10) {
        console.log("close")
        this.push(null)
      } else {
        const buf = Buffer.from(i.toString())
        this.push(buf)
        console.log("buf", i)
      }
    }, 1500)
  }
}

fetch("http://localhost:3333", {
  method: "POST",
  body: new StreamReadable(),
  duplex: 'half'
})