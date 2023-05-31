type FormPropsType = {
  setCity: React.Dispatch<React.SetStateAction<string>>
  getWeather: (e: React.FormEvent<HTMLFormElement>) => void
}

const Form = (props: FormPropsType) => {
  return (
    <form onSubmit={props.getWeather}>
      <input type="text" name="city" placeholder="都市名を入力してね" onChange={(e) => props.setCity(e.target.value)} />
      <button type="submit">天気を取得</button>
    </form>
  )
}

export default Form
