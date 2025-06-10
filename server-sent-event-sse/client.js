const eventSource = new EventSource('http://localhost:3333/calls/notifications/messages')

function updateMessage (message) {
  const list = document.getElementById('messages')
  const item = document.createElement('p')
  item.textContent = message
  list.appendChild(item)
}

eventSource.onmessage = function (event) {
  updateMessage(event.data)
}

eventSource.onerror = function () {
  updateMessage('Server closed connection')
  eventSource.close()
}
