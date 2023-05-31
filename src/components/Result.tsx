type ResultPropsType = {
  results: {
    country: string
    cityName: string
    temperture: string
    conditionText: string
    icon: string
  }
}

const Result = (props: ResultPropsType) => {
  return (
    <div>
      結果があれば表示しちゃうわよ
      {props.results.country && (
        <div>
          {props.results.country}
          {props.results.cityName}
          <img src={props.results.icon} />
          {props.results.conditionText}
          {props.results.temperture}
        </div>
      )}
    </div>
  )
}

export default Result
