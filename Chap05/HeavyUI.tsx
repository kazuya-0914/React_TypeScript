function sleep(delay: number) {
  const start = Date.now();
  while (Date.now() - start < delay);
}

type HeavyUIProps = {
  delay: number;
};

export default function HeavyUI({ delay }: HeavyUIProps) {
  sleep(delay);
  return <p>遅延時間は{delay}ミリ秒</p>
}