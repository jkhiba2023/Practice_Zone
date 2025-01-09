function function_name1() {
  console.log("Inside function_name1");

  function function_name2() {
    console.log("Inside function_name2");

    function function_name3() {
      console.log("Inside function_name3");
    }
    return function_name3; // Return function_name3
  }
  return function_name2; // Return function_name2


}
function_name1();