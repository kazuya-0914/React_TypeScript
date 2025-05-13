type MyHello = {
  myName: string;
}

export default function Hello(props: MyHello) {
  return (
    <div>こんにちは、{props.myName}さん！</div>
  );
}