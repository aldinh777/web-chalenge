function createAlertField(text, color) {
  const alertField = document.createElement('div')
  
  let top = -60
  let flow = 'down'
  let stop = 0

  alertField.style.backgroundColor = color
  alertField.style.width = '100%'
  alertField.style.position = 'fixed'
  alertField.style.top = top + 'px'
  alertField.style.left = '0px'
  alertField.style.padding = '20px'
  alertField.style.textAlign = 'center'
  alertField.style.fontWeight = 'bold'
  alertField.style.fontSize = '20px'

  alertField.append(text)

  document.body.append(alertField)

  let alertInterval = setInterval(() => {
    switch (flow) {
      case 'down':
        top += 1
        alertField.style.top = top + 'px'
        if (top >= 0) {
          flow = 'stop'
        }
        break
      case 'up':
        top -= 1
        alertField.style.top = top + 'px'
        if (top <= -60) {
          flow = 'destroy'
        }
        break
      case 'stop':
        stop += 10
        if (stop >= 2000) {
          flow = 'up'
        }
        break
      case 'destroy':
        alertField.remove()
        clearInterval(alertInterval)
        break
    }
  }, 10)
}

function timeoutSync(delay) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay)
  })
}

export function sans(text) {
  let nextArray

  if (Array.isArray(text)) {
    if (text.length === 0) {
      return
    }
    nextArray = text.slice(1)
    text = text[0]
  }

  const dialogField = document.createElement('div')
  const sansVoice = new Audio('/audio/voice_sans.mp3')
  const sansDOM = document.querySelector('#sans')

  dialogField.style.textAlign = 'left'
  sansDOM.append(dialogField)

  let prom = timeoutSync(1000)

  for (const t of text) {
    prom = prom.then(() => {
      dialogField.append(t)
      sansVoice.currentTime = 0
      sansVoice.play()
      return timeoutSync(50)
    })
  }

  return prom
    .then(() => {
      return timeoutSync(2000)
    })
    .then(() => {
      dialogField.remove()
      return sans(nextArray)
    })
}

export function success(text) {
  createAlertField(text, 'lightgreen')
}

export function failed(text) {
  createAlertField(text, 'red')
}

export function info(text) {
  createAlertField(text, 'lightblue')
}
