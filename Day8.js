//Write a function to generate 6 digit otp

function getOTP(num) {
  let otp = "";
  for (let i = 0; i < num; i++) {
    otp = otp + Math.floor(Math.random() * 10);
  }
  return otp;
}

const OTP = getOTP(6);
console.log(`Your OTP is ${OTP}`);