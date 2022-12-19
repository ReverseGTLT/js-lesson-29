const reactions = ["👍", "👎", "💚", "💩", "🤣"];

const container = document.querySelector(".container");

const reactionElements = reactions.map((reaction) => {
    const wrapper = document.createElement("div");
    const button = document.createElement("button");
    button.innerText = reaction;
    const counter = document.createElement("div");
    counter.classList.add("counter");
    counter.innerText = 0;
    wrapper.append(button, counter);

    return wrapper;
});

reactionElements.forEach((elem) => container.appendChild(elem));
container.addEventListener("click", addReaction);

function addReaction(e) {
    let reaction = e.target;
    if (reaction.closest("button")) {
        const index = reactionElements.findIndex(
            (el) => el.querySelector("button").innerText === reaction.innerText
        );

        const count = reactionElements[index].querySelector(".counter");
        count.innerText = Number(count.innerText) + 1;
    }
}