import React from 'react'

import {
  failed,
  sans,
} from '../alert'

class FinalStage extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      showSans: false,
      sansAct: false,
      chaos: {
        title: 'Final Stage',
        username: 'Username',
        password: 'Password',
        dataUsername: 'sans skeleton',
        dataPassword: 'undertale',
        submit: 'Submit',
      }
    }

    this.audio = new Audio('/audio/megalovania.ogg')
    this.audio.addEventListener('ended', function() {
      this.currentTime = 8
      this.play()
    })
    this.onClick = this.onClick.bind(this)
    this.startChaos = this.startChaos.bind(this)
  }
    
  startChaos() {
    function scramble(text) {
      if (!text) {
        return ''
      }
      const rndNumber = Math.floor(Math.random() * text.length)
      const rndLetter = text[rndNumber]
      const nextText = text.replace(rndLetter, '')
      return rndLetter + scramble(nextText)
    }

    const {title, username, password, dataUsername, dataPassword, submit} = this.state.chaos
    const titlePage = document.querySelector('h1')
    setInterval(_ => {
      this.setState({
        chaos: {
          title: scramble(title),
          username: scramble(username),
          password: scramble(password),
          dataUsername: scramble(dataUsername),
          dataPassword: scramble(dataPassword),
          submit: scramble(submit),
        }
      })
      titlePage.innerText = scramble(titlePage.innerText)
    }, 100)
  }

  onClick() {
    const delay = ms => new Promise(res => setTimeout(_ => res(), ms))
    const form = this.form
    const usernameValue = this.username.value
    const passwordValue = this.password.value
    const {username, password} = form.dataset

    if (usernameValue === username && passwordValue === password) {
      sans([
        'Tidak semudah itu ferguso',
        'Apa kau pikir bisa menang dengan semudah itu?',
      ])
      .then(_ => this.setState({sansAct: true}))
      .then(_ => this.audio.play())
      .then(_ => this.startChaos())
      .then(_ => delay(2000))
      .then(_ => sans([
        'Peraturannya disini cukup Sederhana',
        'Cukup masukkan username dan passwordnya sebelum teracak lagi',
        'Kecepatan Copy dan Paste mu akan teruji disini',
        'Semoga Sukses',
      ]))
      .then(_ => delay(10000))
      .then(_ => sans([
        'Sebelumnya, perkenalkan! Aku adalah Sans Skeleton',
        'Senang bertemu denganmu',
        'Sangat disayangkan, aku disini sebagai Final Boss',
      ]))
      .then(_ => delay(60000))
      .then(_ => sans([
        'Apa kamu kesulitan dengan puzzle ini?',
        'Tenangkan pikiran dan nikmati saja',
        'Lagipula ini adalah Final Stage, stage terakhir',
        'Sans saja'
      ]))
      this.setState({showSans: true})
    } else {
      failed('Username atau Password Salah')
    }
  }

  render() {
    const {showSans, sansAct, chaos} = this.state

    const sansStyle = {
      display: showSans ? 'block' : 'none',
    }

    if (sansAct) {
      sansStyle.top = 0
      sansStyle.right = 0
    }

    return (
      <form 
      data-username={chaos.dataUsername}
      data-password={chaos.dataPassword}
      ref={ref => this.form = ref}
      >
        <h6>{chaos.title}</h6>
        <label htmlFor='username'>{chaos.username}</label>
        <br/>
        <input type='text' name='username' ref={ref => this.username = ref}/>
        <br/>
        <label htmlFor='password'>{chaos.password}</label>
        <br/>
        <input type='password' name='password' ref={ref => this.password = ref}/>
        <br/>
        <button type='button' onClick={showSans ? null : this.onClick}>{chaos.submit}</button>

        <div id="sans" style={sansStyle}>
          <img src="/image/sans.gif" alt="Sans Here" width="100px" ref={ref => this.sans = ref}/>
        </div>
      </form>
    )
  }
}

export default FinalStage
