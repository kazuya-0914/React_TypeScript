export default function wrapPromise<T>(promise: Promise<T>) {
  let status: 'pending' | 'fulfilled' | 'rejected' = 'pending';
  let data: T;
  let error: unknown;

  const wrapper = promise.then(
    (result: T) => {
      status = 'fulfilled';
      data = result;
    },
    (e: unknown) => {
      status = 'rejected';
      error = e;
    }
  );

  return {
    get() {
      switch (status) {
        case 'fulfilled':
          return data;
        case 'rejected':
          throw error;
        case 'pending':
          throw wrapper;
        default:
          throw new Error("Unexpected status");
      }
    }
  };
}