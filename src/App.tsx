// import React from 'react';
// import logo from './logo.svg';
import { useState } from "react"
import "./App.css"
import Title from "./components/Title"
import Form from "./components/Form"
import Result from "./components/Result"

type ResultStateType = {
  country: string
  cityName: string
  temperture: string
  conditionText: string
  icon: string
}

function App() {
  // stateを使って値を格納しようね
  const [city, setCity] = useState<string>("")
  const [results, setResults] = useState<ResultStateType>({
    country: "",
    cityName: "",
    temperture: "",
    conditionText: "",
    icon: "",
  })

  const apiUrl = `https://api.weatherapi.com/v1/current.json?key=15c186c93aed43db9b182005232905&aqi=no&q=${city}`

  // お天気API実行する関数
  const getWeather = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(`apiUrl = ${apiUrl}`)

    e.preventDefault() // ボタン押下時に画面をリロードしないためのおまじない
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        setResults({
          country: data.location.country,
          cityName: data.location.name,
          temperture: data.current.temp_c,
          conditionText: data.current.condition.text,
          icon: data.current.condition.icon,
        })
      })
  }

  return (
    <div className="test">
      <Title />
      <Form setCity={setCity} getWeather={getWeather} />
      <Result results={results} />
    </div>
  )
}

export default App
