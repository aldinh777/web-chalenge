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

export function success(text) {
  createAlertField(text, 'lightgreen')
}

export function failed(text) {
  createAlertField(text, 'red')
}

export function info(text) {
  createAlertField(text, 'lightblue')
}
