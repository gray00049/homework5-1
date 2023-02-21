import CardImage from "./CardImage";
import CardTitle from "./CardTitle";
import CardDesc from "./CardDesc";
import CardBtn from "./CardBtn";

export default function Card(props) {
  return (
    <div className="card" style={{ width: 250 + 'px' }}>

      <CardImage alt={props.altImg} src={props.srcImg}/>

      <div className="card-body">
        <CardTitle>{props.title}</CardTitle>
        <CardDesc>{props.descr}</CardDesc>
        <CardBtn 
          text={props.btnText}
          type={props.btnType}
          href={props.btnHref}
        />
      </div>

    </div>
  )
}