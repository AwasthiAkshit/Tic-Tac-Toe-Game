let boxes = document.querySelectorAll(".btn");
let reset = document.querySelector(".rst");
let turnO = true;
const winPattern = [[0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8], [2, 4, 8], [3, 4, 5], [6, 7, 8]];
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO == true) {
            box.innerText = "O"
            turnO = false;
        }
        else {
            box.innerText = "X"
            turnO = true;
        }
        box.disabled = true;
        check();
    })
})
const check = () => {
    for (let pattern of winPattern) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if (pos1 !== "" && pos1 === pos2 && pos2 === pos3) {
            alert(`${pos1} is the winner!!`);
            for (let i = 0; i < boxes.length; i++) {
                boxes[i].disabled = true;
            }


        }

    }
}
reset.addEventListener("click", () => {
    boxes.forEach(box => {
        box.innerText = "";
        box.disabled = false;
    });
})

