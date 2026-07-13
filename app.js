const input = document.getElementById("numberInput");
    const btn = document.getElementById("checkBtn");
    const result = document.getElementById("result");

    function speedChecker() {
      const raw = input.value.trim();
      const speed = Number(raw);

      result.classList.remove("text-green-400", "text-amber-400", "text-red-400");

      if (raw === "" || isNaN(speed) || speed < 0 || speed > 300) {
        result.classList.add("text-red-400");
        result.textContent = "Please Enter a Valid Speed";
        return;
      }

      if (speed > 120) {
        result.classList.add("text-red-400");
        result.textContent = "License Suspended";
      } else if (speed > 100) {
        result.classList.add("text-red-400");
        result.textContent = "Fine: Rs. 5000";
      } else if (speed > 80) {
        result.classList.add("text-red-400");
        result.textContent = "Fine: Rs. 2000";
      } else if (speed > 60) {
        result.classList.add("text-amber-400");
        result.textContent = "Warning! Drive Carefully";
      } else {
        result.classList.add("text-green-400");
        result.textContent = "Safe Driving";
      }
    }

    btn.addEventListener("click", speedChecker);
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") speedChecker();
    });