// Conditional Statement to tell the length of a string
  var input = prompt("Enter a string here: ");
  var length = input.length;

  if (length < 25) {
    document.write("This is a <b>short</b> string.<br><br>");
    document.write("The length of your string is <b>" + length + "</b> characters long.<br><br>");
    document.write("The string you entered is:<br><b>" + input + "</b>");

    console.log("This is a short string.");
    console.log("The length of your string is " + length + " characters long.");
    console.log("The string you entered is: " + input);


  } else {
    document.write("This is a <b>long</b> string.<br><br>");
    document.write("The length of your string is <b>" + length + "</b> characters long.<br><br>");
    document.write("The string you entered is:<br><b>" + input + "</b>");

    console.log("This is a long string.<br><br>");
    console.log("The length of your string is " + length + " characters long.");
    console.log("The string you entered is: " + input);

  }
