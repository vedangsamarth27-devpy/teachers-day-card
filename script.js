// ===============================
// PAGE NAVIGATION
// ===============================

function goToPage(pageNumber) {

    // Remove active class from every page
    document.querySelectorAll(".page").forEach(function(page) {
        page.classList.remove("active");
    });

    // Show selected page
    document
        .getElementById("page" + pageNumber)
        .classList.add("active");

    // Create confetti
    createConfetti();
}


// ===============================
// CHECK MATH + ASSERTION REASON
// ===============================

function checkUnlock() {

    const mathAnswer =
        document.getElementById("mathAnswer").value;

    const selectedReason =
        document.querySelector(
            'input[name="reason"]:checked'
        );

    const startButton =
        document.getElementById("startButton");

    const result =
        document.getElementById("result");

    // Correct answer:
    //
    // 15 × 4 − 18 ÷ 3
    // = 60 − 6
    // = 54

    const mathCorrect =
        Number(mathAnswer) === 54;

    const reasonCorrect =
        selectedReason &&
        selectedReason.value === "A";


    // Both must be correct
    if (mathCorrect && reasonCorrect) {

        startButton.disabled = false;

        result.innerHTML =
            "✨ Correct! Your Teacher's Day card is unlocked! ✨";

        result.style.color = "#29965a";

    }

    else {

        startButton.disabled = true;

        if (
            mathAnswer !== "" &&
            Number(mathAnswer) !== 54
        ) {

            result.innerHTML =
                "Keep trying! Check the order of operations 🧠";

            result.style.color = "#c85b6e";

        }

        else if (
            selectedReason &&
            selectedReason.value !== "A"
        ) {

            result.innerHTML =
                "Hmm... think about why the subject wasn't stressful. 😉";

            result.style.color = "#c85b6e";

        }

        else {

            result.innerHTML = "";
        }
    }
}


// ===============================
// CONFETTI
// ===============================

function createConfetti() {

    const colors = [
        "#ff8fab",
        "#cdb4db",
        "#90dbf4",
        "#ffd166",
        "#b9fbc0"
    ];

    for (let i = 0; i < 25; i++) {

        const confetti =
            document.createElement("div");

        confetti.style.position = "fixed";

        confetti.style.left =
            Math.random() * 100 + "vw";

        confetti.style.top = "-10px";

        confetti.style.width = "8px";

        confetti.style.height = "8px";

        confetti.style.background =
            colors[
                Math.floor(
                    Math.random() * colors.length
                )
            ];

        confetti.style.borderRadius =
            Math.random() > 0.5
                ? "50%"
                : "2px";

        confetti.style.zIndex = "9999";

        confetti.style.pointerEvents = "none";

        const duration =
            2 + Math.random() * 2;

        confetti.style.transition =
            `top ${duration}s linear,
             transform ${duration}s linear,
             opacity ${duration}s`;

        document.body.appendChild(confetti);

        // Start falling
        setTimeout(function() {

            confetti.style.top = "110vh";

            confetti.style.transform =
                `rotate(${Math.random() * 720}deg)`;

            confetti.style.opacity = "0";

        }, 50);

        // Delete after animation
        setTimeout(function() {

            confetti.remove();

        }, duration * 1000 + 200);
    }
}
