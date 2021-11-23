// Monkeypatching a promise

const callBack = (resolve, reject) => {
  if (resolve) {
    return resolve;
  } else {
    throw new Error("ur shit wack");
  }
};

const Promise = (callBack) => {
  const then = (promiseHandler) => {
    const result = promiseHandler();
  };

  return { then };
};

const email = new Promise(function (resolve, reject) {
  resolve("Hello");
});

email
  .then((res) => {
    console.log("hello");
    return res;
  })
  .then((response) => {
    console.log("hello2");
    return response;
  });
