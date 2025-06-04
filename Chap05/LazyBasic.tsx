import { Suspense, lazy } from "react";
import MyLoading from './MyLoading';

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
const LazyButton = lazy(() => sleep(2000).then(() => import('./LazyButton')));

export default function LazyBasic() {
  return (
    <Suspense fallback={<MyLoading/ >}>
      <LazyButton />
    </Suspense>
  );
}