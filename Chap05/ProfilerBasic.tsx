import { Profiler } from 'react';
import HeavyUI from './HeavyUI';

export default function ProfilerBasic() {
  const handleMeasure = (
    id: string,
    phase: 'mount' | 'update' | 'nested-update',
    actualDuration: number,
    baseDuration: number,
    startTime: number,
    commitTime: number
  ) => {
    console.log('id: ', id);
    console.log('phase: ', phase);
    console.log('actualDuration: ', actualDuration);
    console.log('baseDuration: ', baseDuration);
    console.log('startTime: ', startTime);
    console.log('endTime', commitTime);
  };

  return (
  <Profiler id="heavy" onRender={handleMeasure}>
    <HeavyUI delay={1500} />
    <HeavyUI delay={500} />
    <HeavyUI delay={2000} />
  </Profiler>
  );
}