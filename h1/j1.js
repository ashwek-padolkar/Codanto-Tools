function display() {
  let selectedSeparator = "";

  const mergeBtn = document.querySelector(".mergeBtn");
  const options = document.querySelector(".options");

  options.addEventListener("click", function (e) {
    if (e.target.classList.contains("nothing")) {
      selectedSeparator = "";
    } else if (e.target.classList.contains("space")) {
      selectedSeparator = " ";
    } else if (e.target.classList.contains("minus")) {
      selectedSeparator = "-";
    } else if (e.target.classList.contains("plus")) {
      selectedSeparator = "+";
    } else if (e.target.classList.contains("custom_separator")) {
      let customSep = document.getElementById("custom_sep").value;
      selectedSeparator = customSep;
    } else {
      return;
    }
  });

  let selectedWrapper1 = "";
  let selectedWrapper2 = "";

  options.addEventListener("click", function (e) {
    if (e.target.classList.contains("nothing_wrap")) {
      selectedWrapper1 = "";
      selectedWrapper2 = "";
    } else if (e.target.classList.contains("double_wrap")) {
      selectedWrapper1 = '"';
      selectedWrapper2 = '"';
    } else if (e.target.classList.contains("sqr_bracket_wrap")) {
      selectedWrapper1 = "[";
      selectedWrapper2 = "]";
    } else if (e.target.classList.contains("curly_bracket_wrap")) {
      selectedWrapper1 = "{";
      selectedWrapper2 = "}";
    } else if (e.target.classList.contains("custom_wrapper")) {
      let customWrap = documen.getElementById("custom_wrap").value.trim().split("");
      if (customWrap.length == 2) {
        selectedWrapper1 = customWrap[0];
        selectedWrapper2 = customWrap[1];
      } else if (customWrap.length == 0) {
        alert("Please enter 2 characters that you want to wrap-in!");
      } else {
        alert("Enter only 2 characters without space!");
      }
    } else {
      return;
    }
  });

  // const mergeBtn = document.getElementById('mergebutton');
  options.addEventListener("click", function () {
    main(selectedSeparator, selectedWrapper1, selectedWrapper2);
  });

  mergeBtn.addEventListener("click", function () {
    main(selectedSeparator, selectedWrapper1, selectedWrapper2);
  });
}

function main(separator, wrapper1, wrapper2) {
  let textArea1 = document.getElementById("textarea1").value.trim().split("\n");
  let textArea2 = document.getElementById("textarea2").value.trim().split("\n");
  let textArea3 = document.getElementById("textarea3").value.trim().split("\n");

  let array = [];
  // 3 dimensional array for storing every possible combination of the keywords present in 3 textboxes.
  for (let i = 0; i < textArea1.length; i++) {
    for (let j = 0; j < textArea2.length; j++) {
      for (let k = 0; k < textArea3.length; k++) {
        array.push(wrapper1 + textArea1[i] + separator + textArea2[j] + separator + textArea3[k] + wrapper2);
      }
    }
  }
  let displayBox = document.getElementById("displaybox");

  // The join method does not modify the original array
  // array.join("\n") creates a new string that contains concatenation of all elements of the array with "\n" as the separator.
  displayBox.value = array.join("\n");

  let combo = document.getElementById("combo");
  combo.innerHTML = array.length;
}

function extraOptions() {
  const options = document.querySelector(".options");
  const plus = document.querySelector(".plusOpt");
  const minus = document.querySelector(".minusOpt");
  options.classList.toggle("hidden"); // Toggle the "hidden" class to show/hide the options field

  plus.classList.toggle("hidden");
  minus.classList.toggle("hidden");
}
