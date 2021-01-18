const p = new Promise((resolve, reject) => {
  setTimeout(resolve(" Promise fulfilled"), 8000);
});

doAfterSeconds(8).then(() => {
  console.log("I am called asynchronously"); // logged out after 8 seconds
});
