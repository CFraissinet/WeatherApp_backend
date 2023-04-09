let body = {
  name: "Charles",
  email: "",
  password: "aaa",
};

function checkBody(body, verifArr) {
  // console.log(body);
  for (let element in body) {
    if (
      verifArr.indexOf(element) === -1 ||
      body[element] === undefined ||
      verifArr.length > Object.keys(body).length
    ) {
      return false;
    }
    // console.log(body[element]);
    // if (
    //   body[element] === "" ||
    //   body[element] === undefined ||
    //   body[element] === null
    // ) {
    //   return false;
    // }
  }

  return true;
}
module.exports = { checkBody };
